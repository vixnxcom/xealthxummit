import React, { useEffect, useState } from 'react';
import { dna, globe, med, steth } from '../assets';
import styles from '../style';

const Hero = () => {
  const [stars, setStars] = useState([]);

  // Generate random stars on mount
  useEffect(() => {
    const generateStars = () => {
      const starCount = 150;
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        const size = Math.random();
        let starSize = 'star-tiny';
        if (size < 0.1) starSize = 'star-large';
        else if (size < 0.3) starSize = 'star-medium';
        else if (size < 0.6) starSize = 'star-small';
        
        const brightness = Math.random();
        let starBrightness = 'star-normal';
        if (brightness < 0.3) starBrightness = 'star-dim';
        else if (brightness > 0.7) starBrightness = 'star-bright';
        
        const color = Math.random();
        let starColor = 'star-white';
        if (color < 0.2) starColor = 'star-blue';
        else if (color < 0.4) starColor = 'star-cyan';
        else if (color < 0.6) starColor = 'star-purple';
        
        const animation = Math.random();
        let starAnimation = 'star-twinkle';
        if (animation < 0.2) starAnimation = 'star-twinkle-fast';
        else if (animation < 0.4) starAnimation = 'star-twinkle-slow';
        
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: starSize,
          brightness: starBrightness,
          color: starColor,
          animation: starAnimation,
          animationDelay: `${Math.random() * 5}s`,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

 
  return (
    <div className="relative w-full h-screen overflow-hidden"> {/* Changed from w-[100vw] to w-full */}
      {/* DNA Background Image - ANIMATED */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat dna-bg-animated"
          style={{
            // backgroundImage: `url(${dna})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        />
        
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-hero" />
      </div>
      
      {/* Starry Sky Overlay - WITH ANIMATIONS */}
      <div className="absolute inset-0 z-1">
        {/* Animated Stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className={`star ${star.size} ${star.brightness} ${star.color} ${star.animation}`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              opacity: 0.6,
            }}
          />
        ))}
        
        {/* Animated Galaxy Effects */}
        <div className="galaxy galaxy-spin-1" style={{
          width: '600px',
          height: '600px',
          top: '30%',
          left: '20%',
          opacity: 0.1,
          background: 'radial-gradient(circle, rgba(147,197,253,0.1) 0%, transparent 70%)',
        }} />
        
        <div className="galaxy galaxy-spin-2" style={{
          width: '500px',
          height: '500px',
          bottom: '20%',
          right: '15%',
          opacity: 0.08,
          background: 'radial-gradient(circle, rgba(103,232,249,0.1) 0%, transparent 70%)',
        }} />
      </div>
      
      {/* Content Overlay */}
      {/* Content Overlay */}
<div className="relative z-10 w-full h-full flex items-center">
  <div 
    className="hero-text-wrapper" 
    style={{
      position: 'absolute',
      left: '8%',  // Adjust this value to move text
      top: '40%',
      transform: 'translateY(-50%)',
      margin: 0,
      padding: 0,
      zIndex: 10
    }}
  >
    <h1 className='text-5xl editors-bold text-cyan letter-shade '>
     HealthTech Frontiers<span className='editors-itallic'> 2026</span>
    </h1>
    
    <p  className='editors-itallic text-white'>
   
    </p>
  </div>

  <div>
    <div 
    className="hero-text-wrapper" 
    style={{
      position: 'absolute',
      left: '8%',  // Adjust this value to move text
      top: '65%',
      transform: 'translateY(-50%)',
      margin: 0,
      padding: 0,
      zIndex: 10
    }} >
     <p  className='editors-itallic text-white'>
       “Transforming Healthcare Through Innovation & Technology”
    </p>
  </div>
  </div>
</div>
      
      {/* Floating DNA Elements */}
      <div className="absolute top-20 md:top-30 lg:top-10 left-4 sm:left-10 z-1  floating-dna-1">
  <div className="w-90 h-90  backdrop-blur-md rounded 
              border border-blue-200 overflow-hidden flex items-center justify-center">
    <img 
      src={steth} 
      alt="" 
      className="w-full h-full object-cover"
    />
  </div>
</div>

      
      <div className="absolute  top-130   right-5 md:top-180 lg:top-110 sm:right-8 z-1 floating-dna-2">
        <div className="w-50 h-50  backdrop-blur-2xl  
                     border border-blue-200 flex items-center justify-center">
          <span className=""><img src={globe} alt="" /></span>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        /* DNA Background Animation - Slow Rotation */
        .dna-bg-animated {
          animation: dna-rotate 120s linear infinite;
        }
        
        @keyframes dna-rotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.02);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        
        /* Star Animations */
        @keyframes star-twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        @keyframes star-twinkle-fast {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes star-twinkle-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        /* Galaxy Rotations */
        @keyframes galaxy-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .galaxy-spin-1 {
          animation: galaxy-spin 80s linear infinite;
        }
        
        .galaxy-spin-2 {
          animation: galaxy-spin 100s linear infinite reverse;
        }
        
        /* Floating Elements */
        @keyframes float-x {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          33% {
            transform: translateX(10px) translateY(-8px) rotate(2deg);
          }
          66% {
            transform: translateX(-5px) translateY(5px) rotate(-1deg);
          }
        }
        
        @keyframes float-y {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) translateX(5px) rotate(3deg);
          }
        }
        
        .floating-dna-1 {
          animation: float-x 8s ease-in-out infinite;
        }
        
        .floating-dna-2 {
          animation: float-y 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        /* Ensure animations are applied */
        .star-twinkle {
          animation: star-twinkle 3s ease-in-out infinite;
        }
        
        .star-twinkle-fast {
          animation: star-twinkle-fast 1.5s ease-in-out infinite;
        }
        
        .star-twinkle-slow {
          animation: star-twinkle-slow 6s ease-in-out infinite;
        }
        
        /* Ensure stars don't interfere with clicks */
        .star, .galaxy {
          pointer-events: none;
        }
        
        /* Prevent horizontal overflow */
        body, html {
          overflow-x: hidden;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .dna-bg-animated {
            background-size: 90% auto;
            animation: dna-rotate-mobile 100s linear infinite;
          }
          
          @keyframes dna-rotate-mobile {
            0% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(180deg) scale(1.03);
            }
            100% {
              transform: rotate(360deg) scale(1);
            }
          }
        }
        
        @media (min-width: 1024px) {
          .dna-bg-animated {
            background-size: 70% auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;