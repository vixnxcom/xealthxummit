import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import TypeWriterText from '../faq/TypeWriterText'

const Benefits = () => {

  return (
    <div className={`${styles.flexCenter} bg-cyan items-center letter-shade justify-center mx-auto text-center `}>
      <div className='mx-auto max-w-5xl  px-4 '>
        <div className='px-4 '></div>

        <div 
         
          className=' mt-10 text-left  text-white flex flex-col leading-tight'
        >
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-blue">01.</span>
          </h1>
          <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
          Visibility
          </p>
          </TypeWriterText>
         
           
            </div>
          <br />
          <div >
             <h1 className="bg-white rounded-full mt-5 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-blue">02.</span>
          </h1>
         <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
         Branding
          </p>
          </TypeWriterText>
           
            </div>
          <br />
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-blue">03.</span>
          </h1>
         <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
         Recognition
          </p>
          </TypeWriterText>
           
            </div>
          <br />
          <div >
             <h1 className="bg-white rounded-full mt-2 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-blue">04.</span>
          </h1>
          <TypeWriterText>
         <p className='text-[32px] mb-10  editors-bold'>
      Partnership Opportunities
          </p>
          </TypeWriterText>
           
            </div>
       
        </div>

      
      </div>
    </div>
  )
}

export default Benefits
