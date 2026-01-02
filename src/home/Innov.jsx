import React from 'react'
import AnimatedCircleInov from './AnimatedCircleInov';
import TypeWriterText from '../faq/TypeWriterText';

const Innov = () => {
   return (
        <div className="App">
<div class="relative  text-white mb-5 bg-tech    max-w-[470px] corner-card">
      
      <AnimatedCircleInov
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  </div>
 <div class="corners">
  
    <TypeWriterText>
     <p className='text-[20px] text-white mx-1 flex flex-col  editors-reg '>
          
    Innovators </p>
     </TypeWriterText>
  </div>

   
    </div>
  );
}

export default Innov
