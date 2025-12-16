import React from 'react'
import styles from '../style'
import SponsorHead from './SponsorHead'
import Platinum from './Platinum'
import Gold from './Gold'
import Silver from './Silver'
import Support from './Support'

const Sponsorship = () => {
  return (
   <div className='w-full  bg-blue'>

 <div className={`${styles.flexCenter} bg-black `}>
 <div className={`${styles.boxWidth}`}>
   <SponsorHead />
      </div>
      </div>


<div className=' w-full '>
 <div className={`${styles.flexCenter} mt-10 w-[90vw]  mx-auto`}>
 <div className={`${styles.boxWidth}`}>
   <Platinum />
      </div>
      </div>
 <div className={`${styles.flexCenter} mt-20  w-[90vw] mx-auto`}>
 <div className={`${styles.boxWidth}`}>
   <Gold />
      </div>
      </div>
 <div className={`${styles.flexCenter} mt-20  w-[90vw] mx-auto`}>
 <div className={`${styles.boxWidth}`}>
   <Silver />
      </div>
      </div>

 <div className={`${styles.flexCenter} mt-20  w-[90vw] mx-auto`}>
 <div className={`${styles.boxWidth}`}>
   <Support />
      </div>
      </div>
 </div>




    </div>
  )
}

export default Sponsorship
