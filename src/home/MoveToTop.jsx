import { useEffect, useState } from "react";

const MoveToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 13; // 300vh
      setShow(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-50 right-6 z-50
        h-12 w-12 rounded-full
        bg-black text-white text-3xl mb-2
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
      aria-label="Move to top"
    >
      ↑
    </button>
  );
};

export default MoveToTop;
