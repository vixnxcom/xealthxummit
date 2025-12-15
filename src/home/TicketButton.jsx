import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { award, innovative, pitch, ticket } from '../assets'
import Button from './Button'
import PitchButton from './PitchButton'
import StarsBackground from './BackgroundLines'

gsap.registerPlugin(ScrollTrigger)

const TicketButton = () => {
  const sectionsRef = useRef([])
  const imagesRef = useRef([])
  const headingsRef = useRef([])
  const numbersRef = useRef([])
  const sectionContainerRef = useRef(null)

  useEffect(() => {
    // Animate each section with more intense effects
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 150,
            scale: 0.9,
            rotationX: 15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            delay: index * 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 30%",
              toggleActions: "play none none reverse",
              markers: false // Set to true to see trigger positions during development
            }
          }
        )
      }
    })

    // Animate images separately with scale and blur effects
    imagesRef.current.forEach((image, index) => {
      if (image) {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)",
            y: 100
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.5,
            delay: index * 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    // Animate headings with stronger effects
    headingsRef.current.forEach((heading, index) => {
      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            x: -100,
            skewX: 10
          },
          {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: index * 0.2 + 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    // Animate numbers with a popping effect
    numbersRef.current.forEach((number, index) => {
      if (number) {
        gsap.fromTo(
          number,
          {
            opacity: 0,
            scale: 0,
            rotation: -180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: number,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    // Add a parallax effect to the main container
    gsap.fromTo(
      sectionContainerRef.current,
      {
        y: 50
      },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el)
    }
  }

  return (
    <section className="relative bg-bg text-white overflow-hidden">
      <StarsBackground />
      
      <div ref={sectionContainerRef} className="relative max-w-5xl mx-auto z-10 px-4">
        {/* Page Title with animation */}
        <div className='mb-16 opacity-0' ref={(el) => addToRefs(el, sectionsRef)}>
          <h1 className="editors-bold text-5xl md:text-6xl tracking-widest text-white text-left">
            Events
          </h1>
        
        </div>

        {/* First Button Section */}
        <div ref={(el) => addToRefs(el, sectionsRef)} className='mb-20 flex flex-col items-start opacity-0'>
          <div className="flex flex-col items-start mb-10 w-full">
            <span ref={(el) => addToRefs(el, numbersRef)} className='text-[20px] editors-thin py-4 text-white opacity-0'>01</span>
            <p ref={(el) => addToRefs(el, headingsRef)} className='text-[32px] md:text-[40px] text-blue-200 flex flex-col mt-2 editors-reg opacity-0'>
              HealthTech Innovation Summit
            </p>
          </div>
          <img 
            ref={(el) => addToRefs(el, imagesRef)} 
            src={ticket} 
            alt="Ticket" 
            className='w-full max-w-4xl mb-8 md:mx-auto transform transition-transform duration-300 hover:scale-105' 
          />
          <Button />
        </div>

        {/* Second Button Section */}
        <div ref={(el) => addToRefs(el, sectionsRef)} className='mb-20 flex flex-col items-start opacity-0'>
          <div className='mb-10 max-w-4xl w-full'>
            <span ref={(el) => addToRefs(el, numbersRef)} className='text-[20px] editors-thin py-4 text-white opacity-0'>02</span>
            <p ref={(el) => addToRefs(el, headingsRef)} className='text-[32px] md:text-[40px] text-blue-200 flex flex-col mt-2 editors-reg opacity-0'>
              National HealthTech Excellence Awards
            </p>
          </div>
          <img 
            ref={(el) => addToRefs(el, imagesRef)} 
            src={award} 
            alt="Award" 
            className='w-full max-w-4xl md:mx-auto mb-8 transform transition-transform duration-300 hover:scale-105' 
          />
        </div>

        {/* Third Button Section */}
        <div ref={(el) => addToRefs(el, sectionsRef)} className='mb-20 flex flex-col items-start opacity-0'>
          <div className='mb-10 max-w-4xl w-full'>
            <span ref={(el) => addToRefs(el, numbersRef)} className='text-[20px] editors-thin py-4 text-white opacity-0'>03</span>
            <p ref={(el) => addToRefs(el, headingsRef)} className='text-[32px] md:text-[40px] text-blue-200 flex flex-col mt-2 editors-reg opacity-0'>
              Startup Pitch Finals
            </p>
          </div>
          <img 
            ref={(el) => addToRefs(el, imagesRef)} 
            src={pitch} 
            alt="Pitch Competition" 
            className='w-full max-w-4xl md:mx-auto mb-8 transform transition-transform duration-300 hover:scale-105' 
          />
          <PitchButton />
        </div>

        {/* Fourth Button Section */}
        <div ref={(el) => addToRefs(el, sectionsRef)} className='mb-20 flex flex-col items-start opacity-0'>
          <div className='mb-10 max-w-4xl w-full'>
            <span ref={(el) => addToRefs(el, numbersRef)} className='text-[20px] editors-thin py-4 text-white opacity-0'>04</span>
            <p ref={(el) => addToRefs(el, headingsRef)} className='text-[32px] md:text-[40px] text-blue-200 flex flex-col mt-2 editors-reg opacity-0'>
              Networking & Innovation Exhibition
            </p>
          </div>
          <img 
            ref={(el) => addToRefs(el, imagesRef)} 
            src={innovative} 
            alt="Innovation Exhibition" 
            className='w-full max-w-4xl md:mx-auto mb-8 transform transition-transform duration-300 hover:scale-105' 
          />
        </div>
      </div>
    </section>
  )
}

export default TicketButton