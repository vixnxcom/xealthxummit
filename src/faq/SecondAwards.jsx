import React from 'react'
import TypewriterText from './TypeWriterText'

const SecondAwards = () => {
  return (
      <div className="mb-20 flex flex-col items-start max-w-5xl px-4 md:mx-auto">
<div className="grid md:grid-cols-2 md:gap-5">

     


      {/* 09 */}
   <div className="bg-cyan h-[440px] mt-10">
       <div className="flex flex-col items-start mb-2 w-full px-3 text-white bg-black h-[190px]">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-white">09.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px]   mt-2 editors-bold mb-4">
              Startups & <br /> Innovators
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            HealthTech Startup of the Year
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Best AI-Powered Health Solution
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            People's Choice Award
          </li>
        </ul>
      </div>

      {/* 10 */}
   <div className="bg-cyan h-[440px] w-full mt-10  ">
        <div className="flex flex-col items-start mb-2 w-full px-3 text-white bg-black h-[190px]">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-white">10.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px]   mt-2 editors-bold mb-4">
              Special <br /> Recognition
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Lifetime Achievement
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            HealthTech Leadership Award
          </li>
        </ul>
      </div>

    </div>
    </div>
  )
}

export default SecondAwards