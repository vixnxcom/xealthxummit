import React from 'react'
import styles from '../style'
import Hero from './Hero'
import Intro from './Intro'
import Stats from './Stats'
import Services from '../services/Services'
import ServiceButton from './ServiceButton'
import AboutButton from './AboutButton'
import BackgroundLines from './BackgroundLines'
import Sponsor from './Sponsor'
import SponsorButton from './SponsorButton'
import Countdown from './Timer'
import TicketButton from './TicketButton'
import Quote from '../services/Quote'
import { Background, Parallax } from 'react-parallax'
import { crowd, dna, doc,   health,   man, sponsor, steth, vr } from '../assets'
import BookParallaxFloatImage from '../about/IntroImage'
import Organisers from './Organisers'
import Attendants from './Attendants'
import Benefits from './Benefits'
import SponsorBg from './SponsorBg'
import ImageBg from './ImageBg'
import Faq from './Faq'
import EventHead from './EventHead'
import ImageText from './ImageText'
import MovingText from './ImageText'
import Video from './Video'


const Home = () => {
  return (
 <div className=' w-full overflow-hidden bg-bg '>

 <div className={`${styles.flexCenter} bg-gold h-[100vh]`}>
 <div className={`${styles.boxWidth}`}>

   <Hero/>
</div>
</div>

 <div className={`${styles.flexCenter} mx-auto bg-bg`}>
 <div className={`${styles.boxWidth}`}>

   <Countdown/>
</div>
</div>



 <div className={`${styles.flexCenter} bg-bg`}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <Intro/>
  
</div>
</div>

<div>
   {/* <video src={health} autoPlay loop muted className='w-full  md:h-[600px] object-contain '/> */}
   <Video />
</div>

    <div className=' max-w-5xl mx-auto w-full mt-15 '>
      <h1 
        
   className="editors-bold px-4 text-5xl tracking-widest text-white text-left"
          >
           Organisers
          </h1>
 <div className={`${styles.flexCenter} bg-blu h-[160px] mt-7`}>
 <div className={`${styles.boxWidth}  `}>
    

   <Organisers />
    
</div>
</div>
</div>

  <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black mt-20'  >
         <img src={man} alt="" className='w-[100vw] h-full object-contain' />
  
        

      </Background>

       

    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Quote />
          
        </div>
        </div>
     

     </Parallax>




 <div className={`${styles.flexCenter}  mt-20 `}>
 <div className={`${styles.boxWidth}  `}>
   <EventHead />
   <TicketButton />

    
</div>
</div>

  <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-blue '  >
         <div className='w-full h-full object-cover' />
     <img src={crowd} alt="" className='w-full h-full object-cover' />   

      </Background>

         <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Attendants />
          
        </div>
        </div>
   
     </Parallax>

     
      
        <div className='mt-20'>        
           < SponsorBg />         
        </div>
        


 


     <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black mt-20'  >
         <img src={dna} alt="" className='w-[100vw] h-full object-contain' />
  
        

      </Background>

       
 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
      
  <ImageBg />
        </div>
        </div>
     
<div className={` ${styles.paddingX} ${styles.flexStart} mt-20 `}>
        <div className={`${styles.boxWidth}  `}>
         
         
          <MovingText />
        </div>
        </div>

        <div className={`${styles.boxWidth} mt-20 mb-20`}>

   <SponsorButton />

    
</div>
     </Parallax>

  

     


<div className='h-screen bg-blue'>

</div>




</div>





  )
}

export default Home