import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import TypeWriterText from '../faq/TypeWriterText'
import { check, eye, glas, shake, star } from '../assets'

const Benefits = () => {

  return (
    // <div className={` bg-cyan w-full letter-shade justify-center  `}>
    //   <div className=' max-w-5xl p-4'>
    <div className="w-full   mt-5">
      <div className="max-w-5xl mx-auto  ">

        <div 
         
          className=' mt-10 mb-10 text-left   text-white flex flex-col '
        >
   <div className="bg-black rounded-[24px] border border-gray-200 shadow-lg mt-5">
  <div className="">
    <div className="w-20 h-20 mt-2 mb-4 flex items-center justify-center">
      <span className="p-3">
        <img src={eye} alt="" />
      </span>
    </div>
    <TypeWriterText>
      <p className="w-full bg-cyan text-blue text-[24px] editors-reg px-4 py-3 rounded-b-[24px]">
        Visibility
      </p>
    </TypeWriterText>
  </div>
</div>



   
     <div className="bg-black rounded-[24px] border border-gray-200 shadow-lg mt-10">
  <div className="">
    <div className="w-20 h-20 mt-2 mb-4 flex items-center justify-center">
      <span className="p-3">
        <img src={star} alt="" />
      </span>
    </div>
    <TypeWriterText>
      <p className="w-full bg-cyan text-blue text-[24px] editors-reg px-4 py-3 rounded-b-[24px]">
       Branding
      </p>
    </TypeWriterText>
  </div>
</div>

    <div className="bg-black rounded-[24px] border border-gray-200 shadow-lg mt-10">
  <div className="">
    <div className="w-20 h-20 mt-2 mb-4 flex items-center justify-center">
      <span className="p-3">
        <img src={glas} alt="" />
      </span>
    </div>
    <TypeWriterText>
      <p className="w-full bg-cyan text-blue text-[24px] editors-reg px-4 py-3 rounded-b-[24px]">
       Recognition
      </p>
    </TypeWriterText>
  </div>
</div>


        <div className="bg-black rounded-[24px] border border-gray-200 shadow-lg mt-10">
  <div className="">
    <div className="w-20 h-20 mt-2 mb-4 flex items-center justify-center">
      <span className="p-3">
        <img src={shake} alt="" />
      </span>
    </div>
    <TypeWriterText>
      <p className="w-full bg-cyan text-blue text-[24px] editors-reg px-4 py-3 rounded-b-[24px]">
      Partnership Opportunities
      </p>
    </TypeWriterText>
  </div>
</div>
</div>


      
      </div>
    </div>
  )
}

export default Benefits
