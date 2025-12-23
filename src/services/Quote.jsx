import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from '../style'

const Quote = () => {
  const headingRef = useRef(null)
  const hasAnimated = useRef(false)
  const hasScrolled = useRef(false)

  useEffect(() => {
    const headingEl = headingRef.current
    if (!headingEl) return

    // Detect real scroll (not page load)
    const onScroll = () => {
      hasScrolled.current = true
      window.removeEventListener('scroll', onScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const originalText = headingEl.textContent || ''
    headingEl.innerHTML = ''

    const words = originalText.split(/(\s+)/)
    const allCharSpans = []

    words.forEach((word) => {
      if (word === ' ') {
        headingEl.appendChild(document.createTextNode(' '))
      } else {
        const wordSpan = document.createElement('span')
        wordSpan.style.display = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'

        word.split('').forEach((char) => {
          const charSpan = document.createElement('span')
          charSpan.style.display = 'inline-block'
          charSpan.style.opacity = '0'
          charSpan.style.transform = 'translateX(-20px)'
          charSpan.textContent = char

          allCharSpans.push(charSpan)
          wordSpan.appendChild(charSpan)
        })

        headingEl.appendChild(wordSpan)
      }
    })

    const animate = () => {
      if (hasAnimated.current || !hasScrolled.current) return
      hasAnimated.current = true

      gsap.to(allCharSpans, {
        opacity: 1,
        x: 0,
        stagger: 0.03,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
        }
      },
      {
        threshold: 0.35
      }
    )

    // Observe AFTER paint
    requestAnimationFrame(() => observer.observe(headingEl))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={`${styles.flexCenter} items-center justify-center mx-auto text-center min-h-[500px]`}>
      <div className='mx-auto max-w-4xl'>
        <h1
          ref={headingRef}
          className='editors-bold mt-32 text-4xl text-left mx-3 text-blue-200 leading-tight'
        >
          One-Day HealthTech Innovation Summit, Startup Pitch Finals & National HealthTech
          Excellence Awards
        </h1>
      </div>
    </div>
  )
}

export default Quote
