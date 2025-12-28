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
import QuoteEvent from './QuoteEvent'
import FloatImage from '../about/FloatImage'
import SponsorHead from '../sponsorship/SponsorHead'
import SponsorsHead from './SponsorsHead'
import Agenda from './Agenda'
import AgendaAwards from './AgendaHead'
import AgendaAttend from './AgendaHead'
import AgendaHead from './AgendaHead'


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



 <div className={`${styles.flexCenter} bg-bg `}>
 <div className={`${styles.boxWidth} mt-2 mb-10`}>

   <Intro/>
  
</div>
</div>

 <div className={`${styles.flexCenter} bg-white`}>
 <div className={`${styles.boxWidth} mt-2 mb-10`}>

   <QuoteEvent/>
  
</div>
</div>








 <div className={`${styles.flexCenter}  mt-20 `}>
 <div className={`${styles.boxWidth}  `}>
   <EventHead />
   <TicketButton />

    
</div>
</div>

   <div className=' max-w-5xl bg-bg  mx-auto w-full mt-10 md:bg-black'>
      <h1 
        
   className="editors-bold px-4 text-5xl   tracking-widest text-white text-left"
          >
           Organisers
          </h1>
 <div className={`${styles.flexCenter} bg-white h-[160px] mt-7`}>
 <div className={`${styles.boxWidth}  `}>
    

   <Organisers />
    
</div>
</div>
</div>

  <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black mt-40'  >
         <img src={man} alt="" className='w-[100vw] h-full object-contain' />
  
        

      </Background>

       

    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Quote />
          
        </div>
        </div>
     

     </Parallax>




      <div className={` ${styles.paddingX} ${styles.flexStart} bg-white `}>
        <div className={`${styles.boxWidth} mt-10 mb-20`}>

           <AgendaHead />   
           < Agenda/>         
        </div>
        </div>

         <div className={` ${styles.paddingX} ${styles.flexStart} bg-tech  `}>
        <div className={`${styles.boxWidth}  `}>
         
           < Attendants />
           {/* <div className='h-[40px]'></div> */}
          
        </div>
        </div>
   




   
     
 
         <div className={` ${styles.paddingX} ${styles.flexStart} bg-white  `}>
        <div className={`${styles.boxWidth} mt-10 `}>

              <SponsorsHead /> 
           < SponsorBg />         
        </div>
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