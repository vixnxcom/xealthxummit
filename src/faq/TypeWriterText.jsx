import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const TypewriterText = ({
  text,
  className = "",
  start = "top 80%",
  opacityFrom = 0.15,
  speed = 0.065
}) => {
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    // Clear original text
    el.innerHTML = ""

    // Split text into spans
    const chars = text.split("").map((char) => {
      const span = document.createElement("span")
      span.textContent = char === " " ? "\u00A0" : char
      span.style.opacity = opacityFrom
      span.style.display = "inline-block"
      el.appendChild(span)
      return span
    })

    const tl = gsap.fromTo(
      chars,
      { opacity: opacityFrom, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 0.04,
        stagger: speed,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play reverse play reverse"
        }
      }
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [text])

  return (
    <p
      ref={textRef}
      className={className}
      aria-label={text}
    />
  )
}

export default TypewriterText
