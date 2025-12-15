import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { dna, doc, redd, scope } from '../assets'


gsap.registerPlugin(ScrollTrigger)

const IntroAbout = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null) // Add ref for button

  useEffect(() => {
    // Animate heading text
    gsap.fromTo(
      headingRef.current,
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
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate paragraph text
    gsap.fromTo(
      paragraphRef.current,
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
          trigger: paragraphRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate button when it enters viewport
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 30 // Start slightly below
      },
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 65%", // Adjust this value as needed
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="w-full min-h-[400px] mt-5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-row items-center ">
        
          <h1 ref={headingRef} className="editors-bold text-4xl mt-5 tracking-wider text-blue">
             <img src={redd} alt="DNA Icon" className="w-16 h-16 rounded-2xl mr-2" />
           The Exceptional Doctor who inspires
          </h1>
        </div>
        

        <div ref={paragraphRef} className="editors-thin mt-2 text-black py-4 text-[32px] max-w-[500px] ">
           <p><span className='text-blue flex flex-row'> 
            Meet Ahmedicine <img src={doc} alt="" className='w-20 h-20 mx-2 rounded-xl' />,</span>
        a visionary leader, mindset coach, and motivational speaker empowering teenagers & young people of African and Asian descent
         to unlock their full potential. With medical expertise and a passion for personal development, 
       
          </p> 
        </div>
        {/* Add ref to button container */}
        {/* <div ref={buttonRef} className='bg-button h-[240px]'>
          <Button />
        </div> */}
      </div>
    </section>
  )
}

export default IntroAbout