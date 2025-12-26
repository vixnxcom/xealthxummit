import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { award, innovative, pitch, ticket } from "../assets"
import Button from "./Button"
import PitchButton from "./PitchButton"
import StarsBackground from "./BackgroundLines"
import TypewriterText from "../faq/TypeWriterText"

const TicketButton = () => {
  

  return (
    <section className="] bg-bg text-white overflow-hidden">
      <StarsBackground />

      <div className=" max-w-5xl mx-auto z-10 px-4">

        {/* SECTION 1 */}
        <div  className="mb-20 flex flex-col items-start ">
          <span className="text-[16px] editors-thin py-4 ">01</span>

       
            <TypewriterText
              text="HealthTech Innovation Summit"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
       
          <img
            src={ticket}
            alt="Ticket"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />

          <Button />
        </div>

        {/* SECTION 2 */}
        <div  className="mb-20 flex flex-col items-start ">
          <span className="text-[16px] editors-thin py-4 ">02</span>

       
            <TypewriterText
              text="National HealthTech Excellence Awards"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
        

          <img
            src={award}
            alt="Award"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />
        </div>

        {/* SECTION 3 */}
        <div  className="mb-20 flex flex-col items-start ">
          <span className="text-[16px] editors-thin py-4 ">03</span>

        
            <TypewriterText
              text="Startup Pitch Finals"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
       

          <img
            src={pitch}
            alt="Pitch Competition"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />

          <PitchButton />
        </div>

        {/* SECTION 4 */}
        <div  className="mb-20 flex flex-col items-start ">
          <span className="text-[16px] editors-thin py-4 ">04</span>

        
            <TypewriterText
              text="Networking & Innovation Exhibition"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
   

          <img
            src={innovative}
            alt="Innovation Exhibition"
            className="w-full max-w-4xl mt-5 mb-8 md:mx-auto hover:scale-105 transition-transform"
          />
        </div>

      </div>
    </section>
  )
}

export default TicketButton
