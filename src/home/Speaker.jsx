import React, { useEffect } from 'react'

import styles from '../style'
import SpeakerHead from './SpeakerHead';
import SpeakerHtag from './SpeakerHtag';
import MovingText from './ImageText';
import WhiteButton from './WhiteButton';
import { agd, g } from '../assets';
import AgendaHead from './AgendaHead';
import Agenda from './Agenda';
import AgendaImage from './AgendaImage';
import { Background, Parallax } from 'react-parallax';
import ImageBg from './ImageBg';



const Speaker = () => {
 

  return (
    <div className="w-full bg-white overflow-hidden">

      

          <SpeakerHead />
       


      {/* FULL WIDTH SECTION — NO CONTAINER */}
       <div className={` ${styles.paddingX} ${styles.flexStart}   `}>
        <div className={`${styles.boxWidth} mt-20 `}>

           <AgendaHead /> 
       
        </div>
        </div> 
      <div  className=' bg-attende h-[330px] md:h-[520px]'></div> 

      {/* BOXED CONTENT BELOW */}
     <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} mt-10`}>
        <Agenda />
        </div>
      </div>
        <div>
          <AgendaImage />
        </div>

        <Parallax strength={900}  height={600}>
                <Background  style={{width:'100vw'}} className='celll bg-black '  >
                 <img src={agd} alt="" className='w-[100vw] mt-20  h-full object-contain' />
          
                
        
              </Background>
        
               
         
            <div className={` ${styles.paddingX} ${styles.flexStart} `}>
                <div className={`${styles.boxWidth}  `}>
                 
              
                   <ImageBg />
                </div>
                </div>
            </Parallax>
        

  <div className={` ${styles.paddingX} ${styles.flexStart}   bg-blue `}>
   <div className={`${styles.boxWidth} mt-20 `}>
         
          <MovingText />
               
            
              </div> 
              </div> 

               <div className={`${styles.flexCenter} bg-blue`}>
               <div className={`${styles.boxWidth} mt-20 mb-10`}>
       
              <WhiteButton />            
              </div> 
             
              </div> 

       <div className="h-[120px] bg-blue" />
  
    </div>
  );
};

export default Speaker;



