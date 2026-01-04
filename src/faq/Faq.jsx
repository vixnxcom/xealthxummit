import React, { useEffect } from 'react'
import FaqAbout from './FaqAbout'
import styles from '../style'
import Awards from './Awards'
import MovingText from '../home/ImageText'
import Button from '../home/Button'
import WhiteButton from '../home/WhiteButton'


const Faq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="w-full bg-bg overflow-hidden">

      {/* FULL WIDTH SECTION — NO CONTAINER */}
     
 <FaqAbout />
     
     

      {/* BOXED CONTENT BELOW */}
      <div className={`${styles.flexCenter}  mt-10`}>
        <div className={`${styles.boxWidth}`}>
          <Awards />
        </div>
      </div>

  <div className={` ${styles.paddingX} ${styles.flexStart}  bg-blue `}>
   <div className={`${styles.boxWidth}  `}>
         
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

export default Faq;



