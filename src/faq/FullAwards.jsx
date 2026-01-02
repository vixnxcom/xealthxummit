import React from 'react'
import TypewriterText from './TypeWriterText'

const FullAwards = () => {
  return (
    <div className="mb-20 flex flex-col items-start max-w-5xl px-4 md:mx-auto">
<div className='md:grid lg:grid-cols-2 md:gap-12'>
      {/* 01 */}
      <div className="bg-white h-[400px]">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">01.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Hospital and Health Institutions
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Smart Hospital Award
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Digital Patient Care Excellence
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            AI in Diagnostics & Imaging Award
          </li>
        </ul>
      </div>

      {/* 02 */}
      <div className="bg-white h-[400px] mt-10 md:mt-0">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">02.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Pharmacies & Pharmaceutical Innovation
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Retail Pharmacy Innovation Award
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Digital Supply Chain Excellence
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Pharmaceutical R&D Technology Award
          </li>
        </ul>
      </div>

      {/* 03 */}
     <div className="bg-white h-[400px] mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">03.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Health Insurance & Managed Care
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Digital Claims Innovation
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            AI in Risk Management
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Inclusive Health Access Through Technology
          </li>
        </ul>
      </div>

      {/* 04 */}
      <div className="bg-white h-[400px] mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">04.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Government & Public Health
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Digital Public Health Initiative of the Year
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            eHealth Policy Leadership
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Rural Digital Health Equity Award
          </li>
        </ul>
      </div>

      {/* 05 */}
      <div className="bg-white h-[400px] mt-10">
        <div className="flex flex-col items-start mb-2 w-full px-3">
          <div className="mt-4 mb-4 flex items-center justify-center">
            <span className="text-[16px] editors-reg text-black">05.</span>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-cya mt-2 editors-bold ">
              Technology Providers
            </p>
          </TypewriterText>
        </div>

        <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Best Cloud/Data Model for Healthcare
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Cybersecurity Excellence in Health
          </li>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Remote Monitoring & Wearable Tech Innovation
          </li>
        </ul>
      </div>
</div>
    </div>
  )
}

export default FullAwards
