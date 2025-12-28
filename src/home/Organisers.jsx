import React from 'react';
import { image } from '../assets';

const Organisers = () => {
  return (
    <section className=" mt-5">
      <div className="flex flex-col items-start px-4 mb-12">
       

        <div className="w-full overflow-hidden py-4">
          <div className="flex animate-slide">
            {/* Repeat the content multiple times for seamless animation */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-4 px-8">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-black"></div>
                <p className="editors-reg text-blue text-[32px] whitespace-nowrap">
                  PrimeBridge Health <span className='text-purple'>Solutions</span> 
                </p>
                <img src={image} alt="" className="w-[100px] h-[40px] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organisers;