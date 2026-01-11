import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { dna, redd, scope } from '../assets'


gsap.registerPlugin(ScrollTrigger)

const IntroAttend = () => {
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
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef1.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // First paragraph animation
    gsap.fromTo(
      paragraphRef1.current,
      {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        opacity: 0.8
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1,
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef1.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Second heading animation
    gsap.fromTo(
      headingRef2.current,
      {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        opacity: 0
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef2.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Second paragraph animation
    gsap.fromTo(
      paragraphRef2.current,
      {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        opacity: 0.8
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        opacity: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef2.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="w-full  mt-5">
      <div className="max-w-5xl mx-auto ">
        {/* DATE Section - Left Aligned */}
        <div className="flex flex-col items-start mb-10">
          <h1 
            ref={headingRef1} 
            className="editors-bold text-[24px] tracking-widest text-blue text-left"
          >
           HealthTech Frontiers <br /> 2026
 
          </h1>
         
        </div>
        
        {/* LOCATION Section - Left Aligned */}
        <div className="flex flex-col items-start ">
          <h1 
            ref={headingRef2} 
            className="editors-bold text-[24px] tracking-widest text-blue text-left"
          >
          8 June 2026 | Lagos, Nigeria
          </h1>
       
        </div>
       
        <div>
               <p 
            ref={paragraphRef2} 
            className="editors-thin text-blue py-4 mb-5 text-[20px] max-w-[500px] text-left"
          >
          
          </p>
        </div>
       
        {/* <div ref={buttonRef} className='bg-red h-[240px] mb-5 flex items-start'>
          <Button />
        </div>
        <div ref={buttonRef} className='bg-blu h-[240px] mb-5 flex items-start'>
          <SponsorButton />
        </div>
        <div ref={buttonRef} className='bg-gren h-[240px] mb-5 flex items-start'>
          <PitchButton />
        </div> */}
      </div>
    </section>
  )
}

export default IntroAttend