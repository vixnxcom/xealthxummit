import React from 'react'
import TypewriterText from '../faq/TypeWriterText'
import SilverButton from './paystack/SilverButton'

const Silver = () => {
  return (
    <div className="App ">
      <div className="relative bg-black text-white mx-auto  corner-card flex flex-col items-center justify-center text-center">
        
        <p className="text-[28px] text-blue-200 editors-reg">
          SILVER PARTNER
        </p>

        <TypewriterText
          text="1,000,000 – 1,500,000"
          className="text-[28px] md:text-[40px] mb-2 px-2 text-white mt-2 editors-reg"
        />
       <div>
        <SilverButton />
       </div>
        <div className="corners"></div>
      </div>
    </div>
  )
}

export default Silver