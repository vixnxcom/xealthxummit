import React from 'react'
import TypewriterText from '../faq/TypeWriterText'
import PayGold from './paystack/PayGold'
import GoldButton from './paystack/GoldButton'

const Gold = () => {
  return (
    <div className="App ">
      <div className="relative bg-black text-white mx-auto  corner-cardd flex flex-col items-center justify-center text-center">
        
        <p className="text-[24px] text-blue-200 editors-reg">
          GOLD PARTNER
        </p>

        <TypewriterText>
          <p className="text-[24px] md:text-[40px] mb-2 px-2 text-white mt-5 editors-reg">2,500,000 – 3,500,000</p>
        </TypewriterText>
       
          
      
        {/* <div>
            <GoldButton />
        </div> */}
        <div className="corners"></div>
      </div>
    </div>
  )
}

export default Gold
