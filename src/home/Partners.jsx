import React from 'react';
import { africa, image, medl } from '../assets';

const Partners = () => {
  const items = [...Array(4)];

  return (
    <section>
      <div className="flex flex-col items-start px-2 mb-12 space-y-6">

     

        {/* Bottom line: slides left */}
        <div className="slider-container">
          <div className="animate-slidee-right flex">
            {items.map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-8">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white"></div>
                <p className="editors-reg text-white text-[28px] whitespace-nowrap">
                 Medlenna
                </p>
                <img src={medl} alt="" className="w-[300px] h-[120px] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
        {/* Bottom line: slides left */}
        <div className="slider-container">
          <div className="animate-slidee-left flex">
            {items.map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-8">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white"></div>
                <p className="editors-reg text-white text-[28px] whitespace-nowrap">
                African Achievers Awards
                </p>
                <img src={africa} alt="" className="w-[100px] h-[60px] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
