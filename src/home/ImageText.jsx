import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MovingText = () => {
  const wordRef = useRef(null);
  const words = ["INNOVATE", "CREATE", "BUILD", "GROW"];

  useEffect(() => {
    let index = 0;
    const wordEl = wordRef.current;

    wordEl.innerText = words[index];

    const changeWord = () => {
      const nextIndex = (index + 1) % words.length;

      gsap.timeline()
        .to(wordEl, {
          y: "-100%",
          opacity: 0,
          duration: 0.45,
          ease: "power2.inOut",
        })
        .set(wordEl, { y: "100%" })
        .call(() => {
          wordEl.innerText = words[nextIndex];
        })
        .to(wordEl, {
          y: "0%",
          opacity: 1,
          duration: 0.45,
          ease: "power2.inOut",
        });

      index = nextIndex;
    };

    const interval = setInterval(changeWord, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white editors-bold">
      {/* LINE 1 */}
      <div className="flex flex-col  text-blue-200 text-5xl leading-none">
        <span>Let’s&nbsp;</span>

        <span
          style={{
            height: "3.4rem",
            overflow: "hidden",
            display: "inline-block",
          }}
        >
        <span ref={wordRef} className="inline-block mt-3 text-cyan letter-shade" />
        </span>
      </div>

      {/* LINE 2 */}
      <div className="text-5xl mt-3 text-blue-200 leading-none">
        together
      </div>
    </div>
  );
};

export default MovingText;
