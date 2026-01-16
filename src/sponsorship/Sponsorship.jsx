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

const Sponsorship = () => {

  useEffect(() => {
  window.scrollTo(0, 0) // Instant scroll, no animation
}, [])

  return (
    <div className='w-full bg-white '>

      <div className={`${styles.flexCenter} `}>
       <HeadTier />
      </div>
      



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

        <div className={`${styles.flexCenter} mt-20 mb-20 ${styles.paddingX} mx-auto`}>
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
