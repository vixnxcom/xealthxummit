import React from 'react' 
import TypewriterText from '../faq/TypeWriterText'
import PayGold from './paystack/PayGold'
import GoldButton from './paystack/GoldButton'
import { eye, right } from '../assets'

const Platinum = () => {
  return (
    <div className="App ">
      <div className=" bg-black shadow-lg border border-gray-200 md:mt-10    text-black mx-auto flex
       flex-col items-center justify-center text-center w-full max-w-lg">
       

        <p className="text-[24px] text-white editors-bold mt-10">
          Platinum Partner
        </p>

        <TypewriterText>
          <p className="text-[20px] md:text-[30px] mb-5 px-2 text-white mb-5 mt-5 editors-bold">
           5,000,000 +
          </p>
        </TypewriterText>

        <ul className="w-full bg-white text-black flex flex-col h-[220px] text-[20px] editors-reg m-0 p-4 list-none">
          <TypewriterText>
            <li className="py-1 tracking-widest flex text-left gap-2">
           <span className="w-3 h-3 bg-black mt-2 shrink-0 mx-1"></span>
             Keynote visibility.
            </li>
          </TypewriterText>
          <TypewriterText>
            <li className="py-1 tracking-widest mt-5 flex text-left gap-2">
            <span className="w-3 h-3 bg-black mt-2 shrink-0 mx-1"></span>
             Headline branding.
            </li>
          </TypewriterText>
        </ul>
      </div>
    </div>
  )
}

export default Platinum
