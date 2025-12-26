import React from 'react';

import AnimatedCircleLife from './AnimatedCircleLife';


const Life = () => {
  return (
      <div className="App">
<div class="relative bg-black text-white   max-w-[470px] corner-card">
      
      <AnimatedCircleLife
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  <p className='text-[32px] text-blue-200 flex flex-col px-6  editors-reg mb-5'>
           <span className='text-[16px] mb-2 editors-thin  text-white'>05.</span>
  
   Investors </p>

  <div class="corners"></div>
</div>


    </div>
  );
}

export default Life;