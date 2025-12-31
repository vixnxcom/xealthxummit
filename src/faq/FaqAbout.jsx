import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { brain } from "../assets";

const FaqAbout = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });

    tl.to(leftRef.current, {
      xPercent: -100,
      duration: 1.5,
    })
      .to(
        rightRef.current,
        {
          xPercent: 100,
          duration: 1.5,
        },
        "<"
      )
      .to(
        imageRef.current,
        {
          scale: 1.30,
          duration: 3,
          ease: "power3.out",
          transformOrigin: "50% 50%",
         
        },
        "-=0.6"
      );

    return () => tl.kill();
  }, []);

  return (
    <section>
      <div className="relative w-screen h-screen overflow-hidden bg-black">

        {/* LEFT TEXT */}
        <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 z-20 text-left max-w-[90vw]">
          <h1 className="text-4xl md:text-5xl editors-bold text-cyan letter-shade">
            Award Nominations
          </h1>

          <h2 className="text-cyan tracking-widest mt-2 editors-itallic text-3xl md:text-4xl">
            2026 Event
          </h2>
        </div>

        {/* CENTERED VIDEO */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <video
            ref={imageRef}
            src={brain}
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full h-full
              object-cover
              md:object-contain
              will-change-transform
            "
          />
        </div>

        {/* PANELS */}
        <div
          ref={leftRef}
          className="absolute top-0 left-0 h-full w-1/2 bg-black z-30"
        />
        <div
          ref={rightRef}
          className="absolute top-0 right-0 h-full w-1/2 bg-black z-30"
        />
      </div>
    </section>
  );
};

export default FaqAbout;
