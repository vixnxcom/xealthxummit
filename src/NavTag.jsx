import React from 'react'
import { arrow, arrw, scope } from './assets'

const NavTag = () => {
  return (
    <div className=' bg-blue'>
      <div className='flex flex-row gap-20'>
       {/* <div className=''>
       <ul className='p-2'>
           <li>OneDay</li>
        <li>HealthTech</li>
        <li>Summit</li>
       </ul>
     
       </div> */}

       <div className='  '>
        <div className='flex flex-row p-1 '>
      
        <ul className='text-[18px] editors-reg  tracking-widest mx-2 text-cyan'>
            <li>Buy</li>
            <li>Tickets</li>
        </ul>
        <img src={arrw} alt="" className='w-5 h-5 mt-2 mr-2'/>
       </div>
      </div>
      </div>
    </div>
  )
}

export default NavTag
