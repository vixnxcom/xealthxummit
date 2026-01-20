import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ahmed, big, brain, night, scope } from "../assets";

const SpeakerHead = () => {
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
      <div className="relative w-screen h-[80vh] md:h-[90vh] overflow-hidden bg-white">

        {/* LEFT TEXT */}
        <div className="absolute top-40  md:top-40 left-3 md:left-12 -translate-y-1/2 z-20 text-left max-w-[90vw]">
         <h1 className='text-[12vw] md:text-[56px] editors-bold font-bold text-white  letter-shade '>
    AGENDA
      </h1>

          <h2 className="text-white tracking-widest num-shade mt-2 editors-reg text-[25px]
           mt-24 md:text-[32px] ">
            2026 Event
          </h2>
        </div>

        {/* CENTERED VIDEO */}
        <div className="absolute inset-0 z-10 flex items-center  justify-center">
          <img
            ref={imageRef}
            src={scope}
           
            className=" 
              object-cover
              w-full h-full

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

export default SpeakerHead;
