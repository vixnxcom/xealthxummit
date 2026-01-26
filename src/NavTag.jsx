import React from 'react'
import { ar, arrow, arrw, image, scope } from './assets'

const NavTag = () => {
  return (
    <div className='bg-blue '>
      <div className='flex flex-row '>
       <div className=' bg-white rounded-r-full mb-2 mt-2 '>
        <div className='flex flex-col p-1'>
      
        <ul className='text-[16px] editors-bold w-full text-shade tracking-widest mx-2 mr-4 text-blue'>
            <li >HealthTech Frontiers
         
        <span className='text-cyan text-shade'> 2026  </span>
           </li>   
          
        </ul>
       
        <ul className='text-[12px] editors-reg text-shade mt-2  tracking-widest mx-2 text-blue'>
            <li className='flex items-center gap-1'>
           Owned and Organised by 
              {/* <span>
                <img src={ar} alt="" className='w-8 inline-block bg-black align-middle'/>
              </span> */}
            </li>
            <li className='flex items-center gap-1 mr-5'>
             Primebridge Health Solutions
            
            </li>
        </ul>
       </div>
      </div>
      </div>
    </div>
  )
}

export default NavTag