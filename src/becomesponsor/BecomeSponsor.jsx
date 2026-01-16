import React, { useEffect } from "react"
import styles from "../style"
import SponsorTitle from "./SponsorTitle"
import HeadBecome from "./HeadBecome"
import Statements from "./Statements"
import Reach from "./Reach"
import SponsorOptions from "./SponsorOptions"
import ContactSponsor from "./ContactSponsor"
import EmailSponsor from "./EmailSponsor"


const BecomeSponsor = () => {

useEffect(() => {
  window.scrollTo(0, 0) // Instant scroll, no animation
}, [])

  return (
    <div className='w-full bg-white '>

      <div className={`${styles.flexCenter} `}>
       <SponsorTitle/>
      </div>
      

 <div className={` ${styles.paddingX} ${styles.flexStart} mt-5 `}>
 <div className={`${styles.boxWidth} mt-2`}>

   <HeadBecome/>
  
</div>
</div>

  <div className={` ${styles.paddingX} ${styles.flexStart}  bg-state  h-[400px]`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Statements/>
  
</div>
</div>

<div className={` ${styles.flexStart} ${styles.paddingX} mt-5 `}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Reach/>
  
</div>
</div>
<div className={` ${styles.flexStart} ${styles.paddingX} mt-5 `}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <SponsorOptions/>
  
</div>
</div>
<div className={` ${styles.flexStart} ${styles.paddingX} mt-5 `}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <ContactSponsor/>
  
</div>
</div>
<div className={` ${styles.flexStart} ${styles.paddingX} mt-5 mb-10`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <EmailSponsor/>
  
</div>
</div>
<div className="h-[120px]" />
</div>

      )}

      export default BecomeSponsor;