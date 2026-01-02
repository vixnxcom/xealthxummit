import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { award, heart, innovative, pitch, ticket } from "../assets"
import Button from "./Button"
import PitchButton from "./PitchButton"
import StarsBackground from "./BackgroundLines"
import TypewriterText from "../faq/TypeWriterText"

const TicketButton = () => {
  

  return (
    <section className="mb-20 text-white overflow-hidden">
     

      <div className=" max-w-5xl mx-auto mt-5 z-10 px-4">

        {/* SECTION 1 */}

  <TypewriterText>
     <div className="mb-10 flex flex-col md:items-center rounded-[16px] bg-black border border-gray-200 shadow-lg">
  <div className="flex flex-row gap-5">
    <TypewriterText>
      <p className="text-[24px] md:text-[40px] px-4 py-8 text-left text-white editors-reg">
    One Day Healthtech Summit
      </p>
    </TypewriterText>
  </div>


    <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
      <img
        src={ticket}
        alt="Ticket"
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </div>
 
</div>
 </TypewriterText>

        {/* SECTION 2 */}
      
                
          {/* SECTION 1 */}

        {/* SECTION 1 */}

  <TypewriterText>
     <div className="mb-10 flex flex-col md:items-center  rounded-[16px] bg-black border border-gray-200 shadow-lg">
  <div className="flex flex-row gap-5">
    <TypewriterText>
      <p className="text-[24px] md:text-[40px] px-4 py-8 text-left text-white editors-reg">
      National HealthTech Excellence Awards
      </p>
    </TypewriterText>
  </div>


    <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
      <img
        src={award}
        alt="Ticket"
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </div>
 
</div>
 </TypewriterText>
        

         
      

        {/* SECTION 4 */}
      
  <TypewriterText>
     <div className="mb-10 flex flex-col md:items-center  rounded-[16px] bg-black border border-gray-200 shadow-lg">
  <div className="flex flex-row gap-5">
    <TypewriterText>
      <p className="text-[24px] md:text-[40px] px-4 py-8 text-left text-white editors-reg">
        Networking & Innovative Exhibition
      </p>
    </TypewriterText>
  </div>


    <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
      <img
        src={heart}
        alt="Ticket"
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </div>
 
</div>
 </TypewriterText>
       
        {/* SECTION 4 */}
      
               
            
         
      <TypewriterText>
     <div className="mb-10 flex flex-col md:items-center  rounded-[16px] bg-black border border-gray-200 shadow-lg">
  <div className="flex flex-row gap-5">
    <TypewriterText>
      <p className="text-[24px] md:text-[40px] w-[280px] px-4 py-8 text-left text-white editors-reg">
       StartUp Pitch Finals
      </p>
    </TypewriterText>
  </div>


    <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
      <img
        src={pitch}
        alt="Ticket"
        className="w-full h-full object-cover hover:scale-105 transition-transform"
      />
    </div>
 
</div>
 </TypewriterText>
           
  {/* <PitchButton /> */}
     <Button />
         
     

      </div>
    </section>
  )
}

export default TicketButton
