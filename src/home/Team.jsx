import React from 'react'
import { abdul, achese, africa, forum, mang, medl, ola } from '../assets'
import TypeWriterText from '../faq/TypeWriterText'

const Team = () => {
  return (
    <section className="mb-10 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Dr. Ahmed Abdulkareem */}
          <div className="flex flex-col shadow-md mt-10 border border-gray-200 
            rounded-[16px] items-center text-center gap-4">
            <TypeWriterText>
              <img
                src={abdul}
                alt="Dr. Ahmed Abdulkareem"
                className="md:w-[280px]
                 rounded-t-[16px] mt-3 lg:mt-0 mx-auto justify-center w-[500px] bg-brain    h-[450px]
                  md:h-[400px] object-cover"
              />
            </TypeWriterText>
            <div className="w-full bg-black">
              <div className="lg:h-10">
                <TypeWriterText>
                  <p className="editors-bold text-black mt-2 text-[20px] text-white">
                    Dr. Ahmed Abdulkareem
                  </p>
                </TypeWriterText>
              </div>
              <TypeWriterText>
                <p className="editors-reg text-black text-[16px] text-white mb-4">
                  CEO Primebridge Health
                </p>
              </TypeWriterText>
            </div>
          </div>

          {/* Dr. Achese Inimgba */}
          <div className="flex flex-col shadow-md mt-10 border border-gray-200 
            rounded-[16px] items-center text-center gap-4">
            <TypeWriterText>
              <img
                src={achese}
                alt="Dr. Achese Inimgba"
                className="md:w-[280px] rounded-t-[16px] mt-3 lg:mt-0 mx-auto bg-brain justify-center w-[500px] 
                h-[450px] object-cover md:h-[400px]"
            
              />
            </TypeWriterText>
            <div className="w-full bg-black">
              <div className="lg:h-10">
                <TypeWriterText>
                  <p className="editors-bold text-black mt-2 text-[20px] text-white">
                    Dr. Achese Inimgba
                  </p>
                </TypeWriterText>
              </div>
              <TypeWriterText>
                <p className="editors-reg text-black text-[16px] text-white mb-4">
                  CTO Primebridge Health
                </p>
              </TypeWriterText>
            </div>
          </div>

          {/* Dr. Olayemi Abdulrahman */}
          <div className="flex flex-col shadow-md mt-10 border border-gray-200 
            rounded-[16px] items-center text-center gap-4">
            <TypeWriterText>
              <img
                src={ola}
                alt="Dr. Olayemi Abdulrahman"
                className="md:w-[280px] rounded-t-[16px]  mt-3 lg:mt-0 mx-auto justify-center bg-brain
                 h-[380px] object-cover md:h-[400px]"
              />
            </TypeWriterText>
            
            <div className="w-full bg-black">
              <div className="lg:h-10">
                <TypeWriterText>
                  <p className="editors-bold text-black mt-2 text-[20px] text-white">
                    Dr. Olayemi Abdulrahman
                  </p>
                </TypeWriterText>
              </div>
              <TypeWriterText>
                <p className="editors-reg text-black text-[16px] text-white mb-4">
                  COO Primebridge Health
                </p>
              </TypeWriterText>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Team
