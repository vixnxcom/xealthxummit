import React from 'react'
import TypewriterText from '../faq/TypeWriterText'
import SilverButton from './paystack/SilverButton'

const Silver = () => {
  return (
    <div className="App ">
      <div className="relative bg-black text-white mx-auto  corner-cardd flex flex-col items-center justify-center text-center">
        
        <p className="text-[24px] text-blue-200 editors-reg">
          SILVER PARTNER
        </p>

        {/* <TypewriterText
          text=""
          className="text-[28px] md:text-[40px] mb-2 px-2 text-white mt-2 editors-reg"
        /> */}
        <TypewriterText>
          <p className="text-[24px] md:text-[40px] mb-2 px-2 text-white mt-5
           editors-reg">1,000,000 – 1,500,000</p>
        </TypewriterText>
       {/* <div>
        <SilverButton />
       </div> */}
        <div className="corners"></div>
      </div>
    </div>
  )
}

export default Silver