import React, { useState } from "react"

const PayGold = () => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
  const amount = 5000 * 100

  const [email, setEmail] = useState("")
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handlePayment = () => {
    if (!email) {
      alert("Please enter your email")
      return
    }

    if (!window.PaystackPop) {
      alert("Paystack not loaded")
      return
    }

    const ref = `GOLD_${Date.now()}`

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount,
      ref,
      callback: (response) => {
        localStorage.setItem("hasPaid", "true")
        localStorage.setItem("payRef", response.reference)
        setPaymentSuccess(true)
      },
      onClose: () => {
        alert("Payment was not completed.")
      },
    })

    handler.openIframe()
  }

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[60vw] p-4 editors-reg rounded-[8px] text-[20px]"
      />
      <button
        onClick={handlePayment}
        className="mt-4 font-bold text-[5vw]"
      >
        Pay
      </button>

      {paymentSuccess && (
        <p className="mt-4 text-green-500">
          Payment successful 🎉
        </p>
      )}
    </div>
  )
}

export default PayGold
