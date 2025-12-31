import React from 'react'

import {  ticket } from '../assets'
import Button from './Button'
import Mind from './Mind'
import styles from '../style'
import Career from './Career'
import Goal from './Goal'
import Inspire from './Inspire'
import Life from './Life'
import Innov from './Innov'
import HeadAttend from './HeadAttend'

const Attendants = () => {

  return (
    <section className=" text-white max-w-5xl md:mx-auto ">
  
      <div className="flex flex-col items-start mb-5">
        
          <HeadAttend />
      
          </div>

          <div className='md:grid lg:grid-cols-2 md:gap-12'>
      
  <div className={`${styles.flexCenter} mt-5 m `}>
 <div className={`${styles.boxWidth}`}>

   <Mind/>
</div>
</div> 
  <div className={`${styles.flexCenter} mt-5  md:mt-0 `}>
 <div className={`${styles.boxWidth}`}>

   <Career/>
</div>
</div> 
  <div className={`${styles.flexCenter} mt-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Goal/>
</div>
</div> 

  <div className={`${styles.flexCenter} mt-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Inspire/>
</div>
</div> 

  <div className={`${styles.flexCenter} mt-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Life/>
</div>
</div> 

  <div className={`${styles.flexCenter}  mt-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Innov/>
</div>
</div> 

</div> 



    
      

   
    </section>
  )
}

export default Attendants