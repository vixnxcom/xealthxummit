import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import TypeWriterText from '../faq/TypeWriterText'

const Benefits = () => {

  return (
    <div className={`${styles.flexCenter} items-center letter-shade justify-center mx-auto text-center `}>
      <div className='mx-auto max-w-5xl'>
        <div className='px-4 '></div>

        <div 
         
          className=' mt-10 text-left  text-white flex flex-col leading-tight'
        >
          <div >
             <h1 className="bg-letters rounded-full mt-5 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-white">01.</span>
          </h1>
          <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
          Visibility
          </p>
          </TypeWriterText>
         
           
            </div>
          <br />
          <div >
             <h1 className="bg-letters rounded-full mt-5 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-white">02.</span>
          </h1>
         <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
         Branding
          </p>
          </TypeWriterText>
           
            </div>
          <br />
          <div >
             <h1 className="bg-letters rounded-full mt-5 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-white">03.</span>
          </h1>
         <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
         Recognition
          </p>
          </TypeWriterText>
           
            </div>
          <br />
          <div >
             <h1 className="bg-letters rounded-full mt-5 mb-4 h-12 w-12 flex items-center justify-center">
           <span className="text-[16px] editors-thin text-white">04.</span>
          </h1>
          <TypeWriterText>
         <p className='text-[32px]  editors-bold'>
      Partnership Oppurtunities
          </p>
          </TypeWriterText>
           
            </div>
       
        </div>

        <p className='textl mt-6 max-w-[470px] mx-5'>
          provident, recusandae sequi delectus iusto enim corrupti? Ex eveniet odit temporibus eum ad maiores totam tenetur
         ea quod recusandae enim, illo quam ab maxime neque optio? Eligendi ullam possimus debitis
        
        </p>
      </div>
    </div>
  )
}

export default Benefits
