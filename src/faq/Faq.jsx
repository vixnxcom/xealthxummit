import React from 'react'
import FaqAbout from './FaqAbout'
import styles from '../style'
import Awards from './Awards'

const Faq = () => {
  return (
     <div className=' w-full  bg-blue'>

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

</div>
  )
}

export default Faq
