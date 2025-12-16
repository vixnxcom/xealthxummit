import React from 'react'
import FullAwards from './FullAwards'
import HeadAwards from './HeadAwards'
import NominateButton from './NominateButton'
import SecondAwards from './SecondAwards'
import { Background, Parallax } from 'react-parallax'
import Quote from '../services/Quote'
import styles from '../style'
import { doc, man } from '../assets'
import PImage from './PImage'

const Awards = () => {
  return (
    <div className=' '>
        <HeadAwards />
      <FullAwards />


       <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black mt-20'  >
         <img src={doc} alt="" className='w-[100vw] h-full object-cover' />
  
        

      </Background>

       

    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < PImage />
          
        </div>
        </div>
     

     </Parallax>
      <SecondAwards />
      <NominateButton />
    </div>
  )
}

export default Awards
