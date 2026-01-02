import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { big } from "../assets";

const HeadTier = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // set initial scale explicitly
    gsap.set(imageRef.current, {
      scale: 0.5,
      transformOrigin: "50% 50%",
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
          scale: 1,
          duration: 3, // slower = more cinematic
          ease: "power2.out",
        },
        "-=0.8"
      );

    return () => tl.kill();
  }, []);

  return (
    <section>
      <div className="relative w-screen h-[600px] overflow-hidden bg-white">

        {/* IMAGE */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <img
            ref={imageRef}
            src={big}
            alt=""
            className="w-full h-full object-cover will-change-transform"
          />
        </div>

        {/* PANELS */}
        <div
          ref={leftRef}
          className="absolute top-0 left-0 h-full w-1/2 bg-blue z-30"
        />
        <div
          ref={rightRef}
          className="absolute top-0 right-0 h-full w-1/2 bg-blue z-30"
        />
      </div>
    </section>
  );
};

export default HeadTier;
