import React from 'react'
import { arrow } from '../assets'
import { Link } from 'react-router-dom'

const ServiceButton = () => {
  return (
     <div className={`p-5 flex mt-5  mx-auto`}>
                       <div className='px-8 md:mx-auto border border-t-[#a3b8ff] border-b-[#a3b8ff] border-l-transparent border-r-transparent'>
                         <button className=' p-4 '>
                 
                           <Link to='/service' className='editors-reg font-medium text-white text-[20px] flex flex-row items-center'>
                            Learn More 
                               <span className='bg-cyan w-10 h-10 rounded-full mx-5 flex items-center justify-center'>
                                           <img src={arrow} alt="" className='w-5 h-5'/>
                                         </span>
                           </Link>
                 
                         </button>
                       </div>
                     </div>
  )
}

export default ServiceButton