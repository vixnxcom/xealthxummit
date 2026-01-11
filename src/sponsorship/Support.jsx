import React from 'react' 
import TypewriterText from '../faq/TypeWriterText'
import PayGold from './paystack/PayGold'
import GoldButton from './paystack/GoldButton'
import { eye, right } from '../assets'

const Support = () => {
  return (
    <div className="App ">
      <div className=" bg-black shadow-lg border border-gray-200   text-black mx-auto flex
       flex-col items-center justify-center text-center w-full max-w-lg">
       

        <p className="text-[24px] text-white editors-bold mt-10">
        Awards Partner
        </p>

        <TypewriterText>
          <p className="text-[20px] md:text-[30px] mb-10 px-2 text-white mt-5  editors-bold">
            300,000 – 500,000
          </p>
        </TypewriterText>

      
        <ul className="w-full bg-white text-black flex flex-col w-full h-[220px]
         text-[20px] editors-reg m-0 p-4 list-none">
       
          <TypewriterText>
            <li className="py-1 tracking-widest mt-5 flex w-full text-left  gap-2">
             <span><img src={right} alt="" className='w-10 h-10' /></span>
            Category Sponsorship.
            </li>
            {/* <li className="px-14 tracking-widest mt-5 flex items-center ">
       
           Sponsorship.
            </li> */}
          </TypewriterText>
          <TypewriterText>
            <li className="py-1 tracking-widest mt-5 flex text-left gap-2">
             <span><img src={right} alt="" className='w-10 h-10' /></span>
             Exhibition presence.
            </li>
          </TypewriterText>

        </ul>
      </div>
    </div>
  )
}

export default Support
