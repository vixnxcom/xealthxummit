// AnimatedItem.jsx
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedItem = ({ children, index, className = '' }) => {
  const itemRef = useRef(null)

  useEffect(() => {
    const el = itemRef.current
    if (!el) return

    gsap.fromTo(el,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 30%",
          toggleActions: "play none none reverse",
          delay: index * 0.15,
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill()
        }
      })
    }
  }, [index])

  return (
    <div ref={itemRef} className={`${className} opacity-0`}>
      {children}
    </div>
  )
}

export default AnimatedItem