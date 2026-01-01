import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from '../style'
import { globe } from '../assets'



gsap.registerPlugin(ScrollTrigger)

const SponsorsHead = () => {
  const headingRef1 = useRef(null)
  const paragraphRef1 = useRef(null)
  const headingRef2 = useRef(null)
  const paragraphRef2 = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // First heading animation
    gsap.fromTo(
      headingRef1.current,
      {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        opacity: 0
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef1.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )

   
 

    


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="w-full   mt-10">
      <div className="max-w-5xl mx-auto ">
        {/* DATE Section - Left Aligned */}
        <div className="flex flex-col items-start mb-10">
          <h1 
            ref={headingRef1} 
            className="editors-bold  text-[32px] tracking-widest text-blue text-left"
          >
        For <br /> <span >Sponsorship</span> 
          </h1>
     
        </div>

        <div>
          <img src={globe} alt="" />
        </div>
    

    
      </div>


    </section>
  )
}

export default SponsorsHead