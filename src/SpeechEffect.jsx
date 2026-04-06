import React from 'react'
import { ahmed, big, lab, network, right,  } from './assets'
import TypeWriterText from './faq/TypeWriterText'

const SpeechEffect = () => {
  return (
//     <div className='w-full h-[400px] overflow-hidden bg-black'>
//    <div className=" xl:mx-auto">
//   <img src={network} className="w-full" />

// </div>

// </div>
   <div className="min-h-[400px]  items-center px-3 sm:px-6 md:px-8 lg:px-20  ">
        <TypeWriterText>
          <h1 className="text-[12vw]  mt-12 md:text-[56px] md:px-12 editors-bold font-bold text-white
          mb-10 letter-shade">
            HEALTHTECH <br />
            FRONTIERS <br />
            <span className="text-cyan editors-itallic">2026</span>
          </h1>
        </TypeWriterText>
         <div className=" md:mt-0  md:px-12  md:max-w-5xl">
                <TypeWriterText >
                  <p className='
                    editors-reg 
                    text-white 
                   
                    text-[4vw] md:text-[24px]
                
                    leading-[32px]
                    sm:leading-[40px]
                    tracking-wide
                  '>
                    Transforming Healthcare Through Innovation & Technology
                  </p>
                </TypeWriterText>
              </div>
        </div>
  )
}
export default SpeechEffect
