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
   <div className="h-[400px] flex  items-center ">
        <TypeWriterText>
          <h1 className="text-[12vw] px-4 mt-10 md:text-[56px] md:px-12 editors-bold font-bold text-white
          mb-10 letter-shade">
            HEALTHTECH <br />
            FRONTIERS <br />
            <span className="text-cyan editors-itallic">2026</span>
          </h1>
        </TypeWriterText>
        </div>
  )
}
export default SpeechEffect
