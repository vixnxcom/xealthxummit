import React from 'react';


import AnimatedCircleMind from './AnimatedCircleMind';


const Mind = () => {
  return (
    <div className="App">
<div class="relative bg-black text-white mb-5   max-w-[470px] corner-card">

      <AnimatedCircleMind
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
      <p className='text-[32px] text-blue-200 flex flex-col px-6  editors-reg mb-5'>
            <span className='text-[20px] editors-thin  text-white'>01.</span>
 
     General Public </p>

  <div class="corners"></div>
    </div>
    </div>
  );
}

export default Mind;