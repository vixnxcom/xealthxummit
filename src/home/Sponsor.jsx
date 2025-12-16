import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../style'
import { redd, sp } from '../assets'
import SponsorButton from './SponsorButton'

gsap.registerPlugin(ScrollTrigger)

const Sponsor = () => {
  const headingRef = useRef(null)
  
  useEffect(() => {
    const headingEl = headingRef.current
    if (!headingEl) return

    // Store the original text
    const originalText = headingEl.textContent || ''
    
    // Clear the heading element
    headingEl.innerHTML = ''
    
    // Create a wrapper for each character WITHOUT inline-block
    // Instead, we'll wrap words or groups of characters
    const words = originalText.split(/(\s+)/) // Split by spaces but keep the spaces
    
    words.forEach((word, wordIndex) => {
      if (word === ' ') {
        // Add space
        headingEl.appendChild(document.createTextNode(' '))
      } else {
        // Create a span for the whole word
        const wordSpan = document.createElement('span')
        wordSpan.style.display = 'inline-block'
        wordSpan.style.whiteSpace = 'nowrap'
        
        // Split word into characters
        const chars = word.split('').map((char, charIndex) => {
          const charSpan = document.createElement('span')
          charSpan.style.display = 'inline-block'
          charSpan.style.opacity = '0'
          charSpan.style.transform = 'translateX(-20px)'
          charSpan.textContent = char
          return charSpan
        })
        
        // Add all character spans to word span
        chars.forEach(charSpan => wordSpan.appendChild(charSpan))
        
        // Store chars for animation
        wordSpan._chars = chars
        headingEl.appendChild(wordSpan)
        
        // Add space after word (except last word)
        if (wordIndex < words.length - 1 && words[wordIndex + 1] !== ' ') {
          headingEl.appendChild(document.createTextNode(' '))
        }
      }
    })
    
    // Collect all character spans for animation
    const allCharSpans = []
    const wordSpans = headingEl.querySelectorAll('span[style*="display: inline-block"]')
    wordSpans.forEach(wordSpan => {
      if (wordSpan._chars) {
        allCharSpans.push(...wordSpan._chars)
      }
    })
    
    // Animate all characters sequentially
    const animation = gsap.to(allCharSpans, {
      opacity: 1,
      x: 0,
      stagger: 0.03, // Faster stagger since we're animating characters
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingEl,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    })

    return () => {
      if (animation && animation.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className={`${styles.flexCenter} items-center justify-center mx-auto text-center `}>
      <div className=' max-w-5xl'>
        <div className='mb-10 mt-20'>
          <h1 
          ref={headingRef} 
           className="editors-bold text-5xl tracking-widest text-white text-left"
        >
         For <br /> Sponsorship
        </h1>
           {/* <img src={sp} alt="" className='mt-10'/> */}
          <p className='text-[28px]  text-blue-200 text-start mt-10 editors-reg '>
           Becoming a sponsor of the event is an opportunity that comes with significant benefits.
        </p>  

     
        </div>
        
      

        {/* <div className='mx-10'>
          <SponsorButton />
        </div> */}
        
        {/* <p className='textl mt-6 max-w-[470px] mx-5'>
         
          provident, recusandae sequi delectus iusto enim corrupti? Ex eveniet odit temporibus eum ad maiores totam tenetur
          eligendi rem, ipsa hic, ea quod recusandae enim, illo quam ab maxime neque optio? Eligendi ullam possimus debitis
       Provident veniam sed magni vitae ducimus expedita dignissimos sit, ullam tempora, quidem optio 
          dolore!?
        </p> */}
      </div>
    </div>
  )
}

export default Sponsor