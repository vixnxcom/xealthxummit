import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import { redd } from '../assets'

gsap.registerPlugin(ScrollTrigger)

const PImage = () => {
  

  

  return (
    <div className={`${styles.flexCenter} items-center letter-shade justify-center mx-auto text-center min-h-[500px]`}>
      <div className='mx-auto max-w-4xl'>
        <div className='px-4 mt-10'>
        
        </div>
        
        <h1 
     
          className='editors-bold mt-32 text-4xl text-left mx-3 text-blue-200 textl  leading-tight'
        >
       One-Day HealthTech Innovation Summit, Startup Pitch Finals & National HealthTech
 Excellence Awards
        </h1>
        
        <p className='textl mt-6 max-w-[470px] mx-5'>
         
          provident, recusandae sequi delectus iusto enim corrupti? Ex eveniet odit temporibus eum ad maiores totam tenetur
          eligendi rem, ipsa hic, ea quod recusandae enim, illo quam ab maxime neque optio? Eligendi ullam possimus debitis
       Provident veniam sed magni vitae ducimus 
        </p>
      </div>
    </div>
  )
}

export default PImage