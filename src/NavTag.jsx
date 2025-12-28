import React from 'react'
import { arrow, scope } from './assets'

const NavTag = () => {
  return (
    <div className=' bg-black'>
      <div className='flex flex-row gap-20'>
       {/* <div className=''>
       <ul className='p-2'>
           <li>OneDay</li>
        <li>HealthTech</li>
        <li>Summit</li>
       </ul>
     
       </div> */}

       <div className='flex flex-row p-2 border border-r-blue-200 bg-gold'>
        <img src={scope} alt="" className='w-20' />
        <ul className='text-[24px] inter-reg mt-2 tracking-widest mx-2 text-white'>
            <li>Buy</li>
            <li>Tickets</li>
        </ul>
        <img src={arrow} alt="" className='w-8 h-8 mt-2'/>
       </div>
      </div>
    </div>
  )
}

export default NavTag
