import React, { useEffect } from 'react'
import FaqAbout from './FaqAbout'
import styles from '../style'
import Awards from './Awards'


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

      <div className="h-[40px]" />
    </div>
  );
};

export default Faq;



