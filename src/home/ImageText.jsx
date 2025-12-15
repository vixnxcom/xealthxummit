import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MovingText = () => {
  const textRef = useRef(null);
  const words = ["innovate", "create", "build", "grow"];

  useEffect(() => {
    let index = 0;
    const span = textRef.current;

    span.innerText = `Let's  ${words[index]} together`;

    const changeWord = () => {
      const nextIndex = (index + 1) % words.length;
      const tl = gsap.timeline();

      // Animate current text up and fade out
      tl.to(span, { y: "-100%", opacity: 0, duration: 0.5, ease: "power2.inOut" })
        .set(span, { y: "100%", opacity: 0 }) // Move below for next word
        .call(() => {
          span.innerText = `Let's ${words[nextIndex]} together`;
        })
        .to(span, { y: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" });

      index = nextIndex;
    };

    const interval = setInterval(changeWord, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "9.5rem",
        display: "inline-block",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#fff",
       
      }}
    >
      <span className="text-5xl editors-bold" ref={textRef}></span>
    </div>
  );
};

export default MovingText;
