import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from '../style'
import { redd } from '../assets'

const Quote = () => {
  const headingRef = useRef(null)

  useEffect(() => {
    const headingEl = headingRef.current
    if (!headingEl) return

    // Store the original text
    const originalText = headingEl.textContent || ''
    
    // Clear the heading element
    headingEl.innerHTML = ''
    
    // Split text into words and create spans
    const words = originalText.split(/(\s+)/)
    
    words.forEach((word, wordIndex) => {
      if (word === ' ') {
        headingEl.appendChild(document.createTextNode(' '))
      } else {
        const wordSpan = document.createElement('span')
        wordSpan.style.display = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'
        
        const chars = word.split('').map(char => {
          const charSpan = document.createElement('span')
          charSpan.style.display = 'inline-block'
          charSpan.style.opacity = '0'
          charSpan.style.transform = 'translateX(-20px)'
          charSpan.textContent = char
          return charSpan
        })
        
        chars.forEach(charSpan => wordSpan.appendChild(charSpan))
        wordSpan._chars = chars
        headingEl.appendChild(wordSpan)

        if (wordIndex < words.length - 1 && words[wordIndex + 1] !== ' ') {
          headingEl.appendChild(document.createTextNode(' '))
        }
      }
    })
    
    // Collect all character spans
    const allCharSpans = []
    headingEl.querySelectorAll('span[style*="display: inline-block"]').forEach(wordSpan => {
      if (wordSpan._chars) allCharSpans.push(...wordSpan._chars)
    })

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate when visible
            gsap.to(allCharSpans, {
              opacity: 1,
              x: 0,
              stagger: 0.03,
              duration: 0.3,
              ease: 'power2.out'
            })
            observerInstance.unobserve(entry.target) // Stop observing after animation
          }
        })
      },
      { threshold: 0.1 } // 10% visible triggers animation
    )

    observer.observe(headingEl)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${styles.flexCenter} items-center letter-shade justify-center mx-auto text-center min-h-[500px]`}>
      <div className='mx-auto max-w-4xl'>
        <div className='px-4 mt-10'></div>

        <h1 
          ref={headingRef} 
          className='editors-bold mt-32 text-4xl text-left mx-3 text-blue-200 leading-tight'
        >
          One-Day HealthTech Innovation Summit, Startup Pitch Finals & National HealthTech Excellence Awards
        </h1>

        <p className='textl mt-6 max-w-[470px] mx-5'>
          Provident, recusandae sequi delectus iusto enim corrupti? Ex eveniet odit temporibus eum ad maiores totam tenetur
          eligendi rem, ipsa hic, ea quod recusandae enim, illo quam ab maxime neque optio? Eligendi ullam possimus debitis.
          Provident veniam sed magni vitae ducimus.
        </p>
      </div>
    </div>
  )
}

export default Quote
