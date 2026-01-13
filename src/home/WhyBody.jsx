import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'

const WhyBody = () => {
  return (
    

      <div className='max-w-5xl w-full mb-10 mt-5'>

      <TypeWriterText >
            <p className="text-[24px] text-white py-4  mt-2 editors-bold ">
              Why HealthTech Frontiers 2026?
            </p>
        </TypeWriterText>

        <ul className="editors-thin py-2 text-[20px] text-white flex flex-col ">
            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
           Bridging healthcare, technology, and policy
          </li>
          </TypeWriterText>

          <TypeWriterText>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
           Showcasing investable startups
          </li>
          </TypeWriterText>

          <TypeWriterText>
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
            Recognising national excellence in health innovation
          </li>
          </TypeWriterText>

            <TypeWriterText>
          <li className="py-1 tracking-widest flex items-center gap-2 mb-5">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
            Creating real partnerships, not just conversations
          </li>
            </TypeWriterText>
        </ul>
      </div>
   
  )
}

export default WhyBody