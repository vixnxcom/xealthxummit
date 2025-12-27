import React from 'react'
import HeadAwards from './HeadAwards'
import TypewriterText from './TypeWriterText'

const SecondAwards = () => {
  return (
       <div  className='mb-20 flex flex-col items-start max-w-5xl px-4 md:mx-auto'>
      
         
       


          <div className="flex flex-col items-start mb-2 w-full ">
           
               <TypewriterText>
                 <p className="text-[32px] md:text-[40px] text-cyan mt-10 editors-reg">
                   ACADEMIA & RESEARCH
                 </p>
               </TypewriterText>
          
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span>  Digital Health Research Excellence</li>
                <li className='py-1 tracking-widest'><span>-</span>  AI in Medicine Research Award </li>
                <li className='py-1 tracking-widest'><span>-</span>  Best Industry–Academia Collaboration </li>
            </ul>
          </div>

          <div className="flex flex-col items-start mb-2 w-full mt-10">
          
                <TypewriterText>
                  <p className="text-[32px] md:text-[40px] text-cyan mt-2 editors-reg">
                    NGOS & SOCIAL IMPACT
                  </p>
                </TypewriterText>
        
         
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span>  Community HealthTech Impact</li>
                <li className='py-1 tracking-widest'><span>-</span> Maternal & Child Digital Health Innovation </li>
             
            </ul>
          </div>

          <div className="flex flex-col items-start mb-2 w-full mt-10">
        
                 <TypewriterText>
                  <p className="text-[32px] md:text-[40px] text-cyan mt-2 editors-reg">
                    CLINICIANS & FRONTLINE INNOVATORS
                  </p>
                 </TypewriterText>
         
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span> Tech-Driven Clinical Excellence</li>
                <li className='py-1 tracking-widest'><span>-</span> Nursing Digital Innovation Award </li>
             
            </ul>
          </div>

          <div className="flex flex-col items-start mb-2 w-full mt-10">
          
                 <TypewriterText>
                <p className="text-[32px] md:text-[40px] text-cyan mt-2 editors-reg">
                  STARTUPS & INNOVATORS
                </p>
                 </TypewriterText>
            
          
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span>  HealthTech Startup of the Year</li>
                <li className='py-1 tracking-widest'><span>-</span> Best AI-Powered Health Solution </li>
                <li className='py-1 tracking-widest'><span>-</span> People’s Choice Award </li>
             
            </ul>
          </div>

          <div className="flex flex-col items-start mb-2 w-full mt-10">
       
                  <TypewriterText>
                    <p className="text-[32px] md:text-[40px] text-cyan mt-2 editors-reg">
                      SPECIAL RECOGNITION
                    </p>
                  </TypewriterText>
          
         
          </div>

          <div>
                <ul className='editors-thin py-2 text-[20px] text-white flex flex-col'>
                <li className='py-1 tracking-widest'><span>-</span>  Lifetime Achievement </li>
                <li className='py-1 tracking-widest'><span>-</span>  HealthTech Leadership Award </li>
              
             
            </ul>
          </div>
        
      
        </div>

  )
}

export default SecondAwards
