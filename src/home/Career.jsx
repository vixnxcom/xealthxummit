import React from 'react';

import AnimatedCircleLead from './AnimatedCircleLead';


const Career = () => {
  return (
    <div className="App">
<div class="relative  text-white mb-5 bg-tech   max-w-[470px] corner-card">
      
      <AnimatedCircleLead
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  </div>
   <p className='text-[20px] text-white flex flex-col   editors-reg '>
            <span className='text-[16px] editors-reg py-4 text-white'>02.</span>
    Health professionals </p>

  <div class="corners"></div>
</div>


    
  );
}

export default Career;