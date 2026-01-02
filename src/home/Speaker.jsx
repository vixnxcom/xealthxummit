import React, { useEffect } from 'react'

import styles from '../style'
import SpeakerHead from './SpeakerHead';



const Speaker = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="w-full bg-bg overflow-hidden">

      {/* FULL WIDTH SECTION — NO CONTAINER */}
     
 <SpeakerHead />
     
     

      {/* BOXED CONTENT BELOW */}
      <div className={`${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth}`}>
        
        </div>
      </div>

      <div className="h-[40px]" />
    </div>
  );
};

export default Speaker;



