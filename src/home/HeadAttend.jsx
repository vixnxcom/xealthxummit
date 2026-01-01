import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeadAttend = () => {
  const headingRef = useRef(null)
  const triggerRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    const trigger = triggerRef.current
    if (!heading || !trigger) return

    // Initial hidden state
    gsap.set(heading, {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      opacity: 0
    })

    // Animation (paused)
    animRef.current = gsap.to(heading, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 1,
      duration: 1.3,
      ease: 'power2.out',
      paused: true
    })

    // Observer = ScrollTrigger start:"top 85%"
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animRef.current.play()
        } else {
          animRef.current.reverse()
        }
      },
      {
        threshold: 0
      }
    )

    observer.observe(trigger)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full mt-5 relative">
      {/* 🔴 85% viewport trigger line */}
      <div
        ref={triggerRef}
        className="absolute left-0 w-full h-[1px]"
        style={{ top: '15vh' }}
      />

      <div className="max-w-5xl mx-auto ">
        <div className="flex flex-col items-start mb-10">
          <h1
            ref={headingRef}
            className="editors-bold text-[32px] tracking-widest w-[200px] text-white text-left"
          >
       Who Should Attend
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeadAttend
