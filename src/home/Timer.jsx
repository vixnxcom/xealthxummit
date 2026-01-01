import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const SwipeUnit = ({ value }) => {
  const containerRef = useRef(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      const el = containerRef.current;

      // Swipe-Up Animation
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );

      prevValue.current = value;
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className="text-white
       editors-bold  text-4xl min-w-[60px] text-center"
    ><span className="p-2 letter-shade">{value}</span>
      
    </div>
  );
};

const Countdown = () => {
  const targetDate = new Date("June 1, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  const calculate = () => {
    const now = Date.now();
    const diff = targetDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / 1000 / 60) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculate());
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="w-full h-[200px] flex justify-center gap-3 items-center border border-b-gray-400">
      
      {/* DAYS */}
      <div className="flex flex-col  items-center  ">
        <SwipeUnit value={timeLeft.days} />
        <p className="text-white editors-reg p-2 text-xs mt-2 uppercase">Days </p>
      </div>

      {/* HOURS */}
      <div className="flex flex-col items-center   ">
        <SwipeUnit value={timeLeft.hrs} />
        <p className="text-white text-xs editors-reg mt-2 p-2 uppercase">Hours</p>
      </div>

      {/* MINUTES */}
     <div className="flex flex-col items-center   ">
        <SwipeUnit value={timeLeft.mins} />
        <p className="text-white text-xs mt-2 editrors-reg p-2 uppercase">Minutes</p>
      </div>

      {/* SECONDS */}
      <div className="flex flex-col items-center  ">
        <SwipeUnit value={timeLeft.secs} />
        <p className="text-white text-xs mt-2 editors-reg p-2 uppercase">Seconds</p>
      </div>

    </div>
  );
};

export default Countdown;
