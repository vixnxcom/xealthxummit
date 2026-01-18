import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'

const Agenda = () => {
  return (
    <div className="w-full flex flex-col mb-10 mt-5">
      <div className="max-w-5xl mx-auto">
        <div className='md:grid lg:grid-cols-2 md:gap-8'>
          
          {/* First div - template */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  08:00 am – 09:00 am
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest  flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Registration & Networking
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Second div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10 md:mt-0">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  09:00 am – 09:20 am
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Welcome & Opening Remarks
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Third div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  09:20 am – 10:00 am
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Keynote Address ("Future of Digital Health in Africa")
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Fourth div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  10:00 am – 11:00 am
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Fireside Chat 1 (Digital Hospital Transformation)
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Fifth div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  11:00 am – 12:00 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Fireside Chat 2 (Pharmacies, Insurance & Digital Innovation)
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Sixth div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  12:00 pm – 12:30 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Sector Innovation Showcase
                </h1>
              </div>
            </TypeWriterText>
          </div>
          
          {/* Full-width background image container - spans both columns */}
          <div className="lg:col-span-2 relative mb-10 mt-10">
            {/* Background image that extends full viewport width */}
            <div className="absolute inset-0 bg-net bg-cover bg-center -z-10 h-[330px] md:h-[520px] w-screen"
              style={{ left: '50%', transform: 'translateX(-50%)' }}>
            </div>
            {/* Empty div to maintain grid spacing and push content down */}
            <div className="h-[330px] md:h-[520px]"></div>
          </div>

          {/* Seventh div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  12:30 pm – 13:30 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Lunch & Exhibition Walkthrough
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Eighth div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10 md:mt-0">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  13:30 pm – 15:00 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Startup Pitch Finals
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Ninth div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  15:00 pm – 16:00 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  National HealthTech Excellence Awards Ceremony
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Tenth div - updated to match first */}
          <div className="mb-5 md:mb-0 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  16:00 pm – 16:30 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Closing Keynote
                </h1>
              </div>
            </TypeWriterText>
          </div>

          {/* Eleventh div - updated to match first */}
          <div className="mb-10 shadow-md bg-white rounded-[16px] text-blue mt-10">
            <div className="bg-black rounded-t-[16px] w-full">
              <TypeWriterText>
                <h1 className="text-[24px] editors-bold text-white text-center p-3">
                  16:30 pm – 18:00 pm
                </h1>
              </TypeWriterText>
            </div>
            <TypeWriterText>
              <div className="py-5 px-3 tracking-widest flex gap-2 h-[110px]">
                <span className="w-3 h-3 bg-black shrink-0 mt-2"></span>
                <h1 className="text-[20px] editors-reg leading-snug">
                  Networking Cocktail
                </h1>
              </div>
            </TypeWriterText>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Agenda