import React, { useEffect, useState } from 'react';
import { dna, globe, med, steth } from '../assets';
import styles from '../style';
import Button from './Button';
import TypeWriterText from '../faq/TypeWriterText';

const Hero = () => {


  
  return (
    <div className=" w-full md:mx-auto"> {/* Changed from w-[100vw] to w-full */}
     
        

  <div className='px-3 absolute top-32 md:px-20'>
    <TypeWriterText>
      <h1 className='text-[12vw] md:text-[56px] editors-bold font-bold text-white  letter-shade '>
       HEALTHTECH <br /> FRONTIERS <br /><span className='editors-itallic'> 2026</span>
      </h1>
    </TypeWriterText>
    
  </div>

  <div className='px-3 mt-20   md:px-20 max-w-[470px] md:max-w-[800px] md:mt-40'>
  
   <TypeWriterText>
     <p  className='editors-reg text-white letter-shade text-[6vw] mt-20 md:text-[32px] 
      mb-10 tracking-widest'>
       Transforming Healthcare Through Innovation & Technology
    </p>
    </TypeWriterText>
  </div> 
  <div className='shadow-lg mt-2 button md:mt-20' >
    <TypeWriterText>
  <Button  />
    </TypeWriterText>
  
  </div> 
 
      
    

   
     
    </div>
  );
};

export default Hero;