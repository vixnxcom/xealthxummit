import React from 'react';

import AnimatedCircleGoal from './AnimatedCircleGoal';


const Goal = () => {
  return (
       <div className="App">
<div class="relative bg-black text-white   max-w-[470px] corner-card">
      
      <AnimatedCircleGoal
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  
   <p className='text-[32px] text-blue-200 flex flex-col px-6  editors-reg '>
            <span className='text-[20px] editors-thin py-4 text-white'>03.</span>
   Government & NGOs </p>

  <div class="corners"></div>
</div>


    </div>
  );
}

export default Goal;