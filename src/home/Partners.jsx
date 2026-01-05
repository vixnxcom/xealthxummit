import React from 'react';
import { africa, image, medl } from '../assets';
import TypeWriterText from '../faq/TypeWriterText';

const Partners = () => {
  return (
    <section>
      <div className="flex flex-col px-2 mb-12">

        {/* Partner 1 */}
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex">
            <div className="flex gap-4 px-3 mt-5">

              <div className="flex text-white flex-row">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white mr-3 mt-1"></div>

                <TypeWriterText>
                  <p className="editors-reg text-white text-[20px]">
                    Medlenna
                  </p>
                </TypeWriterText>
              </div>

              <TypeWriterText>
                <img
                  src={medl}
                  alt=""
                  className="w-[160px] h-[40px] flex-shrink-0"
                />
              </TypeWriterText>

            </div>
          </div>
        </div>

        {/* Partner 2 */}
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex">
            <div className="flex gap-4 px-3 mt-10">

              <div className="flex text-white flex-row">
                <div className="h-[20px] w-[20px] rounded-full flex-shrink-0 bg-white mr-3 mt-1"></div>

                <TypeWriterText>
                  <p className="editors-reg text-white text-[20px]">
                   The African <br /> Achievers Awards
                  </p>
                </TypeWriterText>
              </div>

              <TypeWriterText>
                <img
                  src={africa}
                  alt=""
                  className="w-[100px] h-[60px] flex-shrink-0"
                />
              </TypeWriterText>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
