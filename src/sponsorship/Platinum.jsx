import React from 'react' 
import TypewriterText from '../faq/TypeWriterText'
import PayGold from './paystack/PayGold'
import GoldButton from './paystack/GoldButton'
import { eye } from '../assets'

const Platinum = () => {
  return (
    <div className="App ">
      <div className=" bg-black shadow-lg border border-gray-200    rounded-[16px] text-black mx-auto flex
       flex-col items-center justify-center text-center w-full max-w-md">
        <div className="mt-2 mb-4 flex flex-row items-center">
          <span className="p-3 w-20 h-20">
            <img src={eye} alt="" />
          </span>
        </div>

        <p className="text-[24px] text-white editors-bold">
          Platinum Partner
        </p>

        <TypewriterText>
          <p className="text-[20px] md:text-[30px] mb-5 px-2 text-white mb-5 mt-5 editors-bold">
           5,000,000 +
          </p>
        </TypewriterText>

        <ul className="w-full bg-white text-black flex flex-col rounded-b-[16px] text-[20px] editors-reg m-0 p-4 list-none">
          <TypewriterText>
            <li className="py-1 tracking-widest flex items-center gap-2">
            
             Keynote visibility.
            </li>
          </TypewriterText>
          <TypewriterText>
            <li className="py-1 tracking-widest mt-5 flex items-center gap-2">
            
             Headline branding.
            </li>
          </TypewriterText>
        </ul>
      </div>
    </div>
  )
}

export default Platinum
