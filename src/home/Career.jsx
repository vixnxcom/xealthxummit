import React from 'react';

import AnimatedCircleLead from './AnimatedCircleLead';


const Career = () => {
  return (
    <div className="App">
<div class="relative bg-black text-white max-w-[470px] corner-card">
      
      <AnimatedCircleLead
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  
   <p className='text-[32px] text-blue-200 flex flex-col px-6  editors-reg mb-5'>
            <span className='text-[20px] editors-thin  text-white'>02.</span>

    Health professionals </p>

  <div class="corners"></div>
</div>


    </div>
  );
}

export default Career;