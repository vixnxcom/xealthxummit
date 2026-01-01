import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { award, heart, innovative, pitch, ticket } from "../assets"
import Button from "./Button"
import PitchButton from "./PitchButton"
import StarsBackground from "./BackgroundLines"
import TypewriterText from "../faq/TypeWriterText"

const TicketButton = () => {
  

  return (
    <section className="] text-white overflow-hidden">
     

      <div className=" max-w-5xl mx-auto mt-5 z-10 px-4">

        {/* SECTION 1 */}


        <div  className="mb-10 flex flex-col items-start bg-white">

     <div className=" mb-5 flex flex-row gap-5">
   <div className="mx-1 mt-2 mb-4 h-12 w-12 shrink-0 rounded-full bg-cyan flex items-center justify-center">
  <span className="text-[16px] editors-thin text-white">01</span>
</div>



       
            <TypewriterText>
              <p className="text-[24px] md:text-[40px] text-blue mt-2 px-1 editors-reg">
                HealthTech Innovation Summit
              </p>
            </TypewriterText>
          </div>    
            <TypewriterText>
       <div className="px-15 ">
          <img
            src={ticket}
            alt="Ticket"
            className="w-full ml-4  mb-8 mt-5  md:mx-auto hover:scale-105 transition-transform "
          />
      </div>
         </TypewriterText>     
        </div>

        {/* SECTION 2 */}
      
                
          {/* SECTION 1 */}


        <div  className="mb-10 flex flex-col items-start bg-white">

     <div className=" mb-5 flex flex-row gap-5">
   <div className="mx-1 mt-2 mb-4 h-12 w-12 shrink-0 rounded-full bg-cyan flex items-center justify-center">
  <span className="text-[16px] editors-thin text-white">02</span>
</div>



       
            <TypewriterText>
              <p className="text-[24px] md:text-[40px] text-blue mt-2 px-1 editors-reg">
               National HealthTech Excellence Awards
              </p>
            </TypewriterText>
          </div>    
            <TypewriterText>
       <div className="px-15 ">
          <img
            src={award}
            alt="Ticket"
            className="w-full ml-4  mb-8 mt-5  md:mx-auto hover:scale-105 transition-transform "
          />
      </div>
         </TypewriterText>     
        </div>

            
          
        

         
      

        {/* SECTION 4 */}
      
               
            
         
       <div  className="mb-10 flex flex-col items-start bg-white">

     <div className=" mb-5 flex flex-row gap-5">
   <div className="mx-1 mt-2 mb-4 h-12 w-12 shrink-0 rounded-full bg-cyan flex items-center justify-center">
  <span className="text-[16px] editors-thin text-white">03</span>
</div>



       
            <TypewriterText>
              <p className="text-[24px] md:text-[40px] text-blue mt-2 px-1 editors-reg">
               Networking & Innovation Exhibition
              </p>
            </TypewriterText>
          </div>    
            <TypewriterText>
       <div className="px-15 ">
          <img
            src={heart}
            alt="Ticket"
            className="w-full ml-4  mb-8 mt-5  md:mx-auto hover:scale-105 transition-transform "
          />
      </div>
         </TypewriterText>     
      

            
          
        
</div>
          
       
        {/* SECTION 4 */}
      
               
            
         
       <div  className="mb-10 flex flex-col items-start bg-white">

     <div className=" mb-5 flex flex-row gap-5">
   <div className="mx-1 mt-2 mb-4 h-12 w-12 shrink-0 rounded-full bg-cyan flex items-center justify-center">
  <span className="text-[16px] editors-thin text-white">04</span>
</div>



       
            <TypewriterText>
              <p className="text-[24px] w-[160px] md:text-[40px] text-blue mt-2 px-1 editors-reg">
           Start-Up Pitch Finals
              </p>
            </TypewriterText>
          </div>    
            <TypewriterText>
       <div className="px-15 ">
          <img
            src={pitch}
            alt="Ticket"
            className="w-full ml-4  mb-10 mt-5  md:mx-auto hover:scale-105 transition-transform "
          />
      </div>
         </TypewriterText>     
      

            
      
        </div>
           
  {/* <PitchButton /> */}
     <Button />
         
     

      </div>
    </section>
  )
}

export default TicketButton
