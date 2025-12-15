import React from 'react'
import styles from '../style'
import HeroAbout from './HeroAbout'
import IntroAbout from './IntroAbout'
import IntroImage from './IntroImage'
import SecIntro from './SecIntro'

const About = () => {
  return (
    <div className=' w-full overflow-hidden bg-blue'>

 <div className={`${styles.flexCenter} bg-home`}>
 <div className={`${styles.boxWidth}`}>
  <HeroAbout />
</div>
</div>
 <div className={`${styles.flexCenter} bg-white`}>
 <div className={`${styles.boxWidth}`}>
  <IntroAbout />
</div>
</div>
 <div className={`${styles.flexCenter} bg-home`}>
 <div className={`${styles.boxWidth}`}>
  <IntroImage />
</div>
</div>
 <div className={`${styles.flexCenter} bg-white`}>
 <div className={`${styles.boxWidth}`}>
  <SecIntro />
</div>
</div>


</div>
  )
}

export default About
