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
   <div className="bg-black rounded-[16px]  shadow-md mt-5">
  <div className="">
    <div className="mt-2 mb-4 flex flex-row items-center ">
      <span className="p-3 w-20 h-20 ">
        <img src={eye} alt="" />
      </span>
  
    
    </div>
    < ul className="w-full bg-white shadow-lg h-[200px] rounded-b-[16px] h-[160px] py-2 text-black 
    flex flex-col px-3 text-[20px] editors-reg px-4 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-8 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Brand visibility to senior healthcare decision-makers
          </li>
        
          </TypeWriterText>
          </ul>
   
  </div>
</div>



   
   <div className="bg-black rounded-[16px] border  shadow-md mt-10">
  <div className="">
    <div className="mt-2 mb-4 flex flex-row items-center ">
      <span className="p-3 w-20 h-20 ">
        <img src={star} alt="" />
      </span>
  
    
    </div>
    < ul className="w-full bg-white shadow-lg h-[200px] rounded-b-[16px] h-[160px]  py-2 text-black 
    flex flex-col px-3 text-[20px] editors-reg px-4 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center mt-8 gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Direct access to startups and innovators
          </li>
        
          </TypeWriterText>
          </ul>
   
  </div>
</div>

      <div className="bg-black rounded-[16px] shadow-md mt-10">
  <div className="">
    <div className="mt-2 mb-4 flex flex-row items-center ">
      <span className="p-3 w-20 h-20 ">
        <img src={glas} alt="" />
      </span>
  
    
    </div>
    < ul className="w-full bg-white shadow-lg rounded-b-[16px] h-[160px]  py-2 text-black 
    flex flex-col px-3 text-[20px] editors-reg px-4 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2 mt-8">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
          Thought leadership positioning in AI & digital health
          </li>
        
          </TypeWriterText>
          </ul>
   
  </div>
</div>


     <div className="bg-black rounded-[16px] mb-10  shadow-md mt-10">
  <div className="">
    <div className="mt-2 mb-4 flex flex-row items-center ">
      <span className="p-3 w-20 h-20 ">
        <img src={shake} alt="" />
      </span>
  
    
    </div>
    < ul className="w-full bg-white shadow-lg rounded-b-[16px] h-[160px] py-2 text-black 
    flex flex-col px-3 text-[20px] editors-reg px-4 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center mt-8 gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
         Media and post-event content exposure
          </li>
        
          </TypeWriterText>
          </ul>
   
  </div>
</div>
</div>

      
      </div>
    </div>
  )
}

export default Benefits
