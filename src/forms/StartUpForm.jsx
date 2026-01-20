import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const StartUpForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
 useEffect(() => {
  
 
 
    
    // Check for payment data in router state
    const paymentData = location.state?.paymentData
    
    if (!paymentData || paymentData.status !== 'success') {
      // No valid payment - redirect home
      navigate('/booking')
    }
  }, [location, navigate])

  const handleBackToHome = () => {
    navigate('/booking')
  }

  return (
    <section>
      <div className="flex flex-col items-center bg-pass">
        <h1 className="editors-bold p-3 mt-10 text-[20px] tracking-widest mx-auto text-white text-center">
          HealthTech Frontiers - 2026
        </h1>
        <h1 className="editors-bold p-3 text-[20px] tracking-widest mx-auto mb-5 text-white text-center">
        Student and Startup Pass
        </h1>
      </div>
      
      <div className='bg-white h-[40px]'></div>
      <div>
        <h1 className="editors-bold p-3 mt-5 text-[20px] tracking-widest mx-auto text-blue text-center">
          Thanks for purchasing a Student and Startup Pass Ticket!
        </h1>
        <h1 className="editors-reg p-3 text-[16px] tracking-widest mx-auto mb-5 text-blue text-center">
          Complete Your Registration
        </h1>
      </div>
      
      <div className="form-wrapper">
        <div className="form-mask">
          <iframe
            title="HealthTech Frontiers 2026 - Student and Start-Up Pass Ticket"
            src="https://forms.zohopublic.com/helloprimebri1/form/startupandstudentpassticket/formperma/ZmLLR5tLxtSb__UmuhArp7UvCGKpS8AxhnL3x6o2CyM"
            frameBorder="0"
            scrolling="no"
            className="form-iframe"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button 
          onClick={handleBackToHome}
          className="px-6 py-2 bg-blue editors-reg hover:bg-black text-white rounded-[8px] transition"
        >
          ← Back to Ticket Area
        </button>
      </div>

      <div className='h-[120px]'></div>
    </section>
  )
}

export default StartUpForm