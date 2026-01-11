import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ball, doc } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const FloatImage = ({ src }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;

    // BOOK PAGE SWIPE + ZOOM
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        once: true
      }
    });

    tl.fromTo(
      img,
      {
        x: "-40%",
        rotateY: -25,
        opacity: 0,
      },
      {
        x: "0%",
        rotateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
      }
    );

    tl.to(img, {
      scale: 1.10,
      duration: 1.1,
      ease: "power2.out"
    });

    // FLOATING ANIMATION (ALWAYS ON)
    gsap.to(img, {
      y: -15,
      duration: 2.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 1.5 // starts after entry animation finishes
    });

    // PARALLAX DEPTH EFFECT (scroll)
    gsap.to(img, {
      y: "-=70", // merges nicely with floating
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, []);

  return (
    <section>
    <div
      ref={containerRef}
      className="w-full flex justify-center py-5"
      style={{ perspective: "1300px" }}
    >
      <img
        ref={imgRef}
        src={doc}
        alt="Animated"
        className="w-full h-auto md:h-[520px] object-cover"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
      />
      
    </div>
    {/* <div className="flex flex-col justify-center items-center mx-auto max-w-[370px] mb-10 text-center">
  <h1 className="editors-bold text-4xl tracking-wider text-cyan">
    Dr Ahmed Abdulkareem
  </h1>

  <p className="editors-thin mt-2 text-white py-2 text-[32px] max-w-[370px]">
 <span className="editors-itallic"> Founder, </span>  TEDwi
  </p>
</div> */}

      </section>
  );

};

export default FloatImage;
