import React, { useEffect } from 'react'
import FaqAbout from './FaqAbout'
import styles from '../style'
import Awards from './Awards'
import MovingText from '../home/ImageText'
import Button from '../home/Button'
import WhiteButton from '../home/WhiteButton'
import { med, men, steth } from '../assets'
import Quote from '../services/Quote'
import { Background, Parallax } from 'react-parallax'


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

<Parallax strength={900}  height={600}>
  <Background  style={{width:'100vw'}} className='celll bg-black mt-10'  >
    <img src={men} alt="" className='w-full h-full mt-20 object-contain' />
  
        

      </Background>

       
 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
          < Quote />
        </div>
        </div>
    </Parallax>

 
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



