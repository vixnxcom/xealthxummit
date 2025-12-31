import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import TypeWriterText from '../faq/TypeWriterText'
import { check } from '../assets'

const Benefits = () => {

  return (
    // <div className={` bg-cyan w-full letter-shade justify-center  `}>
    //   <div className=' max-w-5xl p-4'>
    <div className="w-full bg-cyan  mt-5">
      <div className="max-w-5xl mx-auto p-4 ">

        <div 
         
          className=' mt-10 text-left  text-white flex flex-col '
        >
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="p-3"><img src={check} alt="" /></span>
          </h1>
          <TypeWriterText>
         <p className='text-[24px]  editors-bold'>
          Visibility
          </p>
          </TypeWriterText>
         
           
            </div>
          <br />
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="p-3"><img src={check} alt="" /></span>
          </h1>
         <TypeWriterText>
         <p className='text-[24px]  editors-bold'>
         Branding
          </p>
          </TypeWriterText>
           
            </div>
          <br />
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="p-3"><img src={check} alt="" /></span>
          </h1>
         <TypeWriterText>
         <p className='text-[24px]  editors-bold'>
         Recognition
          </p>
          </TypeWriterText>
           
            </div>
          <br />
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="p-3"><img src={check} alt="" /></span>
          </h1>
          <TypeWriterText>
         <p className='text-[24px] mb-10  editors-bold'>
      Partnership <br /> Opportunities
          </p>
          </TypeWriterText>
           
            </div>
       
        </div>

      
      </div>
    </div>
  )
}

export default Benefits
