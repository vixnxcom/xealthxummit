import React from 'react'
import TypewriterText from '../faq/TypeWriterText'
import SupportButton from './paystack/SupportButton'

const Support = () => {
  return (
    <div className="App mb-40">
      <div className="relative bg-black text-white mx-auto  corner-cardd flex flex-col items-center justify-center text-center">
        
        <p className="text-[24px] text-blue-200 editors-reg">
          SUPPORT PARTNER
        </p>

         <TypewriterText>
          <p className="text-[24px] md:text-[40px] mb-2 px-2 text-white mt-5
           editors-reg">300,000 – 500,000</p>
        </TypewriterText>
        {/* <div>
            <SupportButton />
        </div> */}
        <div className="corners"></div>
      </div>
    </div>
  )
}

export default Support
