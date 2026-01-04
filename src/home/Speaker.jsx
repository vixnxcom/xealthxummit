import React, { useEffect } from 'react'

import styles from '../style'
import SpeakerHead from './SpeakerHead';
import SpeakerHtag from './SpeakerHtag';



const Speaker = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="w-full bg-bg overflow-hidden">

      {/* FULL WIDTH SECTION — NO CONTAINER */}
     
 <SpeakerHead />
     
     

      {/* BOXED CONTENT BELOW */}
      <div className={`${styles.flexCenter} mt-20 `}>
        <div className={`${styles.boxWidth}`}>
        <SpeakerHtag />
        </div>
      </div>
{/* 
      <div className={`${styles.flexCenter} h-[400px] mt-20 bg-bot`}>
        <div className={`${styles.boxWidth} `}>
      
        </div>
      </div> */}

      <div className="h-[40px]" />
    </div>
  );
};

export default Speaker;



