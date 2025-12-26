import React from 'react';

import AnimatedCircleInspire from './AnimatedCircleInspire';


const Inspire = () => {
  return (
       <div className="App">
<div class="relative bg-black text-white max-w-[470px] corner-card">
      
      <AnimatedCircleInspire
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  
  <p className='text-[32px] text-blue-200 flex flex-col px-6  editors-reg mb-5'>
           <span className='text-[16px] mb-2 editors-thin  text-white'>04.</span>
 
    Startups </p>

  <div class="corners"></div>
</div>


    </div>
  );
}

export default Inspire;