import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'
import StartUpButton from '../forms/StartUpButton'
import IndustryButton from '../forms/IndustryButton'
import GeneralButton from '../forms/GeneralButton'

const TicketType = () => {
  return (
 
       
      <div className="w-full   mt-5">
      <div className="max-w-5xl mx-auto  ">

        <div>
          
   <div className="">
  <div className="">
     {/* <div className="mt-2 mb-4 flex flex-row rounded-[16px] items-center h-[200px] bg-black"> */}
      <div className="flex flex-col items-center  rounded-[16px] h-[80px] bg-black ">
          <h1
          
            className="editors-bold  p-6 text-[20px] tracking-widest mx-auto  text-white">
      General Admission
      </h1>
  
    
    </div> 
    < ul className="w-full bg-white shadow-lg  rounded-b-[16px] py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
             Full-day access to all sessions
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Exhibition & networking access
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex mb-2 items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Awards ceremony attendance
          </li>
        
          </TypeWriterText>

          <GeneralButton />
          </ul>
   
  </div>

  
  <div className="mt-10">
     {/* <div className="mt-2 mb-4 flex flex-row rounded-[16px] items-center h-[200px] bg-black"> */}
      <div className="flex flex-col items-center  rounded-[16px] bg-black h-[80px]">
          <h1
          
            className="editors-bold  p-3 mt-2 text-[20px] tracking-widest mx-auto  text-white text-center">
      Professional / Industry Pass
      </h1>
  
    
    </div> 
    < ul className="w-full bg-white shadow-lg  rounded-b-[16px] py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
              Priority seating
 
 
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Access to curated networking
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 mb-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            Post-event content access
          </li>
        
          </TypeWriterText>

            <IndustryButton />
          </ul>
   
  </div>
  <div className="mt-10">
     {/* <div className="mt-2 mb-4 flex flex-row rounded-[16px] items-center h-[200px] bg-black"> */}
      <div className="flex flex-col items-center  rounded-[16px] bg-black h-[80px]">
          <h1
          
            className="editors-bold  p-6 text-[20px] tracking-widest mx-auto  text-white text-center">
       Startup Pass
      </h1>
  
    
    </div> 
    < ul className="w-full bg-white shadow-lg  rounded-b-[16px] py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

          

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
          Access to pitch sessions
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex mb-2 items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           Networking with investors & partners
          </li>
        
          </TypeWriterText>

            <TypeWriterText >
          <li className="py-1 tracking-widest mt-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
           100% free for startups
 
 
 
          </li>
        
          </TypeWriterText>
          <StartUpButton />
          </ul>
   
  </div>


</div>


      

        
      </div>
      </div>
      </div>
  )
}

export default TicketType
