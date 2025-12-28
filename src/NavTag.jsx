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

       <div className='  bg-cyan'>
        <div className='flex flex-row p-1 '>
        <img src={scope} alt="" className='w-12 h-14 mt-1' />
        <ul className='text-[20px] inter-reg  tracking-widest mx-2 text-white'>
            <li>Buy</li>
            <li>Tickets</li>
        </ul>
        <img src={arrow} alt="" className='w-7 h-7 mt-2 mr-2'/>
       </div>
      </div>
      </div>
    </div>
  )
}

export default NavTag
