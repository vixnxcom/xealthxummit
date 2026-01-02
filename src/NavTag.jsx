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

       <div className=' bg-white rounded-r-full   mb-2 mt-2 '>
        <div className='flex flex-row p-1 '>
      
        <ul className='text-[18px] editors-bold  tracking-widest mx-2 text-blue'>
            <li>Buy</li>
            <li>Tickets</li>
        </ul>
        <img src={arrow} alt="" className='w-5 h-5 mt-2 mr-2'/>
       </div>
      </div>
      </div>
    </div>
  )
}

export default NavTag
