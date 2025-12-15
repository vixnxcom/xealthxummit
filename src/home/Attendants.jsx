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

const Attendants = () => {

  return (
    <section className=" text-white max-w-5xl md:mx-auto mt-10 ">
  
      <div className="flex flex-col items-start mb-20">
          <h1 
           
            className="editors-bold text-5xl tracking-widest text-white text-left"
          >
           Who Should Attend
          </h1>
          </div>
      
  <div className={`${styles.flexCenter} mt-5 mb-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Mind/>
</div>
</div> 
  <div className={`${styles.flexCenter} mt-5 mb-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Career/>
</div>
</div> 
  <div className={`${styles.flexCenter} mt-10 mb-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Goal/>
</div>
</div> 

  <div className={`${styles.flexCenter} mt-10 mb-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Inspire/>
</div>
</div> 

  <div className={`${styles.flexCenter} mt-10 mb-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Life/>
</div>
</div> 

  <div className={`${styles.flexCenter}  mt-10 mb-5 `}>
 <div className={`${styles.boxWidth}`}>

   <Innov/>
</div>
</div> 



    
      

   
    </section>
  )
}

export default Attendants