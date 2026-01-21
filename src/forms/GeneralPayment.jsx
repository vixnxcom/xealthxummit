// PaymentPage.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GeneralPayment = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handlePayment = () => {
    if (!email) {
      alert('Please enter your email address')
      return
    }

    setLoading(true)

    if (!window.PaystackPop) {
      const script = document.createElement('script')
      script.src = "https://js.paystack.co/v1/inline.js"
      script.async = true
      script.onload = () => initializePayment()
      script.onerror = () => {
        setLoading(false)
        alert('Payment service is unavailable')
      }
      document.body.appendChild(script)
    } else {
      initializePayment()
    }
  }

  const initializePayment = () => {
    const reference = `HTF_${Date.now()}`
    
    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: email,
      amount: 2500000, // ₦10,000 in kobo
      ref: reference,
      currency: 'NGN',
      
      callback: function(response) {
        setLoading(false)
        alert('Payment successful! Registration complete.')
        navigate('/booking')
      },
      
      onClose: function() {
        setLoading(false)
        alert('Payment cancelled')
      }
    })
    
    handler.openIframe()
  }

  return (
    <div className="h-screen flex justify-center  mx-auto px-4 sm:px-6">
  <div className="px-6 sm:px-8  max-w-2xl lg:max-w-3xl w-full">
    <h1 className="text-[20px] mt-40 sm:text-[24px] md:text-[28px] editors-bold text-center mb-2">
      Complete Payment
    </h1>
    <p className="text-center editors-reg mb-6 text-[16px] sm:text-[16px]">
    General Pass Registration
    </p>
    
    <div className="mb-6 w-full max-w-xl mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-3 sm:p-4 text-[14px] sm:text-[16px] outline-none
         editors-reg border border-gray-600 
        rounded-[16px]"
        required
      />
    </div>
    
    <div className="max-w-xl mx-auto">
      <button
        onClick={handlePayment}
        disabled={loading || !email}
        className="w-full py-3 sm:py-4 bg-black editors-reg text-white rounded-[8px] active:scale-103 
         cursor-pointer
        disabled:!bg-cyan text-[14px] sm:text-[16px]"
      >
        {loading ? 'Processing...' : 'Pay ₦25,000 Now'}
      </button>
      
      <button
        onClick={() => navigate('/general')}
        className="w-full py-2 text-black text-[16px] mt-10 sm:text-[16px] editors-reg underline"
      >
        ← Back to Form
      </button>
    </div>
  </div>
</div>
  )
}

export default GeneralPayment