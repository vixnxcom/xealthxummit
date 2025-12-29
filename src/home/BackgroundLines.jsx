import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const StarsBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function createStar() {
      const star = document.createElement("div");
      star.className = "star bg-cyann rounded-full absolute";
      
      // Random size (1–3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      container.appendChild(star);

      // Animate star
      gsap.fromTo(
        star,
        { opacity: 0, scale: 0.2 },
        {
          opacity: 1,
          scale: 1.5,
          duration: 1.4,
          ease: "power2.out",
        }
      );

      gsap.to(star, {
        opacity: 0,
        scale: 3,
        duration: 1.4,
        delay: 1.8,
        ease: "sine.inOut",
        onComplete: () => star.remove(),
      });
    }

    // keep creating stars
    const interval = setInterval(() => {
      createStar();
    }, 120); // more or fewer stars = adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    ></div>
  );
};

export default StarsBackground;
