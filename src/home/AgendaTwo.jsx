import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'
import AgendaImage from './AgendaImage'

const AgendaTwo = () => {
  return (
    <div className="w-full flex flex-col mb-10 mt-5">
      <div className="max-w-5xl mx-auto">
        <div className='md:grid md:grid-cols-2 md:gap-8'>
          
         

         

          

         
        

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

export default AgendaTwo