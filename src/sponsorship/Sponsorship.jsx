import React, { useEffect } from 'react'
import styles from '../style'
import SponsorHead from './SponsorHead'
import Platinum from './Platinum'
import Gold from './Gold'
import Silver from './Silver'
import Support from './Support'

const Sponsorship = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // change to 'smooth' if you want animation
    })
  }, [])

  return (
    <div className='w-full bg-white'>

      <div className={`${styles.flexCenter} h-[50vh] md:h-[100vh] bg-space`}>
       
      </div>


       <div className={`${styles.flexCenter} mt-10 `}>
       <div className={`${styles.boxWidth}`}>
          <SponsorHead />
        </div>
        </div>

      <div className='w-full'>
        <div className={`${styles.flexCenter} mt-10 w-[90vw] mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Platinum />
          </div>
        </div>

        <div className={`${styles.flexCenter} mt-20 w-[90vw] mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Gold />
          </div>
        </div>

        <div className={`${styles.flexCenter} mt-20 w-[90vw] mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Silver />
          </div>
        </div>

        <div className={`${styles.flexCenter} mt-20 w-[90vw] mx-auto`}>
          <div className={`${styles.boxWidth}`}>
            <Support />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sponsorship
