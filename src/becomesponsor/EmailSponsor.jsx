import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'

const EmailSponsor = () => {
  return (
   <div className="w-full ">
      <div className="max-w-5xl mx-auto  ">

        <div>

   <div className="bg-white ">
  <div className="">
     {/* <div className="mt-2 mb-4 flex flex-row rounded-[16px] items-center h-[200px] bg-black"> */}
      <div className="flex flex-col items-start ">
        <TypeWriterText>
     <h1
          
            className="editors-bold px-3  text-[20px] py-2 tracking-widest  text-black text-left">
    Email
      </h1>
        </TypeWriterText>
     
  
    
    </div> 
    < ul className="w-full  py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1  max-w-[10px] flex  items-center gap-2">
            <span className="w-3 h-3 bg-black  shrink-0 mx-1"></span>
            <a 
              href="mailto:partnerships@healthtechfrontiers.com" 
              className="underline hover:text-blue-600 transition-colors"
            >
              partnerships@healthtech <br />frontiers.com
            </a>
          </li>
        
          </TypeWriterText>
          </ul>



          <div className="flex flex-col items-start mt-5">
            <TypeWriterText>
    <h1
          
            className="editors-bold px-3  text-[20px] py-2 tracking-widest  text-black text-left">
   Call
      </h1>
  
            </TypeWriterText>
      
    
    </div> 
    < ul className="w-full  py-2 text-black 
    flex flex-col px-3 text-[16px] editors-reg px-3 py-2 ">

            <TypeWriterText >
          <li className="py-1 tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 bg-black shrink-0 mx-1"></span>
            <a 
              href="tel:+2349041875880" 
              className=" hover:text-blue-600 transition-colors"
            >
              +2349041875880
            </a>
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

export default EmailSponsor