import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { bulb, lead, mind } from '../assets';

const AnimatedCircleInov = ({
  size = 'lg',
}) => {
  const circleRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState(false);
  
  // REDUCED: Calculate circle circumference based on radius
  const radius = 30; // Reduced from 45
  const circumference = 2 * Math.PI * radius;
  
  // REDUCED: Size configurations
  const sizeConfig = {
    sm: { circle: 16 },   // Reduced from 24
    md: { circle: 32 },   // Reduced from 64
    lg: { circle: 48 },   // Reduced from 80
    xl: { circle: 64 }    // Reduced from 96
  };
  
  useEffect(() => {
    // Set up Intersection Observer to detect when component enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCircle();
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }
    
    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [isVisible]);
  
  const animateCircle = () => {
    if (!progressRef.current) return;
    
    // Animate the circle stroke from full to 0 (drawing the circle)
    gsap.to(progressRef.current, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power3.out",
    });
    
    // Add a subtle scale animation to the whole circle
    if (circleRef.current) {
      gsap.fromTo(circleRef.current, 
        { scale: 0.5, opacity: 0.7 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 2, 
          ease: "back.out(1.7)" 
        }
      );
    }
  };
  
  const circleSize = sizeConfig[size].circle;
  
  return (
    <div className="flex flex-col md:p-6">
      
      {/* Animated Circle Container */}
      <div 
        ref={containerRef}
        className="flex-1 flex flex-col items-start justify-center w-full " // Reduced py-12 to py-8
      >
        <div className="relative" ref={circleRef}>
          {/* Background Circle */}
          <div className="absolute inset-0">
            <svg 
              className={`w-${circleSize} h-${circleSize}`} 
              viewBox="0 0 100 100"
              width={circleSize * 4}
              height={circleSize * 4}
            >
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="#010b44ff"
                strokeWidth="2" // Optionally reduced from 3
              />
            </svg>
          </div>
          
          {/* Animated Progress Circle */}
          <div className="relative">
            <svg 
              className={`w-${circleSize} h-${circleSize} transform -rotate-90`} 
              viewBox="0 0 100 100"
              width={circleSize * 4}
              height={circleSize * 4}
            >
              <circle
                ref={progressRef}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.5" // Optionally reduced from 2
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a3b8ff" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#a3b8ff" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Empty area for your text - you can add any content here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* REDUCED: Image size - adjust based on your needs */}
                <img src={bulb} alt="" className='w-20 h-20'/> {/* Reduced from w-28 h-28 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircleInov;