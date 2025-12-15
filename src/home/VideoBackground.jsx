// components/VideoBackground.jsx
import React, { useRef, useEffect } from 'react';


const VideoBackground = ({ videoSrc, children, className = '' }) => {
  const videoRef = useRef(null);
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to play video
    const playVideo = async () => {
      try {
        await video.play();
        console.log('Video autoplay successful');
      } catch (error) {
        console.log('Autoplay blocked, will play on user interaction');
        
        // Show play button overlay if video is blocked
        if (!hasInteractedRef.current) {
          const overlay = document.createElement('div');
          overlay.className = 'play-overlay';
          overlay.innerHTML = '▶ Click to play video';
          overlay.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            cursor: pointer;
            z-index: 10;
            font-family: Arial, sans-serif;
          `;
          overlay.onclick = () => {
            video.play();
            overlay.remove();
            hasInteractedRef.current = true;
          };
          video.parentNode.appendChild(overlay);
        }
      }
    };

    // Try to play immediately when component mounts
    playVideo();

    // If video is paused (autoplay blocked), try again when it becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && video.paused && !hasInteractedRef.current) {
            playVideo();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    // Fallback: Play on any user interaction with the page
    const handleUserInteraction = () => {
      if (video.paused && !hasInteractedRef.current) {
        playVideo();
        hasInteractedRef.current = true;
      }
    };

    // Add event listeners for user interaction
    const events = ['click', 'touchstart', 'scroll', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    // Cleanup
    return () => {
      observer.disconnect();
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  return (
    <div className={`video-bg-container ${className}`}>
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // These attributes help with autoplay
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Add WebM format for better compatibility */}
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
      </video>
      
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;