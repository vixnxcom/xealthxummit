import React from 'react'
import TypewriterText from './TypeWriterText'
import FloatImage from './FloatImage'

const FullAwards = () => {
  return (
    <div className="mb-10 flex flex-col items-start max-w-5xl px-4 md:mx-auto">
      <div className="grid md:grid-cols-2 md:gap-5">
        {/* 01 */}
        <div className="bg-cyan h-[520px]">
          <div className="flex flex-col items-start mb-2 w-full px-3 bg-hosp bg-black h-[190px]">
            <div className="mt-4 mb-4 flex items-center justify-center bg-blue rounded-full h-16 w-16">
              <span className="text-[16px] editors-reg text-white">01.</span>
            </div>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-blue px-3 mt-2 editors-bold mb-4">
              Hospital and Health Institutions
            </p>
          </TypewriterText>

          <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Smart Hospital Award</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Digital Patient Care Excellence</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>AI in Diagnostics & Imaging Award</TypewriterText>
            </li>
          </ul>
        </div>

        {/* 02 */}
        <div className="bg-cyan h-[520px] mt-10 md:mt-0">
          <div className="flex flex-col items-start mb-2 w-full px-3 bg-pharm h-[190px]">
            <div className="mt-4 mb-4 flex items-center justify-center bg-blue rounded-full h-16 w-16">
              <span className="text-[16px] editors-reg text-white">02.</span>
            </div>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-blue px-3 mt-2 editors-bold mb-4">
              Pharmacies & Pharmaceutical Innovation
            </p>
          </TypewriterText>

          <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Retail Pharmacy Innovation Award</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Digital Supply Chain Excellence</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Pharmaceutical R&D Technology Award</TypewriterText>
            </li>
          </ul>
        </div>

        {/* 03 */}
        <div className="bg-cyan h-[520px] mt-10">
          <div className="flex flex-col items-start mb-2 w-full px-3 bg-insur h-[190px]">
            <div className="mt-4 mb-4 flex items-center justify-center bg-blue rounded-full h-16 w-16">
              <span className="text-[16px] editors-reg text-white">03.</span>
            </div>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-blue px-3 mt-2 editors-bold mb-4">
              Health Insurance & Managed Care
            </p>
          </TypewriterText>

          <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Digital Claims Innovation</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>AI in Risk Management</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Inclusive Health Access Through Technology</TypewriterText>
            </li>
          </ul>
        </div>

        {/* 04 */}
        <div className="bg-cyan h-[520px] mt-10">
          <div className="flex flex-col items-start mb-2 w-full px-3 bg-public h-[190px]">
            <div className="mt-4 mb-4 flex items-center justify-center bg-blue rounded-full h-16 w-16">
              <span className="text-[16px] editors-reg text-white">04.</span>
            </div>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-blue px-3 mt-2 editors-bold mb-4">
              Government & Public Health
            </p>
          </TypewriterText>

          <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Digital Public Health Initiative of the Year</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>eHealth Policy Leadership</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Rural Digital Health Equity Award</TypewriterText>
            </li>
          </ul>
        </div>

       

        {/* 05 */}
        <div className="bg-cyan h-[520px] mt-10 ">
          <div className="flex flex-col items-start mb-2 w-full px-3 bg-cyber h-[190px]">
            <div className="mt-4 mb-4 flex items-center justify-center bg-blue rounded-full h-16 w-16">
              <span className="text-[16px] editors-reg text-white">05.</span>
            </div>
          </div>

          <TypewriterText>
            <p className="text-[24px] text-blue px-3 mt-2 editors-bold mb-4">
              Technology <br /> Providers
            </p>
          </TypewriterText>

          <ul className="editors-thin py-2 text-[20px] text-blue flex flex-col px-3">
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Best Cloud/Data Model for Healthcare</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Cybersecurity Excellence in Health</TypewriterText>
            </li>
            <li className="py-1 tracking-widest flex items-center gap-2">
              <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              <TypewriterText>Remote Monitoring & Wearable Tech Innovation</TypewriterText>
            </li>
          </ul>
        </div>

        

      </div>
    </div>
  )
}

export default FullAwards