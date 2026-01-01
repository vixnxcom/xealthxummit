import React from 'react';

import AnimatedCircleInspire from './AnimatedCircleInspire';


const Inspire = () => {
  return (
       <div className="App">
<div class="relative  text-white mb-5 bg-tech   max-w-[470px] corner-card">
      
      <AnimatedCircleInspire
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  
  </div>
  <div class="corners">
     <p className='text-[20px] text-white  flex flex-col   editors-reg '>
            <span className='text-[16px] editors-thin py-4 text-white'>04.</span>
Start-Ups </p>
  </div>


    </div>
  );
}

export default Inspire;