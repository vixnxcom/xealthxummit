import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const EventHead = () => {
  const headingRef1 = useRef(null)
  const paragraphRef1 = useRef(null)
  const headingRef2 = useRef(null)
  const paragraphRef2 = useRef(null)
  const buttonRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.15 // 15% of the element visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          // Element is in viewport, play animation
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
              onComplete: () => {
                setHasAnimated(true)
              }
            }
          )
        } else if (!entry.isIntersecting && hasAnimated) {
          // Element is out of viewport, reset animation
          gsap.set(headingRef1.current, {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0
          })
          setHasAnimated(false)
        }
      })
    }, observerOptions)

    if (headingRef1.current) {
      observer.observe(headingRef1.current)
    }

    return () => {
      if (headingRef1.current) {
        observer.unobserve(headingRef1.current)
      }
    }
  }, [hasAnimated])

  return (
    <section className="w-full mt-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* DATE Section - Left Aligned */}
        <div className="flex flex-col items-start mb-10">
          <h1 
            ref={headingRef1} 
            className="editors-bold text-[32px] tracking-widest text-blue text-left"
          >
            Events of the Healthtech Frontiers 2026
          </h1>
        </div>
      </div>
    </section>
  )
}

export default EventHead