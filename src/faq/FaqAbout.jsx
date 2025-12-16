import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { brain } from "../assets";

const FaqAbout = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(leftRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: "power4.out",
    })
      .to(
        rightRef.current,
        {
          xPercent: 100,
          duration: 1.5,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        imageRef.current,
        {
          scale: 1.2,
          transformOrigin: "50% 50%",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section>
      <div className="relative w-screen h-screen overflow-hidden bg-blue">
        
        {/* ✅ LEFT-SIDED TEXT (this is the key) */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 z-20 text-left">
          <h1 className="text-blue-200 tracking-widest text-5xl editors-bold">
            AWARD NOMINATIONS
          </h1>
          <h1 className="text-white tracking-widest mt-2 editors-reg text-4xl">
            The Event
          </h1>
        </div>

        {/* CENTERED IMAGE */}
        <div className="absolute inset-0 z-10">
          <video
            ref={imageRef}
            src={brain}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
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
