import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'
import { eye } from '../assets'

const SponsorOptions = () => {
  return (
       
      <div className="w-full   mt-5">
      <div className="max-w-5xl mx-auto  ">

        <div>

   <div className="bg-white    mt-5">
  <div className="">
     {/* <div className="mt-2 mb-4 flex flex-row rounded-[16px] items-center h-[200px] bg-black"> */}
      <div className="flex flex-col items-start ">
          <h1
          
            className="editors-bold px-3  text-[20px] py-2 tracking-widest md:mx-auto  text-black text-left">
       Sponsorship Options
      </h1>
  
    
    </div> 
    < ul className="w-full bg-white shadow-lg  rounded-b-[16px] py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Platinum Partner
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Gold Partner
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Innovation Partner
          </li>
        
          </TypeWriterText>

          
            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 mb-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
             Awards Partner
          </li>
        
          </TypeWriterText>
          </ul>
   
  </div>
</div>


      

        
      </div>
      </div>
      </div>
  )
}

export default SponsorOptions