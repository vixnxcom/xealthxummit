import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StartUpForm = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleBackToHome = () => {
    navigate('/booking')
  }

  const goToPayment = () => {
    navigate('/generalpayment')
  }

  return (
    <section>
      <div className="flex flex-col items-center bg-pass">
        <h1 className="editors-bold p-3 mt-10 text-[20px] tracking-widest mx-auto text-white text-center">
          HealthTech Frontiers - 2026
        </h1>
        <h1 className="editors-bold p-3 text-[20px] tracking-widest mx-auto mb-5 text-white text-center">
          Student and Startup Pass Registration
        </h1>
      </div>
      
      <div className='bg-white h-[40px]'></div>
      
      <div>
        <h1 className="editors-bold p-3 mt-5 text-[20px] tracking-widest mx-auto text-blue text-center">
          Register for General Pass
        </h1>
        <h1 className="editors-reg p-3 text-[16px] tracking-widest mx-auto mb-5 text-blue text-center">
          Complete the form below (₦150,000 payment required after submission)
        </h1>
      </div>
      
    <div className="max-w-6xl mx-auto p-4 md:p-6">
  <div className="relative w-full overflow-hidden rounded-xl ">
    <div className="relative pb-[600px] md:pb-[800px] rounded-[16px] lg:pb-[600px] h-0">
      <iframe
        title="HealthTech Frontiers 2026 - Student and Start-Up Pass Ticket"
       src="https://forms.zohopublic.com/helloprimebri1/form/generalpass/formperma/_s4hv5T8bzA1hGzCXWVXmYM4Z9nbCwPAOje346MClfU"
            frameBorder="0"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full"
        loading="lazy"
      />
    </div>
  </div>
</div>

      <div className="text-center mt-8 p-6 max-w-2xl mx-auto">
        <h3 className="editors-reg text-[16px] mb-2">Buy Ticket</h3>
        <button 
          onClick={goToPayment}
          className="mx-auto mt-5 mb-5 editors-reg bg-cyan hover:!bg-black hover:scale-103 
          cursor-pointer text-white letter-shade
                   rounded-[9px] md:w-[35vw] md:h-[4vw] w-[86vw] h-[12vw] flex items-center
                    justify-center text-[16px]"
        >
          Click Here to Pay 
        </button>
        <p className="text-gray-600 mt-3 text-[16px] editors-reg">
          Payment is required to complete your registration
        </p>
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button 
          onClick={handleBackToHome}
          className="px-6 py-2 underline editors-reg hover:scale-103 text-blue rounded-[8px] transition"
        >
          ← Back to Ticket Area
        </button>
      </div>

      <div className='h-[120px]'></div>
    </section>
  )
}

export default StartUpForm
  