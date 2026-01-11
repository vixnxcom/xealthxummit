import React from 'react';

import AnimatedCircleLead from './AnimatedCircleLead';
import TypeWriterText from '../faq/TypeWriterText';


const Career = () => {
  return (
    <div className="App">
<div class="relative  text-white mb-5 bg-invest   ">
      
      <AnimatedCircleLead
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  </div>
  

     <TypeWriterText>
     <p className='text-[20px] text-white mx-1  flex flex-col  editors-reg '>
          
   Health professionals </p>
     </TypeWriterText>

  <div class="corners"></div>
</div>


    
  );
}

export default Career;