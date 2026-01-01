import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../style";

gsap.registerPlugin(ScrollTrigger);

const QuoteEvent = () => {
  const headingRef = useRef(null);

 useEffect(() => {
  const el = headingRef.current;
  if (!el) return;

  // Function to wrap each text node word in a span
  const wrapWords = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(" ").filter(Boolean);
      return words
        .map((word) => `<span class="word-span inline-block mr-1">${word}</span>`)
        .join(" ");
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.innerHTML = Array.from(node.childNodes)
        .map(wrapWords)
        .join(" ");
      return node.outerHTML;
    }
    return "";
  };

  el.innerHTML = Array.from(el.childNodes).map(wrapWords).join(" ");

  const wordSpans = el.querySelectorAll(".word-span");

  gsap.set(wordSpans, { opacity: 0, y: 20 });

  gsap.to(wordSpans, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
      once: true,
    },
  });
}, []);

  return (
    <div className={`${styles.flexCenter} items-center justify-center mx-auto`}>
      <div className="mx-auto max-w-4xl px-4 mb-15 mt-10">
        <h1
          ref={headingRef}
          className="editors-bold font-bold text-4xl text-left mx-3 text-blue leading-tight"
        >
          OneDay <span className="text-purple">HealthTech</span> 
          Innovation Summit, Startup Pitch Finals & National <span className="text-purple">HealthTech</span> Excellence Awards.
        </h1>
      </div>
    </div>
  );
};

export default QuoteEvent;
