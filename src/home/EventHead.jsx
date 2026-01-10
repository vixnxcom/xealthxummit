import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const EventHead = () => {
  const headingRef = useRef(null)
  const isAnimating = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating.current) {
          isAnimating.current = true

          gsap.fromTo(
            headingRef.current,
            {
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              opacity: 0
            },
            {
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              opacity: 1,
              duration: 1.5,
              ease: 'power2.out',
              onComplete: () => {
                isAnimating.current = false
              }
            }
          )
        }
      },
      {
       threshold: 0.35

      }
    )

    if (headingRef.current) observer.observe(headingRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-start mb-10">
          <h1
            ref={headingRef}
            className="editors-bold text-[32px] tracking-widest text-blue"
          >
            Events of the Healthtech Frontiers 2026
          </h1>
        </div>
      </div>
    </section>
  )
}

export default EventHead
