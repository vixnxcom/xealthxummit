import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypeWriterText = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.set(el, {
      x: 30,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out",
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
};

export default TypeWriterText;
