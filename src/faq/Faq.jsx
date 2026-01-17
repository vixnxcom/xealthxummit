import React, { useEffect } from 'react'
import FaqAbout from './FaqAbout'
import styles from '../style'
import Awards from './Awards'
import MovingText from '../home/ImageText'
import Button from '../home/Button'
import WhiteButton from '../home/WhiteButton'
import { med, steth } from '../assets'


const Faq = () => {

  return (
    <div className="w-full bg-white overflow-hidden">

      {/* FULL WIDTH SECTION — NO CONTAINER */}
     
 <FaqAbout />
     
    

      {/* BOXED CONTENT BELOW */}
     {/* <div className={` ${styles.paddingX} ${styles.flexStart} mt-10 `}> */}
    
     {/* <div className={` ${styles.paddingX} ${styles.flexStart} mt-10 `}> */}
     <div className={` ${styles.flexStart} mt-10 `}>
        <div className={`${styles.boxWidth}`}>
          <Awards />
        </div>
      </div>

<div className={` ${styles.paddingX} ${styles.flexStart}   bg-blue `}>
   <div className={`${styles.boxWidth} mt-20 `}>
         
          <MovingText />
               
            
              </div> 
              </div> 

<div className='bg-blue'>

   <div className='h-[80px] bg-blue'></div>
       <div className={`${styles.flexCenter} `}>
               <div className={`${styles.boxWidth}  mb-10`}>
       
              <WhiteButton />            
              </div> 
              </div> 
      <div className="h-[120px]" />
  
</div>
    </div>
  );
};

export default Faq;



