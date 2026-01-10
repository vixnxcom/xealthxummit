import React, { useEffect } from 'react'

import styles from '../style'
import SpeakerHead from './SpeakerHead';
import SpeakerHtag from './SpeakerHtag';
import MovingText from './ImageText';
import WhiteButton from './WhiteButton';
import { g } from '../assets';



const Speaker = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="w-full bg-bg overflow-hidden">

      {/* FULL WIDTH SECTION — NO CONTAINER */}
     
 <SpeakerHead />
     
     

      {/* BOXED CONTENT BELOW */}
     <div className={` ${styles.paddingX} ${styles.flexStart}   mt-20`}>
        <div className={`${styles.boxWidth}`}>
        <SpeakerHtag />
        </div>
      </div>
          {/* <img src={g} alt="" /> */}
{/* 
      <div className={`${styles.flexCenter} h-[400px] mt-20 bg-bot`}>
        <div className={`${styles.boxWidth} `}>
      
        </div>
      </div> */}

  <div className={` ${styles.paddingX} ${styles.flexStart}   bg-blue `}>
   <div className={`${styles.boxWidth} mt-20 `}>
         
          <MovingText />
               
            
              </div> 
              </div> 
               <div className={`${styles.boxWidth} mt-20 mb-10`}>
       
              <WhiteButton />            
              </div> 
      <div className="h-[40px]" />
  
    </div>
  );
};

export default Speaker;



