import React from 'react'
import AnimatedCircleInov from './AnimatedCircleInov';

const Innov = () => {
   return (
        <div className="App">
<div class="relative bg-black text-white max-w-[470px] corner-card">
      
      <AnimatedCircleInov
        targetPercentage={100}
        size="lg"
        label="Completion"
        showResetButton={true}
      />
  
  
   <p className='text-[32px] text-blue-200 flex flex-col px-6  editors-reg mb-5'>
            <span className='text-[20px] editors-thin  text-white'>06.</span>

   Innovators </p>

  <div class="corners"></div>
</div>


    </div>
  );
}

export default Innov
