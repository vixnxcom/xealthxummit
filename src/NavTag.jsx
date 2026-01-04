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
      
        <ul className='text-[17px] editors-bold text-shade tracking-widest mx-2 mr-4 text-blue'>
            <li >HealthTech</li>
            <li >Frontiers
        <span className='text-cyan text-shade'> 2026 </span>
               </li>
          
        </ul>
        {/* <img src={arrow} alt="" className='w-5 h-5 mt-2 mr-2'/> */}
       </div>
      </div>
      </div>
    </div>
  )
}

export default NavTag
