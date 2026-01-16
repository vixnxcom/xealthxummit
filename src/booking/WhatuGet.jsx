import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'
import { eye } from '../assets'

const WhatuGet = () => {
  return (
       
      <div className="w-full   mt-5">
      <div className="max-w-5xl mx-auto  ">

        <div>

   <div className="bg-white  rounded-[16px]  shadow-md mt-5">
  <div className="">
     {/* <div className="mt-2 mb-4 flex flex-row rounded-[16px] items-center h-[200px] bg-black"> */}
      <div className="flex flex-col items-start  rounded-[16px] bg-black h-[80px]">
          <h1
          
            className="editors-bold p-6  text-[20px]  tracking-widest mx-auto  text-white text-left">
        What’s Included
      </h1>
  
    
    </div> 
    < ul className="w-full bg-white shadow-md  rounded-b-[16px] py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Full access to summit sessions
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Networking & exhibition
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Awards ceremony
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Event materials & post-event report
          </li>
        
          </TypeWriterText>
            <TypeWriterText >
          <li className="py-1 tracking-widest mt-5 mb-5 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Certificate of attendance
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

export default WhatuGet