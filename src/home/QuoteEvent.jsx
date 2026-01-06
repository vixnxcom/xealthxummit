import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../style";

const QuoteEvent = () => {
  const headingRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    /* --- wrap words once --- */
    const wrapWords = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent
          .split(" ")
          .filter(Boolean)
          .map(
            (word) =>
              `<span class="word-span inline-block mr-1">${word}</span>`
          )
          .join(" ");
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const html = Array.from(node.childNodes)
          .map(wrapWords)
          .join(" ");
        return `<${node.tagName.toLowerCase()} class="${node.className}">${html}</${node.tagName.toLowerCase()}>`;
      }

      return "";
    };

    el.innerHTML = Array.from(el.childNodes).map(wrapWords).join("");

    const wordSpans = el.querySelectorAll(".word-span");

    gsap.set(wordSpans, {
      opacity: 0,
      y: 50,
    });

    /* --- intersection observer --- */
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          stagger: 0.20,
        });

        observerRef.current.disconnect(); // run once
      },
      {
        threshold: 0.35, // how much must be visible
        rootMargin: "0px 0px -80px 0px", // feels nicer on small screens
      }
    );

    observerRef.current.observe(el);

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={`${styles.flexCenter} items-center justify-center mx-auto`}>
      <div className="mx-auto max-w-4xl px-4 mb-16 mt-10">
        <h1
          ref={headingRef}
          className="editors-bold text-4xl text-left mx-3 text-white leading-tight"
        >
          OneDay <span className="text-cyan">HealthTech</span>{" "}
          Innovation Summit, Startup Pitch Finals & National{" "}
          <span className="text-cyan">HealthTech</span> Excellence Awards.
        </h1>
      </div>
    </div>
  );
};

export default QuoteEvent;
