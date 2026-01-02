import React from 'react';

import AnimatedCircleInspire from './AnimatedCircleInspire';
import TypeWriterText from '../faq/TypeWriterText';


const Inspire = () => {
  return (

   <div className="App border border-white bg-cyan rounded-[16px] h-[400px] md:h-[600px]">
<div class="relative  text-white mb-5 bg-tech   max-w-[470px] corner-card">

      <AnimatedCircleInspire
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
     
 </div>
  <div class="corners">
    <TypeWriterText>
     <p className="text-[24px] text-blue mt-2 px-3 editors-bold ">
        Startups & innovators
            </p>
     </TypeWriterText>
  </div>

  <ul className="editors-thin py-2 text-[20px] text-black flex flex-col px-3">
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
          Curated, Pitch-ready companies
          </li>
          </TypeWriterText>
       
          </ul>

   
    </div>
  );
}

export default Inspire;