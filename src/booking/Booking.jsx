import React, { useEffect } from 'react'
import PageTitle from './PageTitle'
import styles from '../style'
import IntroAttend from './IntroAttend'
import Snapshot from './Snapshot'
import Top from './Top'
import Options from './Options'
import TicketType from './TicketType'
import Get from './Get'
import WhatuGet from './WhatuGet'


const Booking = () => {



  return (
    <div className='w-full bg-white '>

      <div className={`${styles.flexCenter} `}>
       <PageTitle />
      </div>
       


 <div className={` ${styles.paddingX} ${styles.flexStart} mt-5 `}>
 <div className={`${styles.boxWidth} mt-2`}>

   <IntroAttend/>
  
</div>
</div>

 <div className={` ${styles.flexStart}   ${styles.paddingX} bg-reg `}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Top/>
  
</div>
</div>

 <div className={` ${styles.flexStart} ${styles.paddingX} mt-5`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Snapshot/>
  
</div>
</div>

 <div className={` ${styles.flexStart} ${styles.paddingX} mt-5`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Options/>
  
</div>
</div>
 <div className={` ${styles.flexStart} ${styles.paddingX} mt-5`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <TicketType/>
  
</div>
</div>

<div className={` ${styles.flexStart} ${styles.paddingX} mt-5`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Get/>
  
</div>
</div>

<div className={` ${styles.flexStart} ${styles.paddingX} mt-5 mb-10`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <WhatuGet/>
  
</div>
</div>
 <div className="h-[120px]" />
      </div>

  )}
    export default Booking