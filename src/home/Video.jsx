import React from 'react';
import { useInView } from 'react-intersection-observer';
import { health } from '../assets';

const Video = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden mx-auto relative md:h-[550px] h-[495px]" // half of desired video height
    >
      {inView && (
        <video
          src={health}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto md:h-[600px] object-contain md:object-cover"
          
          style={{ marginBottom: '-50%' }} // move video up to crop bottom half
          
        />
      )}
    </div>
  );
};

export default Video;
