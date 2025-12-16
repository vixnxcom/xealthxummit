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
  const sections = sectionsRef.current.filter(Boolean)

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const section = entry.target
        obs.unobserve(section) // ✅ run once

        const number = section.querySelector("span")
        const image = section.querySelector("img")
        const button = section.querySelector("button")

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        })

        // Section container
        tl.fromTo(
          section,
          { opacity: 0, y: 120, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 }
        )

        // Number
        if (number) {
          tl.fromTo(
            number,
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "elastic.out(1, 0.5)",
            },
            "-=0.4"
          )
        }

        // Image
        if (image) {
          tl.fromTo(
            image,
            {
              opacity: 0,
              y: 80,
              scale: 0.85,
              rotateX: 12,
              transformPerspective: 1000,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 1,
              ease: "back.out(1.4)",
            },
            "-=0.3"
          )
        }

        // Button (if exists)
        if (button) {
          tl.fromTo(
            button,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.3"
          )
        }
      })
    },
    {
      threshold: 0.9, // 🔥 almost fully visible (mobile-safe)
    }
  )

  sections.forEach(section => observer.observe(section))

  return () => observer.disconnect()
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

          <TypewriterText play={isVisible}

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
