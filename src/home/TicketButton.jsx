import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { award, innovative, pitch, ticket } from "../assets"
import Button from "./Button"
import PitchButton from "./PitchButton"
import StarsBackground from "./BackgroundLines"
import TypewriterText from "../faq/TypeWriterText"


gsap.registerPlugin(ScrollTrigger)

const TicketButton = () => {
  const sectionsRef = useRef([])
  const imagesRef = useRef([])
  const numbersRef = useRef([])
  const sectionContainerRef = useRef(null)

useEffect(() => {
  // Animate each section container
  sectionsRef.current.forEach((section, index) => {
    if (!section) return

    gsap.fromTo(
      section,
      {
        opacity: 0,
        x: -150,
        scale: 0.5,
        rotationX: 15
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        delay: index * 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 30%",
           toggleActions: "play none none none", 
        }
      }
    )
  })

  // Animate images with different triggers based on position
imagesRef.current.forEach((image, index) => {
  if (!image) return

  // Calculate start position based on index
  // Earlier images (top) animate sooner, later images (bottom) animate later
  const startPosition = Math.max(50, 85 - (index * 5)); // Adjust formula as needed
  
  gsap.fromTo(
    image,
    {
      opacity: 0,
      scale: 0.3,
      y: 80,
      rotateX: 15,
      transformPerspective: 1000,
      transformOrigin: "center center"
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      duration: 1.5,
      delay: index * 0.4,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: image,
        start: `top ${startPosition}%`, // Dynamic start position
        toggleActions: "play none none none",
        once: true
      }
    }
  )
})
  // Animate numbers
  numbersRef.current.forEach((number, index) => {
    if (!number) return

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
          toggleActions: "play none none none", 
        }
      }
    )
  })

  // Parallax container
  gsap.fromTo(
    sectionContainerRef.current,
    { y: 50 },
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
    ScrollTrigger.getAll().forEach((t) => t.kill())
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

      <div
        ref={sectionContainerRef}
        className="relative max-w-5xl mx-auto z-10 px-4"
      >
        {/* Page Title */}
      

        {/* Section 1 */}
        <div
          ref={(el) => addToRefs(el, sectionsRef)}
          className="mb-20 flex flex-col items-start opacity-0"
        >
          <span
            ref={(el) => addToRefs(el, numbersRef)}
            className="text-[20px] editors-thin py-4 opacity-0"
          >
            01
          </span>

          <TypewriterText
            text="HealthTech Innovation Summit"
            className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
          />

          <img
            ref={(el) => addToRefs(el, imagesRef)}
            src={ticket}
            alt="Ticket"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />

          <Button />
        </div>

        {/* Section 2 */}
        <div
          ref={(el) => addToRefs(el, sectionsRef)}
          className="mb-20 flex flex-col items-start opacity-0"
        >
          <span
            ref={(el) => addToRefs(el, numbersRef)}
            className="text-[20px] editors-thin py-4 opacity-0"
          >
            02
          </span>

          <TypewriterText
            text="National HealthTech Excellence Awards"
            className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
          />

          <img
            ref={(el) => addToRefs(el, imagesRef)}
            src={award}
            alt="Award"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />
        </div>

        {/* Section 3 */}
        <div
          ref={(el) => addToRefs(el, sectionsRef)}
          className="mb-20 flex flex-col items-start opacity-0"
        >
          <span
            ref={(el) => addToRefs(el, numbersRef)}
            className="text-[20px] editors-thin py-4 opacity-0"
          >
            03
          </span>

          <TypewriterText
            text="Startup Pitch Finals"
            className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
          />

          <img
            ref={(el) => addToRefs(el, imagesRef)}
            src={pitch}
            alt="Pitch Competition"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />

          <PitchButton />
        </div>

        {/* Section 4 */}
        <div
          ref={(el) => addToRefs(el, sectionsRef)}
          className="mb-20 flex flex-col items-start opacity-0"
        >
          <span
            ref={(el) => addToRefs(el, numbersRef)}
            className="text-[20px] editors-thin py-4 opacity-0"
          >
            04
          </span>

          <TypewriterText
            text="Networking & Innovation     Exhibition"
            className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
          />

          <img
            ref={(el) => addToRefs(el, imagesRef)}
            src={innovative}
            alt="Innovation Exhibition"
            className="w-full max-w-4xl mt-5 mb-8 md:mx-auto hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  )
}

export default TicketButton
