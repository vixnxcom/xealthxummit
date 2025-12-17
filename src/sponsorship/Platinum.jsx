import React from 'react'
import TypewriterText from '../faq/TypeWriterText'
import PlatButton from './paystack/PlatButton'

const Platinum = () => {
  return (
    <div className="App ">
      <div className="relative bg-black text-white mx-auto  corner-card flex flex-col items-center justify-center text-center">
        
        <p className="text-[28px] text-blue-200 editors-reg">
          PLATINUM PARTNER
        </p>

        <TypewriterText
          text="5,000,000 +"
          className="text-[28px] md:text-[40px] mb-2 px-2 text-white mt-2 editors-reg"
        />
           <div>
            <PlatButton />
           </div>
        <div className="corners"></div>
      </div>
    </div>
  )
}

export default Platinum
