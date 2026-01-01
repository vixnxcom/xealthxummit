import React from 'react';


import AnimatedCircleMind from './AnimatedCircleMind';


const Mind = () => {
  return (
    <div className="App">
<div class="relative  text-white mb-5 bg-tech   max-w-[470px] corner-card">

      <AnimatedCircleMind
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
     
 </div>
  <div class="corners">
     <p className='text-[20px] text-white  flex flex-col  editors-reg '>
            <span className='text-[16px] editors-reg py-4 text-white'>01.</span>
     General Public </p>
  </div>

   
    </div>
  );
}

export default Mind;