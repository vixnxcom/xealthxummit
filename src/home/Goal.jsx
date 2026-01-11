import React from 'react';

import AnimatedCircleGoal from './AnimatedCircleGoal';
import TypeWriterText from '../faq/TypeWriterText';


const Goal = () => {
  return (

      <div className="App border border-blue-400 bg-cyan rounded-[16px] shadow-lg h-[480px] md:h-[600px]">
<div class="relative  text-white mb-5 bg-ngo h-[240px]">

      {/* <AnimatedCircleGoal
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
      */}
 </div>
  <div class="corners">
    <TypeWriterText>
     <p className="text-[24px] text-blue mt-2 px-3 editors-bold ">
          Government & NGOs
            </p>
     </TypeWriterText>
  </div>

  <ul className="editors-thin py-2 text-[20px] text-black flex flex-col px-3">
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Health policy
          </li>
          </TypeWriterText>
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
          Innovation bodies
          </li>
          </TypeWriterText>
       
          </ul>

   
    </div>
  );
}

export default Goal;