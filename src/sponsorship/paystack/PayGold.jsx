import React, { useState } from "react"
import { arrow } from "../../assets"

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
     <div className="flex flex-col items-center bg-blue justify-center ">
    
            <div className=" h-[40vh] md:-[100vh] bg-space">
              <h1 className='text-5xl px-6 py-10  mt-40 xs:mt-20 editors-bold text-cyan letter-shade  '>
        Pay Sponsorship Fee
        </h1>
        </div>
          <div className="h-[60vh]  justify-center  items-center p-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[80vw] border border-white mt-20  p-4 editors-reg  text-[20px] text-white"
          />
         
          <button
            onClick={handlePayment}
            className="mt-4 editors-reg text-[28px] border border-white flex flex-row items-center mx-auto  text-blue-200
            md:w-[24vw]
                md:h-[4vw] w-[80vw] h-[16vw] "
            
          >
           <p className='editors-reg font-medium text-white mx-auto text-[20px] flex flex-row items-center'>
                       Pay Now
                          <span className='bg-cyan w-10 h-10 rounded-full mx-2 flex items-center justify-center'>
                            <img src={arrow} alt="" className='w-5 h-5'/>
                          </span>
                        </p>
          </button>
    
          {paymentSuccess && (
            <p className="mt-4 text-green-500">
              Payment successful 🎉
            </p>
          )}
        </div>
        </div>
  )
}

export default PayGold
