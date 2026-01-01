import React, { useEffect, useState } from 'react';
import { dna, globe, med, steth } from '../assets';
import styles from '../style';
import Button from './Button';
import TypeWriterText from '../faq/TypeWriterText';

const Hero = () => {


  
  return (
    <div className=" w-full "> {/* Changed from w-[100vw] to w-full */}
     
        

  <div className='px-3'>
    <TypeWriterText>
      <h1 className='text-5xl editors-bold font-bold text-white  letter-shade '>
       HEALTHTECH <br /> FRONTIERS <br /><span className='editors-itallic'> 2026</span>
      </h1>
    </TypeWriterText>
    
  </div>

  <div className='px-3'>
  
   <TypeWriterText>
     <p  className='editors-reg text-white letter-shade text-[20px] mt-24 mb-10 tracking-widest'>
       Transforming Healthcare Through Innovation & Technology
    </p>
    </TypeWriterText>
  </div> 

  <div className='shadow-lg' >
    <TypeWriterText>
  <Button />
    </TypeWriterText>
  
  </div>
 
      
    

   
     
    </div>
  );
};

export default Hero;