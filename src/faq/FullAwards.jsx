import React from 'react'
import HeadAwards from './HeadAwards'
import TypewriterText from './TypeWriterText'

const FullAwards = () => {
  return (
       <div  className='mb-20 flex flex-col items-start max-w-5xl px-4 md:mx-auto'>
      
          <div className="flex flex-col items-start mb-2 w-full">
           
         <TypewriterText
           text="HOSPITALS & HEALTH INSTITUTIONS"
           className="text-[28px] md:text-[40px] text-blue-200 mt-10 editors-reg"
          />

          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span> Smart Hospital Award</li>
                <li className='py-1 tracking-widest'><span>-</span> Digital Patient Care Excellence</li>
                <li className='py-1 tracking-widest'><span>-</span> AI in Diagnostics & Imaging Award</li>
            </ul>
          </div>

          <div className="flex flex-col items-start mb-2 w-full mt-10">
           
                 <TypewriterText
                 text="B. PHARMACIES & PHARMACEUTICAL INNOVATION"
              className="text-[28px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
        
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span> Smart Hospital Award</li>
                <li className='py-1 tracking-widest'><span>-</span> Digital Patient Care Excellence</li>
                <li className='py-1 tracking-widest'><span>-</span> AI in Diagnostics & Imaging Award</li>
            </ul>
          </div>
        
          <div className="flex flex-col items-start mb-2 w-full mt-10">
            
              <TypewriterText
                 text="HEALTH INSURANCE & MANAGED CARE"
              className="text-[28px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
         
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span> Digital Claims Innovation</li>
                <li className='py-1 tracking-widest'><span>-</span> AI in Risk Management</li>
                <li className='py-1 tracking-widest'><span>-</span> Inclusive Health Access Through Technology </li>
            </ul>
          </div>
        
          <div className="flex flex-col items-start mb-2 w-full mt-10">
          
               <TypewriterText
                 text="GOVERNMENT & PUBLIC HEALTH"
              className="text-[28px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
          
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span> Digital Public Health Initiative of the Year</li>
                <li className='py-1 tracking-widest'><span>-</span> eHealth Policy Leadership</li>
                <li className='py-1 tracking-widest'><span>-</span> Rural Digital Health Equity Award </li>
            </ul>
          </div>

          <div className="flex flex-col items-start mb-2 w-full mt-10">
         
              <TypewriterText
                 text="TECHNOLOGY PROVIDERS"
              className="text-[28px] md:text-[40px] text-blue-200 mt-2 editors-reg"
            />
        
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span> Best Cloud/Data Model for Healthcare</li>
                <li className='py-1 tracking-widest'><span>-</span>  Cybersecurity Excellence in Health</li>
                <li className='py-1 tracking-widest'><span>-</span> Remote Monitoring & Wearable Tech Innovation </li>
            </ul>
          </div>


        
        
      
        </div>

  )
}

export default FullAwards
