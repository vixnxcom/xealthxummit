import React from 'react'
import { abdul, achese, africa, forum, mang, medl, ola } from '../assets'
import TypeWriterText from '../faq/TypeWriterText'

const Team = () => {
  return (
    <section className="mb-10 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Dr. Ahmed Abdulkareem */}
          <div className="flex flex-row shadow-md mt-5 lg:mt-10 bg-blue 
            rounded-[16px] items-center text-center gap-2">
                <div className='mx-2 lg:mt-3'>
            <TypeWriterText>
              <img
                src={abdul}
                alt="Dr. Ahmed Abdulkareem"
                className="lg:w-[280px]
                 rounded-[16px] mt-3 mb-3 lg:mt-0 mx-auto justify-center w-[200px] bg-brain
                    h-[200px]
                    object-cover"
              />
            </TypeWriterText>
            </div>
            <div className="flex flex-col text-start">
              <div className="">
                <TypeWriterText>
                  <p className="editors-bold  text-black mt-2 text-[20px] text-white">
                    Dr. <br /> Ahmed <br /> Abdulkareem
                  </p>
                </TypeWriterText>
              </div>
              <TypeWriterText>
                <p className="editors-reg text-cyan text-[16px] text-white mt-4">
                  CEO <br /> PrimeBridge Health Solutions
                </p>
              </TypeWriterText>
            </div>
          </div>

          {/* Dr. Achese Inimgba */}
          <div className="flex flex-row shadow-md mt-5 lg:mt-10 bg-blue 
            rounded-[16px] items-center text-center gap-2">
               <div className='mx-2 lg:mt-3'>
            <TypeWriterText>
              <img
                src={achese}
                alt="Dr. Achese Inimgba"
                className="lg:w-[280px]
                 rounded-[16px] mt-3 mb-3 lg:mt-0 mx-auto justify-center w-[200px] bg-brain
                    h-[200px]
                  lg:h-[200px] object-cover"
              />
            </TypeWriterText>
            </div>
            <div className="flex flex-col text-start">
              <div className="">
                <TypeWriterText>
                  <p className="editors-bold  text-black mt-2 text-[20px] text-white">
                    Dr. <br /> Achese <br /> Inimgba
                  </p>
                </TypeWriterText>
              </div>
              <TypeWriterText>
                <p className="editors-reg text-cyan text-[16px] text-white mt-4">
                  CTO <br /> PrimeBridge Health Solutions
                </p>
              </TypeWriterText>
            </div>
          </div>

          {/* Dr. Olayemi Abdulrahman */}
          <div className="flex flex-row shadow-md mt-5 lg:mt-10 bg-blue 
            rounded-[16px] items-center text-center gap-2">
               <div className='mx-2 lg:mt-3'>
            <TypeWriterText>
              <img
                src={ola}
                alt="Dr. Olayemi Abdulrahman"
                className="lg:w-[280px]
                 rounded-[16px] mt-3 mb-3 lg:mt-0 mx-auto justify-center w-[200px] bg-brain
                    h-[200px]
                  lg:h-[200px] object-cover"
              />
            </TypeWriterText>
            </div>
            <div className="flex flex-col text-start">
              <div className="">
                <TypeWriterText>
                  <p className="editors-bold  text-black mt-2 text-[20px] text-white">
                    Dr. <br /> Olayemi <br /> Abdulrahman
                  </p>
                </TypeWriterText>
              </div>
              <TypeWriterText>
                <p className="editors-reg text-cyan text-[16px] text-white mt-4">
                  COO <br /> PrimeBridge Health Solutions
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