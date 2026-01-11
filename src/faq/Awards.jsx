import React from 'react'
import FullAwards from './FullAwards'
import HeadAwards from './HeadAwards'
import NominateButton from './NominateButton'
import SecondAwards from './SecondAwards'
import { Background, Parallax } from 'react-parallax'
import Quote from '../services/Quote'
import styles from '../style'
import {  doc, lab, man, men, mind } from '../assets'
import PImage from './PImage'
import BookParallaxFloatImage from '../about/IntroImage'
import Button from '../home/Button'
import TypeWriterText from './TypeWriterText'
import FloatImage from './FloatImage'

const Awards = () => {
  return (
<div className=' w-full overflow-hidden   '>
    
<div className={` ${styles.flexStart} ${styles.paddingX} `}>
        <div className={`${styles.boxWidth}`}>
          <HeadAwards />
        </div>
      </div>


     {/* <div className='mb-10 w-full mx-auto max-w-5xl '></div> */}
<div className="grid grid-cols-2 bg-blue md:grid-cols-2 mb-20">
  <div className="bg-lab h-[258px] md:h-[360px]"></div>

  <div className="bg-cyb h-[250px] mt-2 ml-2 bg-white  md:h-[360px]  md:mb-0"></div>
</div>

 

<div>
  <FullAwards />
</div>
   
 <div className="mt-20 mb-20 w-full">
          <FloatImage />
        </div>



<div className='mx-auto'>
 <SecondAwards />
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

 
   
    </div>
  )
}

export default Awards
