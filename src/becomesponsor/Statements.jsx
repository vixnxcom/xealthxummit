import React from 'react'

import TypeWriterText from '../faq/TypeWriterText'


const Statements = () => {
  return (
    <div className='max-w-5xl w-full mb-10 md:mx-auto '>
    <div className='flex flex-col  '>
      <div className='mx-auto'>
   

     < ul className="  py-2 text-white
    flex flex-col  text-[20px] editors-bold  py-4 ">

            <TypeWriterText>
               <li className='mt-2'>
     Executive Statement -  HealthTech Frontiers 2026
    </li>
            </TypeWriterText>
        </ul>

      < ul className="w-full  py-2 text-white 
    flex flex-col text-[16px] editors-reg  py-2 ">
  <TypeWriterText>
          <li className="py-1 tracking-widest mt-2 flex items-start gap-2 text-shade leading-relaxed">
            <span className="w-3 h-3 bg-white shrink-0 mt-2 "></span>
            <p className='text-justify hyphens-auto md:w-[800px] mr-3'>
            Partnering with HealthTech Frontiers 2026 positions your organisation at the centre of Africa’s healthcare
 transformation.
 Engage senior decision-makers, innovators, investors, and policymakers in one of Africa’s fastest-growing health and
 technology markets.
 </p>
          </li>
        
          </TypeWriterText>
            

           
         </ul>
    </div>
    </div>
    </div>
  )
}

export default Statements

