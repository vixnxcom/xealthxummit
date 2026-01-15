// In your StartUpButton.jsx (payment button)
import React, { useState } from 'react';
import { arrw } from '../assets';
import { useNavigate } from 'react-router-dom';

const StartUpButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setLoading(true);

    // Load Paystack script
    if (!window.PaystackPop) {
      const script = document.createElement('script');
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      script.onload = initializePayment;
      script.onerror = () => {
        setLoading(false);
        alert('Payment service is unavailable. Please try again.');
      };
      document.body.appendChild(script);
    } else {
      initializePayment();
    }
  };

  const initializePayment = () => {
    const reference = `HTF_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    
    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // PAYSTACK KEY FROM ENV
      email: 'customer@email.com', // Get from user input
      amount: 20000, // ₦5,000
      ref: reference,
      currency: 'NGN',
      
      callback: function(response) {
        setLoading(false);
        
        // Navigate to form WITH ROUTER STATE
        navigate('/startup', {
          state: {
            paymentData: {
              reference: response.reference,
              transactionId: response.transaction,
              amount: 5000,
              status: 'success',
              timestamp: new Date().toISOString()
            }
          }
        });
      },
      
      onClose: function() {
        setLoading(false);
      }
    });
    
    handler.openIframe();
  };

  return (
    <div className="flex mx-auto">
      <div className="mx-auto">
        <button
          onClick={handlePayment}
          disabled={loading}
          className="mx-auto mt-15 mb-5 bg-cyan hover:!bg-black active:!bg-black hover:scale-103 cursor-pointer 
                   rounded-[9px] md:w-[35vw] md:h-[4vw] w-[86vw] h-[12vw] flex items-center justify-center
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="editors-reg text-shade text-white text-[16px] flex flex-row items-center">
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                Processing...
              </>
            ) : (
              <>
                Register StartUp Pass
                <span className="mx-2 flex items-center justify-center">
                  <img src={arrw} alt="arrow" className="w-5 h-5" />
                </span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default StartUpButton;