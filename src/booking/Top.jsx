import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'


const Top = () => {
  return (
    <div className='max-w-5xl w-full mb-10 '>
    <div className='flex flex-col  '>
      <div className='mx-auto rounded-[16px]    shadow-md'>
    < ul className="  py-2 text-white
    flex flex-col  text-[16px] editors-reg px-3 py-4 ">

            <TypeWriterText>
               <li >
      HealthTech Frontiers 2026 is a one-day flagship healthtech
    event featuring;
    </li>
            </TypeWriterText>
        </ul>

      < ul className="w-full  px-3 py-2 text-white 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
           HealthTech Innovation Summit
          </li>
        
          </TypeWriterText>
            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
           Startup Pitch Finals
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
            National HealthTech Excellence Awards
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-white shrink-0 mx-1"></span>
            Networking & Innovation Exhibition
          </li>
        
          </TypeWriterText>
         </ul>
    </div>
    </div>
    </div>
  )
}

export default Top
