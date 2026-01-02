import React from 'react';
import { africa, image, medl } from '../assets';

const Organisers = () => {
  const items = [...Array(4)];

  return (
    <section>
      <div className="flex flex-col items-start px-2 mb-12 space-y-6">

        {/* Top line: slides right */}
        <div className="slider-container">
          <div className="animate-slidee-right flex">
            {items.map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-8">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white"></div>
                <p className="editors-reg text-white text-[28px] whitespace-nowrap">
                  PrimeBridge Health Solutions
                </p>
                <img src={image} alt="" className="w-[130px] h-[80px] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

      

      </div>
    </section>
  );
};

export default Organisers;
