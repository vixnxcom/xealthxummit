import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'

gsap.registerPlugin(ScrollTrigger)

const Benefits = () => {
  const headingRef = useRef(null)

useEffect(() => {
  const container = headingRef.current
  if (!container) return

  const headings = Array.from(container.querySelectorAll("h1"))

  // Prepare text (split into spans)
  headings.forEach(h1 => {
    const original = h1.textContent
    h1.innerHTML = ""

    original.split("").forEach(char => {
      const span = document.createElement("span")
      span.style.display = "inline-block"
      span.style.opacity = "0"
      span.style.transform = "translateY(20px)"
      span.textContent = char
      h1.appendChild(span)
    })
  })

  const observer = new IntersectionObserver(
    ([entry], obs) => {
      if (!entry.isIntersecting) return

      obs.disconnect() // ✅ run once

      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out",
        },
      })

      headings.forEach((h1, index) => {
        tl.to(
          h1.children,
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
          },
          index === 0 ? 0 : "+=0.2" // spacing between headings
        )
      })
    },
    {
      threshold: 1, // 🔥 container fully visible
    }
  )

  observer.observe(container)

  return () => observer.disconnect()
}, [])


  return (
    <div className={`${styles.flexCenter} items-center letter-shade justify-center mx-auto text-center min-h-[500px]`}>
      <div className='mx-auto max-w-4xl'>
        <div className='px-4 mt-10'></div>

        <div 
          ref={headingRef} 
          className=' mt-32 text-left mx-3 text-blue-200 flex flex-col leading-tight'
        >
          <h1 className='text-4xl editors-bold'><span className='text-[20px] editors-thin py-4 text-white'>_. </span> Visibility</h1>
          <br />
          <h1 className='text-4xl editors-bold'><span className='text-[20px] editors-thin py-4 text-white'>_. </span> Branding</h1>
          <br />
          <h1 className='text-4xl editors-bold'><span className='text-[20px] editors-thin py-4 text-white'>_. </span> Recognition</h1>
          <br />
          <h1 className='text-4xl editors-bold'><span className='text-[20px] editors-thin py-4 text-white'>_. </span> Partnership </h1>
          <h1 className='text-4xl editors-bold ml-6'>Opportunities</h1>
        </div>

        <p className='textl mt-6 max-w-[470px] mx-5'>
          provident, recusandae sequi delectus iusto enim corrupti? Ex eveniet odit temporibus eum ad maiores totam tenetur
          eligendi rem, ipsa hic, ea quod recusandae enim, illo quam ab maxime neque optio? Eligendi ullam possimus debitis
          Provident veniam sed magni vitae ducimus 
        </p>
      </div>
    </div>
  )
}

export default Benefits
