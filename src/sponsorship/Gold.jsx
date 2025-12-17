import React from 'react'
import TypewriterText from '../faq/TypeWriterText'
import PayGold from './paystack/PayGold'
import GoldButton from './paystack/GoldButton'

const Gold = () => {
  return (
    <div className="App ">
      <div className="relative bg-black text-white mx-auto  corner-card flex flex-col items-center justify-center text-center">
        
        <p className="text-[28px] text-blue-200 editors-reg">
          GOLD PARTNER
        </p>

        <TypewriterText
          text="2,500,000 – 3,500,000"
          className="text-[28px] md:text-[40px] mb-2 px-2 text-white mt-2 editors-reg"
        />
        <div>
            <GoldButton />
        </div>
        <div className="corners"></div>
      </div>
    </div>
  )
}

export default Gold
