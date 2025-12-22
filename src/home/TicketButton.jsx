import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { award, innovative, pitch, ticket } from "../assets"
import Button from "./Button"
import PitchButton from "./PitchButton"
import StarsBackground from "./BackgroundLines"
import TypewriterText from "../faq/TypeWriterText"

const TicketButton = () => {
  const sectionsRef = useRef([])
  const [revealed, setRevealed] = useState([])

  const isMobile = () => window.innerWidth < 768

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean)

    /* =========================
       DESKTOP / LARGE SCREENS
       ========================= */
    if (!isMobile()) {
      sections.forEach(section => {
        gsap.set(section, { opacity: 1, y: 0, scale: 1 })

        const number = section.querySelector("span")
        const image = section.querySelector("img")
        const button = section.querySelector("button")

        if (number) gsap.set(number, { opacity: 1, scale: 1, rotation: 0 })
        if (image) gsap.set(image, { opacity: 1, y: 0, scale: 1, rotateX: 0 })
        if (button) gsap.set(button, { opacity: 1, y: 0 })
      })

      setRevealed([0, 1, 2, 3])
      return
    }

    /* =========================
       MOBILE ONLY ANIMATION
       ========================= */
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          const section = entry.target
          const index = sections.indexOf(section)

          obs.unobserve(section)

          setRevealed(prev =>
            prev.includes(index) ? prev : [...prev, index]
          )

          const number = section.querySelector("span")
          const image = section.querySelector("img")
          const button = section.querySelector("button")

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" }
          })

          tl.fromTo(
            section,
            { opacity: 0, y: 120, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8 }
          )

          if (number) {
            tl.fromTo(
              number,
              { opacity: 0, scale: 0, rotation: -180 },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.5)"
              },
              "-=0.4"
            )
          }

          if (image) {
            tl.fromTo(
              image,
              {
                opacity: 0,
                y: 80,
                scale: 0.85,
                rotateX: 12,
                transformPerspective: 1000
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: 1,
                ease: "back.out(1.4)"
              },
              "-=0.3"
            )
          }

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
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const addToRefs = el => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <section className="relative bg-bg text-white overflow-hidden">
      <StarsBackground />

      <div className="relative max-w-5xl mx-auto z-10 px-4">

        {/* SECTION 1 */}
        <div ref={addToRefs} className="mb-20 flex flex-col items-start opacity-0">
          <span className="text-[20px] editors-thin py-4 opacity-0">01</span>

          {revealed.includes(0) && (
            <TypewriterText
              text="HealthTech Innovation Summit"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
          )}

          <img
            src={ticket}
            alt="Ticket"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />

          <Button />
        </div>

        {/* SECTION 2 */}
        <div ref={addToRefs} className="mb-20 flex flex-col items-start opacity-0">
          <span className="text-[20px] editors-thin py-4 opacity-0">02</span>

          {revealed.includes(1) && (
            <TypewriterText
              text="National HealthTech Excellence Awards"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
          )}

          <img
            src={award}
            alt="Award"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />
        </div>

        {/* SECTION 3 */}
        <div ref={addToRefs} className="mb-20 flex flex-col items-start opacity-0">
          <span className="text-[20px] editors-thin py-4 opacity-0">03</span>

          {revealed.includes(2) && (
            <TypewriterText
              text="Startup Pitch Finals"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
          )}

          <img
            src={pitch}
            alt="Pitch Competition"
            className="w-full max-w-4xl mb-8 mt-5 md:mx-auto hover:scale-105 transition-transform"
          />

          <PitchButton />
        </div>

        {/* SECTION 4 */}
        <div ref={addToRefs} className="mb-20 flex flex-col items-start opacity-0">
          <span className="text-[20px] editors-thin py-4 opacity-0">04</span>

          {revealed.includes(3) && (
            <TypewriterText
              text="Networking & Innovation Exhibition"
              className="text-[32px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
          )}

          <img
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
