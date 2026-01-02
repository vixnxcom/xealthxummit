import React from 'react'
import TypewriterText from './TypeWriterText'

const SecondAwards = () => {
  return (
    <div className="mb-20 flex flex-col items-start max-w-5xl px-4 md:mx-auto">

      {/* 06 */}
      <div className="bg-white mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-2 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">06.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Academia & Research
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Digital Health Research Excellence
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            AI in Medicine Research Award
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Best Industry–Academia Collaboration
          </li>
        </ul>
      </div>

      {/* 07 */}
      <div className="bg-white mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-2 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">07.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              NGOs & Social Impact
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Community HealthTech Impact
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Maternal & Child Digital Health Innovation
          </li>
        </ul>
      </div>

      {/* 08 */}
      <div className="bg-white mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-2 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">08.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Clinicians & Frontline Innovators
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Tech-Driven Clinical Excellence
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Nursing Digital Innovation Award
          </li>
        </ul>
      </div>

      {/* 09 */}
      <div className="bg-white mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-2 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">09.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Startups & Innovators
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
            People’s Choice Award
          </li>
        </ul>
      </div>

      {/* 10 */}
      <div className="bg-white w-full mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-2 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">10.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold">
              Special Recognition
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
  )
}

export default SecondAwards
