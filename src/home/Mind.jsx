import React from 'react';


import AnimatedCircleMind from './AnimatedCircleMind';
import TypeWriterText from '../faq/TypeWriterText';


const Mind = () => {
  return (
    <div className="App border border-white bg-cyan rounded-[16px] h-[400px] md:h-[600px]">
<div class="relative  text-white mb-5 bg-tech   max-w-[470px] corner-card">

      <AnimatedCircleMind
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
     
 </div>
  <div class="corners">
    <TypeWriterText>
     <p className="text-[24px] text-blue mt-2 px-3 editors-bold ">
             Health professionals
            </p>
     </TypeWriterText>
  </div>

  <ul className="editors-thin py-2 text-[20px] text-black flex flex-col px-3">
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Senior clinicians
          </li>
          </TypeWriterText>
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Health innovators
          </li>
          </TypeWriterText>
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Private health care
          </li>
          </TypeWriterText>
          </ul>

   
    </div>
  );
}

export default Mind;