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
import { bot, brain, crowd, dna, doc,   health,   life,   man, sp, sponsor, steth, vr } from '../assets'
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
import OrganiseHead from './OrganiseHead'
import SecondHero from './SecondHero'
import SecondIntro from './SecondIntro'

import Why from './Why'
import WhyBody from './WhyBody'
import PartnerHead from './PartnerHead'
import Partners from './Partners'
import Button from './Button'
import WhiteButton from './WhiteButton'
import TypeWriterText from '../faq/TypeWriterText'


const Home = () => {


   
   useEffect(() => {
  window.scrollTo(0, 0) // Instant scroll, no animation
}, [])

  return (
 <div className=' w-full overflow-hidden bg-black  '>



 <div className={`${styles.flexCenter} bg-lady h-[100vh]`}>
 <div className={`${styles.boxWidth}`}>

   <Hero/>
</div>
</div>

  <div className={` ${styles.paddingX} ${styles.flexStart} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <Why/>
  
   
</div>
</div> 

   <div className={` ${styles.flexStart} ${styles.paddingX} bg-llady `}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <WhyBody/>
  
</div>
</div>



 
 <div className={` ${styles.paddingX} ${styles.flexStart} bg-cyan `}>
 <div className={`${styles.boxWidth} mt-2 mb-10`}>

   <Intro/>
  
</div>
</div>

 <div className={`${styles.flexCenter} mx-auto bg-blue`}>
 <div className={`${styles.boxWidth}`}>

   <Countdown/>
</div>
</div>

<TypeWriterText>
  <div className="bg-black mx-auto max-w-5xl flex justify-end">
    <img
      src={bot}
      alt=""
      className="w-90   object-contain md:w-[400px] lg:w-[500px]"
    />
  </div>
</TypeWriterText>



 <div className={`${styles.flexCenter} bg-blue `}>
 <div className={`${styles.boxWidth} mt-2 `}>

   <QuoteEvent/>
  
</div>
</div>






 <div className={` ${styles.paddingX} ${styles.flexStart} bg-white  `}>
 <div className={`${styles.boxWidth}  `}>
  

   <EventHead />

    
</div>
</div>

 <div className={`${styles.flexCenter}   bg-white `}>
 <div className={`${styles.boxWidth}  `}>
  
  
   <TicketButton />

    
</div>
</div>

   
 <div className={` ${styles.paddingX} ${styles.flexStart} bg-white  `}>
 <div className={`${styles.boxWidth} mt-10 `}>
    

   <OrganiseHead />
    
</div>
</div>
 <div className={`${styles.flexCenter}   mt-10`}>
 <div className={`${styles.boxWidth}  `}>
    

   <Organisers />
   
    
</div>
</div>



  <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black '  >
         <img src={man} alt="" className='w-[100vw]  mt-20 h-full object-contain' />
  
        

      </Background>

       

         
           < Quote />
          
      
     

     </Parallax>

<div className={` ${styles.paddingX} ${styles.flexStart} bg-white  `}>
 <div className={`${styles.boxWidth} mt-10 `}>
    

   <PartnerHead/>
    
</div>
</div>
 <div className={`${styles.flexCenter} bg-white  `}>
 <div className={`${styles.boxWidth}  `}>
    

   <Partners />
   
    
</div>
</div>
{/* g */}

   <div className={` ${styles.paddingX} ${styles.flexStart} bg-white  `}>
        <div className={`${styles.boxWidth} mt-10 `}>

           <AgendaHead /> 
       
        </div>
        </div>
<div  className=' bg-attende h-[330px] md:h-[520px]'></div> 

      <div className={` px-3 ${styles.flexStart} px-4 bg-white `}>
        <div className={`${styles.boxWidth}  mb-10`}>

           <Agenda /> 
       
        </div>
        </div>
     

         <div className={` ${styles.flexStart} bg-white  `}>
      
        <div className={`${styles.boxWidth}  `}>
         
           < Attendants />
          
          
        </div>
        </div>
   




   
     
 
         <div className={` ${styles.paddingX} ${styles.flexStart}   bg-white`}>
        <div className={`${styles.boxWidth} mt-10 `}>
        
              <SponsorsHead /> 
     
        </div>
        </div>

        <div className='bg-sp h-[330px] md:h-[520px]'></div>

         <div className={` px-3 ${styles.flexStart}   bg-white`}>
        <div className={`${styles.boxWidth}  `}>
        
 

           < SponsorBg />         
        </div>
        </div>
        


 


     <Parallax strength={900}  height={600}>
        <Background  style={{width:'100vw'}} className='celll bg-black '  >
         <img src={dna} alt="" className='w-[100vw] mt-20  h-full object-contain' />
  
        

      </Background>

       
 
    <div className={` ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}  `}>
         
      
           <ImageBg />
        </div>
        </div>
    </Parallax>

      
  <div className={` ${styles.paddingX} ${styles.flexStart}   bg-blue `}>
   <div className={`${styles.boxWidth} mt-20 `}>
         
          <MovingText />
               
            
              </div> 
              </div> 

<div className='bg-blue'>
   <div className='h-[80px] bg-blue'></div>
        <div className={`${styles.flexCenter} `}>
               <div className={`${styles.boxWidth} mb-10`}>
       
              <WhiteButton />            
              </div> 
              </div> 
      <div className="h-[120px]" />
  
</div>
     





</div>





  )
}

export default Home