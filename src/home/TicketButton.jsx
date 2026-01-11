import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { award, bulb, govt, heart, innovative, invest, lead, pitch, ticket } from "../assets"
import Button from "./Button"
import PitchButton from "./PitchButton"
import StarsBackground from "./BackgroundLines"
import TypewriterText from "../faq/TypeWriterText"

const TicketButton = () => {
  

  return (
    <section className="mb-20 text-white overflow-hidden">
     

      <div className=" max-w-5xl mx-auto mt-5 z-10 px-3">

        {/* SECTION 1 */}
        <TypewriterText>
          <div className="mb-10 flex flex-col md:items-center rounded-[16px] bg-black border border-gray-200 shadow-lg">
            <div className="flex flex-row gap-5">
              <TypewriterText>
                <p className="editors-bold text-[24px]  px-4 py-8 text-left text-white ">
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

              <TypewriterText>
          <div>
              <img src={govt} alt="" className="p-3 mt-5 w-20 h-20" />
            </div>
            </TypewriterText>

            <TypewriterText>
              <p className="text-[20px] px-3 w-[370px] md:w-full md:mx-auto mt-5 text-left text-white editors-reg">
                The main conference experience
              </p>
            </TypewriterText>

           <ul className="editors-thin py-2 text-[16px] text-white flex flex-col px-3">
  <TypewriterText>
    <li className="py-3 mb-5 mt-5 flex items-start gap-3 leading-relaxed">
      <span className="w-3 h-3 bg-cyan shrink-0 mt-2 "></span>
      <p className="text-justify hyphens-auto mr-3">
                  The HealthTech Innovation Summit brings together senior clinicians, healthcare leaders,
                  policymakers, investors, and technology innovators to explore how technology
                  can transform healthcare delivery across Africa and emerging markets. Through keynote 
                  talks, expert panels, and focused discussions, the summit addresses real-world challenges,
                  practical solutions, and scalable innovations shaping the future of healthcare.
          </p>
                </li>
              </TypewriterText>
            </ul>
          </div>
        </TypewriterText>

        {/* SECTION 2 */}
        <TypewriterText>
          <div className="mb-10 flex flex-col md:items-center rounded-[16px] bg-black border border-gray-200 shadow-lg">
            <div className="flex flex-row gap-5">
              <TypewriterText>
                <p className="text-[24px]  px-3 py-8 text-left text-white editors-bold">
                  National HealthTech Excellence Awards
                </p>
              </TypewriterText>
            </div>

            <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
              <img
                src={award}
                alt="Award"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
              <TypewriterText>
          <div>
              <img src={invest} alt="" className="p-3 mt-5 w-20 h-20" />
            </div>
            </TypewriterText>

            <TypewriterText>
              <p className="text-[20px]  px-3 mt-5 text-left text-white editors-reg">
                Recognising impact, innovation, and leadership
              </p>
            </TypewriterText>
                 <ul className="editors-thin py-2 text-[16px] text-white flex flex-col px-3">
  <TypewriterText>
    <li className="py-3 mb-5 mt-5 flex items-start gap-3 leading-relaxed">
      <span className="w-3 h-3 bg-cyan shrink-0 mt-2 "></span>
      <p className="text-justify hyphens-auto mr-3">
                  The National HealthTech Excellence Awards celebrate organisations, startups, and individuals driving meaningful change
                  in healthcare through innovation and technology. The awards recognise excellence across clinical innovation, digital
                  health, AI, policy, investment, and social impact, 
                  highlighting leaders shaping the future of healthcare. </p>
                </li>
              </TypewriterText>
            </ul>
          </div>
        </TypewriterText>

        {/* SECTION 3 */}
        <TypewriterText>
          <div className="mb-10 flex flex-col md:items-center rounded-[16px] bg-black border border-gray-200 shadow-lg">
            <div className="flex flex-row gap-5">
              <TypewriterText>
                <p className="text-[20px]  px-3 py-8 text-left text-white editors-bold">
                  Networking and Innovative Exhibition
                </p>
              </TypewriterText>
            </div>

            <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
              <img
                src={heart}
                alt="Heart"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
                  <TypewriterText>
          <div>
              <img src={bulb} alt="" className="p-3 mt-5 w-20 h-20" />
            </div>
            </TypewriterText>

            <TypewriterText>
              <p className="text-[20px]  px-3 mt-5 text-left text-white editors-reg">
                Connecting ideas, people, and partnerships
              </p>
            </TypewriterText>
            
                    <ul className="editors-thin py-2 text-[16px] text-white flex flex-col px-3">
  <TypewriterText>
    <li className="py-3 mb-5 mt-5 flex items-start gap-3 leading-relaxed">
      <span className="w-3 h-3 bg-cyan shrink-0 mt-2 "></span>
      <p className="text-justify hyphens-auto mr-3">
                  The Networking & Innovation Exhibition creates a dedicated space for meaningful engagement between
                  innovators, health- care providers, investors, corporates, and policy- makers. Attendees can explore
                  cutting-edge solutions, connect with potential partners, and initiate collaborations that extend
                  beyond the event.
                </p>
                </li>
              </TypewriterText>
            </ul>
          </div>
        </TypewriterText>

        {/* SECTION 4 */}
        <TypewriterText>
          <div className="mb-10 flex flex-col md:items-center rounded-[16px] bg-black border border-gray-200 shadow-lg">
            <div className="flex flex-row gap-5">
              <TypewriterText>
                <p className="text-[24px]  px-3 py-8 text-left text-white editors-bold">
                  Start-Up Pitch Finals
                </p>
              </TypewriterText>
            </div>

            <div className="w-full h-[300px] rounded-b-[16px] md:h-[500px] overflow-hidden">
              <img
                src={pitch}
                alt="Pitch"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <img src={lead} alt="" className="p-3 mt-5 w-20 h-20" />
            </div>
            <TypewriterText>
              <p className="text-[20px]  px-3 mt-5 text-left text-white editors-reg">
                Showcasing Africa's most promising healthtech startups
              </p>
            </TypewriterText>
            
                    <ul className="editors-thin py-2 text-[16px] text-white flex flex-col px-3">
  <TypewriterText>
    <li className="py-3 mb-5 mt-5 flex items-start gap-3 leading-relaxed">
      <span className="w-3 h-3 bg-cyan shrink-0 mt-2 "></span>
      <p className="text-justify hyphens-auto mr-3">
                  The Startup Pitch Finals provide a high-profile platform for selected healthtech startups to pitch their
                  solutions to investors, industry leaders, and strategic partners. Finalists are evaluated on innovation, 
                  clinical relevance, scalability, and impact, with opportunities for funding, partnerships, and eco- system support.
              </p> </li>
              </TypewriterText>
            </ul>
          </div>
        </TypewriterText>

        {/* <PitchButton /> */}
        <Button />
      </div>
    </section>
  )
}

export default TicketButton