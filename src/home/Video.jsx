import { useInView } from 'react-intersection-observer';
import { health } from '../assets';

const Video = () => {


  return (
   <div>
   <video 
      src={health} 
      autoPlay 
      loop 
      muted 
      playsInline
      className='w-full md:h-[600px] md:w-[100vw]  mx-auto object-contain md:object-cover' 
   />
</div>
  );
};

export default Video;