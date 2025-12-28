import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from '../style'

const Sponsor = () => {
  const headingRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const headingEl = headingRef.current
    if (!headingEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (animated.current) return

        animated.current = true
        observer.disconnect()

        const chars = []

        // Split text nodes ONLY, preserve <br />, remove leading space after <br />
        const splitNode = (node, prevWasBr) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment()

            let text = node.textContent || ''

            // Remove leading spaces only if this text follows <br />
            if (prevWasBr) {
              text = text.replace(/^\s+/, '')
            }

            text.split(/(\s+)/).forEach((word) => {
              if (word === ' ') {
                frag.appendChild(document.createTextNode(' '))
              } else {
                const wordSpan = document.createElement('span')
                wordSpan.style.display = 'inline-block'
                wordSpan.style.whiteSpace = 'nowrap'
                wordSpan.style.verticalAlign = 'baseline'

                word.split('').forEach((char) => {
                  const span = document.createElement('span')
                  span.textContent = char
                  span.style.display = 'inline-block'
                  span.style.opacity = '0'
                  span.style.transform = 'translateX(-20px)'
                  span.style.verticalAlign = 'baseline'

                  chars.push(span)
                  wordSpan.appendChild(span)
                })

                frag.appendChild(wordSpan)
              }
            })

            return frag
          }

          // Preserve <br /> exactly
          return node.cloneNode(true)
        }

        const originalNodes = [...headingEl.childNodes]
        headingEl.innerHTML = ''

        originalNodes.forEach((node, i) => {
          const prev = originalNodes[i - 1]
          const prevWasBr = prev && prev.nodeType === 1 && prev.tagName === 'BR'
          headingEl.appendChild(splitNode(node, prevWasBr))
        })

        gsap.to(chars, {
          opacity: 1,
          x: 0,
          stagger: 0.03,
          duration: 0.5,
          ease: 'power2.out'
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -80px 0px'
      }
    )

    observer.observe(headingEl)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${styles.flexCenter} items-center justify-center mx-auto text-center`}>
      <div className="max-w-5xl">
        <div className="mb-10 ">
     
           
         

          <p  ref={headingRef} className="text-[28px] text-white text-start editors-reg">
            Becoming a sponsor of the event is an opportunity that comes with significant benefits.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sponsor
