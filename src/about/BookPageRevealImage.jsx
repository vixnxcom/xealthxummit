// BookPageRevealImage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BookPageRevealImage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const pageRef = useRef(null);
  const frameRef = useRef(null);
  const revealOverlayRef = useRef(null);
  const cornerRefs = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Client images
  const clientImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=800&h=800&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face',
  ];

  useEffect(() => {
    // Setup corner refs array
    cornerRefs.current = cornerRefs.current.slice(0, 4);

    // Initial hide
    gsap.set([imageRef.current, pageRef.current, frameRef.current], {
      opacity: 0,
      scale: 0.95,
    });

    gsap.set(revealOverlayRef.current, {
      x: '-100%',
      opacity: 1,
    });

    cornerRefs.current.forEach((corner, index) => {
      if (corner) {
        gsap.set(corner, {
          scale: 0,
          rotation: index % 2 === 0 ? -90 : 90,
        });
      }
    });

    // Scroll trigger setup
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
      onEnter: () => {
        setIsAnimating(true);
        playRevealSequence();
      },
      onLeaveBack: () => {
        resetAnimation();
      },
      onEnterBack: () => {
        setIsAnimating(true);
        playRevealSequence();
      },
    });

    const playRevealSequence = () => {
      // Clear existing animations
      gsap.killTweensOf(imageRef.current);
      gsap.killTweensOf(pageRef.current);
      gsap.killTweensOf(frameRef.current);
      gsap.killTweensOf(revealOverlayRef.current);
      
      if (cornerRefs.current) {
        cornerRefs.current.forEach(corner => {
          if (corner) gsap.killTweensOf(corner);
        });
      }

      // Create main timeline
      const mainTimeline = gsap.timeline();

      // Step 1: Page curl animation
      mainTimeline
        .to(pageRef.current, {
          opacity: 1,
          duration: 0,
        })
        .fromTo(pageRef.current,
          {
            rotationY: -120,
            transformOrigin: "left center",
            scaleX: 0.8,
            filter: "brightness(0.8) drop-shadow(20px 0 15px rgba(0,0,0,0.5))",
          },
          {
            rotationY: 0,
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            filter: "brightness(1) drop-shadow(5px 0 10px rgba(0,0,0,0.3))",
          },
          0
        );

      // Step 2: Swipe reveal overlay
      mainTimeline.to(revealOverlayRef.current, {
        x: '100%',
        duration: 1,
        ease: "power3.inOut",
        onStart: () => {
          gsap.set(imageRef.current, { opacity: 1 });
        }
      }, 0.3);

      // Step 3: Image emerges
      mainTimeline.fromTo(imageRef.current,
        {
          scale: 0.85,
          filter: "brightness(0.7) contrast(1.1)",
        },
        {
          scale: 1,
          filter: "brightness(1) contrast(1)",
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        0.8
      );

      // Step 4: Frame zoom
      mainTimeline.add(() => {
        gsap.set(frameRef.current, { opacity: 1 });
      }, 1.2);

      mainTimeline.fromTo(frameRef.current,
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        1.2
      );

      // Step 5: Corner animations
      mainTimeline.to(cornerRefs.current, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, 1.4);

      // Step 6: Final zoom settle
      mainTimeline.to(imageRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      }, 1.5);

      // Continuous floating animation
      const floatTimeline = gsap.timeline({
        delay: 3,
        repeat: -1,
        yoyo: true,
      });

      floatTimeline
        .to(imageRef.current, {
          y: -5,
          duration: 3,
          ease: "sine.inOut",
        })
        .to(frameRef.current, {
          y: -5,
          duration: 3,
          ease: "sine.inOut",
        }, 0);

      return () => {
        mainTimeline.kill();
        floatTimeline.kill();
      };
    };

    const resetAnimation = () => {
      setIsAnimating(false);
      gsap.set([imageRef.current, pageRef.current, frameRef.current], {
        opacity: 0,
        scale: 0.95,
      });
      gsap.set(revealOverlayRef.current, {
        x: '-100%',
      });
      cornerRefs.current.forEach((corner, index) => {
        if (corner) {
          gsap.set(corner, {
            scale: 0,
            rotation: index % 2 === 0 ? -90 : 90,
          });
        }
      });
    };

    return () => {
      if (scrollTrigger) scrollTrigger.kill();
      gsap.killTweensOf(imageRef.current);
      gsap.killTweensOf(pageRef.current);
      gsap.killTweensOf(frameRef.current);
      gsap.killTweensOf(revealOverlayRef.current);
    };
  }, []);

  // Add corner to refs
  const addCornerRef = (el, index) => {
    cornerRefs.current[index] = el;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Book page */}
        <div 
          ref={pageRef}
          className="relative mx-auto w-full max-w-md aspect-square rounded-lg"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Page shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/10 rounded-lg shadow-2xl" />
          
          {/* Page content */}
          <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-xl overflow-hidden">
            {/* Image container */}
            <div className="relative w-full h-full">
              <img
                ref={imageRef}
                src={clientImages[0]}
                alt="Client Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              
              {/* Swipe overlay */}
              <div 
                ref={revealOverlayRef}
                className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-lg"
              />
              
              {/* Paper texture */}
              <div className="absolute inset-0 mix-blend-overlay opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='texture' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23ffffff'/%3E%3Cpath d='M0,0 L100,100 M100,0 L0,100' stroke='%23000' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23texture)'/%3E%3C/svg%3E")`
              }} />
            </div>
          </div>

          {/* Curl shadow */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-3/4 bg-gradient-to-l from-black/20 to-transparent rounded-r-lg blur-sm" />
        </div>

        {/* Picture frame */}
        <div 
          ref={frameRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl pointer-events-none"
        >
          {/* Corner decorations */}
          {[
            { position: 'top-0 left-0', rotation: 0 },
            { position: 'top-0 right-0', rotation: 90 },
            { position: 'bottom-0 left-0', rotation: -90 },
            { position: 'bottom-0 right-0', rotation: 180 },
          ].map((corner, index) => (
            <div
              key={index}
              ref={(el) => addCornerRef(el, index)}
              className={`absolute ${corner.position} w-16 h-16 opacity-80`}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ transform: `rotate(${corner.rotation}deg)` }}
              >
                <path
                  d="M0,0 L100,0 L100,40 Q60,40 40,60 Q20,80 0,100 L0,0"
                  fill="url(#frameGradient)"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                />
              </svg>
            </div>
          ))}

          {/* Frame outline */}
          <div className="absolute -inset-4 border-2 border-transparent rounded-xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
            <div className="absolute inset-0 border-8 border-white/5 rounded-xl" />
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center">
          <div className="text-gray-400 text-sm font-light tracking-widest uppercase">
            {isAnimating ? 'Portfolio Display' : 'Scroll to reveal'}
          </div>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${10 + (i * 4)}%`,
              top: `${20 + (i * 3)}%`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* SVG definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BookPageRevealImage;