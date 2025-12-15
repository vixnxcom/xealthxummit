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

    const headings = container.querySelectorAll("h1")

    headings.forEach((h1, index) => {
      const original = h1.textContent
      h1.innerHTML = ""

      // Create character spans
      const chars = original.split("").map((char) => {
        const span = document.createElement("span")
        span.style.display = "inline-block"
        span.style.opacity = "0"
        span.style.transform = "translateY(20px)"
        span.textContent = char
        h1.appendChild(span)
        return span
      })

      // Animate each h1 one-by-one
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        delay: index * 0.4, // <-- each h1 animates later than the previous
        duration: 0.35,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
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
