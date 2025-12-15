import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ar } from "../assets";


const FaqAbout = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation: Swipe open like a book
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
      // Animation: Zoom in on the image
      .to(
        imageRef.current,
        {
          scale: 1.2,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.5" // Overlap the animations slightly
      );
  }, []);

  return (
    <section className="">
  
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-blue flex items-center justify-center"
    >
          {/* text */}
        <div className="w-6 z-[8]  mx-8 text-end items-end">
        <h1 className="text-blue-200 tracking-widest text-7xl text-end mx-8 editors-bold">
    About
      </h1>
        <h1 className="text-white tracking-widest  mx-8 mt-1 editors-reg text-4xl ">
      The Event
      </h1>
      </div> 
      {/* text */}
      {/* Left panel */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 h-full w-1/2 bg-black z-10"
      ></div>
      {/* Right panel */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 h-full w-1/2 bg-black z-10"
      ></div>
      {/* Hero Image */}
      <img
        ref={imageRef}
        src={ar}
        alt="Hero"
        className="w-full h-full object-cover scale-1.05"
      />
    </div>
    </section>
  );
};

export default FaqAbout;
