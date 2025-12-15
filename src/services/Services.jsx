import React from 'react'
import styles from '../style'
import Hero from '../home/Hero'
import Quote from './Quote'
import { Background, Parallax } from 'react-parallax'
import { crowd } from '../assets'
import Home from '../home/Home'
import Intro from '../home/Intro'
import Career from '../home/Career'
import Life from '../home/Life'
import Mind from '../home/Mind'
import Inspire from '../home/Inspire'
import Goal from '../home/Goal'
const Services = () => {
  return (
    
  
 <div className=''>

       
     <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-blue mt-20'  >
         <img src={crowd} alt="" className='w-full h-full object-cover' />
  
        

      </Background>

       

    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Quote />
          
        </div>
        </div>
     

     </Parallax>

  <div className={`${styles.flexCenter} mt-10 mb-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Career/>
</div>
</div> 
  <div className={`${styles.flexCenter} mt-10 mb-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Life/>
</div>
</div> 
 
  <div className={`${styles.flexCenter} mt-10 mb-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Mind/>
</div>
</div> 
  <div className={`${styles.flexCenter} mt-10 mb-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Inspire/>
</div>
</div> 
 
  <div className={`${styles.flexCenter} mt-10 mb-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Goal/>
</div>
</div> 
    </div>
  )
}

export default Services
