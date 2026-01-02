import React from 'react';
import { image, medl } from '../assets';

const SecondOrganisers = () => {
  return (
    <section className=" ">
      <div className="flex flex-col items-start px-2 mb-12">
       

        <div className="w-full bg-black overflow-hidden py-4">
          <div className="flex animate-slidee">
            {/* Repeat the content multiple times for seamless animation */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-8">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white"></div>
                <p className="editors-reg text-white text-[32px] whitespace-nowrap">
               Medlenna
                </p>
                <img src={medl} alt="" className="w-[100px] h-[40px] flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondOrganisers;