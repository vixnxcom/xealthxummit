import React, { useEffect } from 'react'
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
import { brain, crowd, dna, doc,   health,   man, sponsor, steth, vr } from '../assets'
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
import StarsBackground from './BackgroundLines'


const Home = () => {


   
     useEffect(() => {
       window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth', // change to 'smooth' if you want animation
       })
     }, [])

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

    <div className=' max-w-5xl bg-bg  mx-auto w-full mt-15 md:bg-black'>
      <h1 
        
   className="editors-bold px-4 text-5xl  tracking-widest text-white text-left"
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

  <Parallax strength={1300}  >
        <Background  style={{width:'100vw'}} className='cellll bg-bg
        
        '  >
         <div className='' />
     <img src={crowd} alt="" className='w-full h-full object-cover md:object-contain' />   

      </Background>

         <div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Attendants />
          
        </div>
        </div>
   

     </Parallax> 
  {/* <div className={` ${styles.paddingX} ${styles.flexStart} bg-grade `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Attendants />
          
        </div>
        </div> */}
   
     
      
        <div className='mt-20'>        
           < SponsorBg />         
        </div>
        


 


     <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black mt-10'  >
         <img src={dna} alt="" className='w-[100vw] h-full object-contain' />
  
        

      </Background>

       
 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
      
           <ImageBg />
        </div>
        </div>
    </Parallax>

          <div className={` ${styles.paddingX} ${styles.flexStart} relative bg-blue `}>
       <StarsBackground />
               <div className={`${styles.boxWidth} mt-30 `}>
         
          <MovingText />

         
          
     
            <div className={`${styles.boxWidth} mt-20 mb-20`}>
       
              <SponsorButton />

    
              </div>
              <div className='h-[40px]'></div>
        </div>
        </div>

   

    

  

     





</div>





  )
}

export default Home