import React, { useEffect } from 'react'
import FaqAbout from './FaqAbout'
import styles from '../style'
import Awards from './Awards'

const Faq = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // change to 'smooth' if you want animation
    })
  }, [])

  return (
     <div className=' w-full  bg-blue overflow-hidden '>

 <div className={`${styles.flexCenter} `}>
 <div className={`${styles.boxWidth}`}>
  <FaqAbout />
</div>
</div>


 <div className={`${styles.flexCenter} bg-blue mt-10`}>
 <div className={`${styles.boxWidth}`}>
  <Awards />
</div>
</div>
<div className='h-[40px]'></div>
</div>
  )
}

export default Faq
