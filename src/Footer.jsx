import React from 'react'
import { bot } from './assets'

const Footer = () => {
  return (
    <div className="flex  flex-col p-3   space-y-6">

<img src={bot} alt="" />
        {/* Top line: slides right */}
           <div className="max-w-5xl w-full mx-auto">
        <h1 className='text-[13vw] md:text-[56px] mb-10
         editors-bold font-bold text-cyan opacity-20  '>
       HEALTHTECH  FRONTIERS <span className='editors-itallic'> 2026</span>
      </h1>
        <h1 className='text-[3vw] text-center md:text-[10px] mb-2
         editors-reg text-gray-400  letter-sahde  '>
      Designed by vixndotcom
      </h1>
    </div>
    </div>
  )
}

export default Footer