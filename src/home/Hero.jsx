import React from 'react';
import { ar } from '../assets';
import Button from './Button';
import TypeWriterText from '../faq/TypeWriterText';

const Hero = () => {
  return (
    <div className="w-full relative  flex flex-col justify-start
     md:justify-center px-3 sm:px-6 md:px-8 lg:px-20">


      <div className="mt-2 flex flex-row xs:flex-row items-start xs:items-center gap-4 md:gap-6">
        <div className='text-white '>
          <TypeWriterText>
                <img 
    src={ar} 
    alt="AR Technology" 
    className="w-24 xs:w-14 sm:w-16 md:w-20 h-auto " 
  />     
          <p className='
            editors-reg 
            text-[4vw] md:text-[24px]
             
          '>
           Owned and Organised by{' '}
           <div className="flex items-center flex-row">
  <span className='editors-bold text-cyan text-[20px] md:text-[25px]'>
    PrimeBridge Health Solutions
  </span>

</div>
   
          </p>
          </TypeWriterText>
        </div>
     
      </div>
      {/* Main Title - Fixed responsiveness */}
      <div className="mt-10 md:mt-0 md:mb-8">
        <TypeWriterText>
          <h1 className='
            text-[12vw] 
              md:text-[60px]
            editors-bold
           
            text-white 
         md:leading-[80px]
           
           
          '>
            HEALTHTECH<br />
            FRONTIERS<br />
            <span className='editors-itallic text-cyan'>2026</span>
          </h1>
        </TypeWriterText>
      </div>

      {/* Subtitle - Fixed responsiveness */}
      <div className="mt-6 md:mt-0  md:max-w-5xl">
        <TypeWriterText >
          <p className='
            editors-reg 
            text-white 
           
            text-[4vw] md:text-[24px]
        
            leading-[32px]
            tracking-wide
          '>
            Transforming Healthcare Through Innovation & Technology
          </p>
        </TypeWriterText>
      </div>

      {/* Organizer Section - Fixed alignment */}
      

      {/* Button Section */}
      <div className="mt-5 md:mt-0 ">
        <div className="inline-block w-full xs:w-auto">
          <TypeWriterText delay={1500}>
            <Button />
          </TypeWriterText>
        </div>
      </div>

    </div>
  );
};

export default Hero;