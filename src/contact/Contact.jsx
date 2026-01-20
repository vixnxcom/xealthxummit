import React from 'react'
import Details from './Details'
import styles from '../style'
import TypeWriterText from '../faq/TypeWriterText'

const Contact = () => {
  return (
   <div className=' w-full overflow-hidden   '>
    {/* TITLE BLOCK */}

      <div className="absolute top-40  left-3 md:left-12 z-20 max-w-[90vw]">
        <TypeWriterText>
        <h1 className="text-[12vw] md:text-[56px] editors-bold font-bold w-[300px] md:w-[470px] text-black letter-shade">
         CONTACT US
        </h1>
       </TypeWriterText>
        {/* <h2 className="text-black tracking-widest num-shade mt-24 editors-reg text-[25px] md:text-[32px]">
          2026 Event
        </h2> */}
      </div>

<div className={` ${styles.flexStart} ${styles.paddingX} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <Details />
        </div>
      </div>
      </div>
  )
}

export default Contact