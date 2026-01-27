import React, { useEffect } from 'react'
import styles from '../style'
import SponsorHead from './SponsorHead'
import Platinum from './Platinum'
import Gold from './Gold'
import Silver from './Silver'
import Support from './Support'
import HeadTier from './HeadTier'
import MovingText from '../home/ImageText'
import WhiteButton from '../home/WhiteButton'
import SponsorButton from '../home/SponsorButton'
import Download from './Download'
import { Background, Parallax } from 'react-parallax'
import { agd } from '../assets'
import ImageBg from '../home/ImageBg'

const Sponsorship = () => {



  return (
    <div className='w-full bg-white '>

    
       <HeadTier />
      
      



       <div className={` ${styles.paddingX} ${styles.flexStart} mt-20 `}>
       <div className={`${styles.boxWidth}`}>
          <SponsorHead />
        </div>
        </div>


       <div className='bg-tier h-[170px] md:h-[360px]  '></div>

      <div className='w-full'>
        <div className={`${styles.flexCenter} ${styles.paddingX} mt-10 md:mt:20  mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Platinum />
          </div>
        </div>

        <div className={`${styles.flexCenter} ${styles.paddingX} mt-20 mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Gold />
          </div>
        </div>

        <div className={`${styles.flexCenter} mt-20 ${styles.paddingX} mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Silver />
          </div>
        </div>

        <div className={`${styles.flexCenter} mt-20 mb-10 ${styles.paddingX} mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Support />
          </div>
        </div>


      </div>

      <div className=' mb-20'>
        <SponsorButton />
      </div>

<div className={` ${styles.paddingX} ${styles.flexCenter}  `}>
   <div className={`${styles.boxWidth} mb-20 `}>
         
          <Download />
               
            
              </div> 
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
  )
}

export default Sponsorship
