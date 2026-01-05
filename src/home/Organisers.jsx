import React from 'react';
import { africa, image, medl } from '../assets';
import TypeWriterText from '../faq/TypeWriterText';

const Organisers = () => {
 

  return (
    <section>
      <div className="flex   px-3 mb-12  space-y-6">

        {/* Top line: slides right */}
           <div className="max-w-5xl w-full mx-auto">
          <div className=" flex  gap-4">
          
                 <div className=" flex text-white flex-row">
                         <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white mr-3 mt-2"></div>
                         <TypeWriterText>
                         <p  className='editors-reg text-white text-[20px]'>PrimeBridge <br /> Health Solutions</p>
                           </TypeWriterText>
                             </div> 

                             <TypeWriterText>
                             <img src={image} alt="" className="w-[130px] h-[80px] flex-shrink-0 " />
                            
                             </TypeWriterText>
                         
                             
          
          </div>
        </div>

      

      </div>
    </section>
  );
};

export default Organisers;
