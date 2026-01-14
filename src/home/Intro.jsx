import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const headingRef1 = useRef(null)
  const paragraphRef1 = useRef(null)

  const headingRef2 = useRef(null)
  const paragraphRef2 = useRef(null)

  const headingRef3 = useRef(null)
  const paragraphRef3 = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ===== DATE =====
      const dateTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef1.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      dateTl
        .fromTo(
          headingRef1.current,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          }
        )
        .fromTo(
          paragraphRef1.current,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0.8
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
          },
          0.2
        )

      // ===== LOCATION =====
      const locationTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef2.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      locationTl
        .fromTo(
          headingRef2.current,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          }
        )
        .fromTo(
          paragraphRef2.current,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0.8
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
          },
          0.2
        )

      // ===== VENUE =====
      const venueTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef3.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      venueTl
        .fromTo(
          headingRef3.current,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
          }
        )
        .fromTo(
          paragraphRef3.current,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 0.8
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
          },
          0.2
        )

    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="w-full mt-5">
      <div className="max-w-5xl mx-auto">

        {/* DATE */}
        <div className="flex flex-col items-start mb-5">
          <h1
            ref={headingRef1}
            className="editors-bold text-[32px] tracking-widest text-blue"
          >
            Date
          </h1>
          <p
            ref={paragraphRef1}
            className="editors-thin text-blue py-4 text-[20px] max-w-[500px]"
          >
            8 June 2026
          </p>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col items-start mb-5">
          <h1
            ref={headingRef2}
            className="editors-bold text-[32px] tracking-widest text-blue"
          >
            Location
          </h1>
          <p
            ref={paragraphRef2}
            className="editors-thin text-blue py-4 text-[20px] max-w-[500px]"
          >
            Lagos – Nigeria
          </p>
        </div>

        {/* VENUE */}
        <div className="flex flex-col items-start">
          <h1
            ref={headingRef3}
            className="editors-bold text-[32px] tracking-widest text-blue"
          >
            Venue
          </h1>
          <p
            ref={paragraphRef3}
            className="editors-thin text-blue py-4 text-[20px] max-w-[290px]"
          >
            NECA House Events Centre, Alausa
          </p>
        </div>

      </div>
    </section>
  )
}

export default Intro
