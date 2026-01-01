import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypeWriterText = ({ children }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const container = containerRef.current;

    gsap.set(text, {
      y: 80,        // subtle offset
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(text, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.40 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden"
    >
      <div
        ref={textRef}
        className="will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};

export default TypeWriterText;
