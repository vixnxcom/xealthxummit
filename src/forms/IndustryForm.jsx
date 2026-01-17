import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const IndustryForm = () => {
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
        Professional and Industry Pass
        </h1>
      </div>
      
      <div className='bg-white h-[40px]'></div>
      <div>
        <h1 className="editors-bold p-3 mt-5 text-[20px] tracking-widest mx-auto text-blue text-center">
          Thanks for purchasing a Professional & Industry Pass
        </h1>
        <h1 className="editors-reg p-3 text-[16px] tracking-widest mx-auto mb-5 text-blue text-center">
          Complete Your Registration
        </h1>
      </div>
      
      <div className="form-wrapper">
        <div className="form-maski">
          <iframe
            title="HealthTech Frontiers 2026 - Professional and Industry pass Ticket"
            src="https://forms.zohopublic.com/vixndotcomgm1/form/ProfessionalandIndustryPassTicket/formperma/0Jc-VgtXBE4jSJ6WNGWPkr9-PvqPgy7YjX6sSNRKrjw"
            frameBorder="0"
            scrolling="no"
            className="form-iframei"
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

export default IndustryForm