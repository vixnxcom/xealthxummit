import React from 'react'
import { arrw, check } from '../assets'

const Download = () => {
  return (
   <div className={`] flex   mx-auto`}>
       <div className='mx-auto'>
         <button className='mx-auto mt-5  bg-blue  rounded-[8px]  md:w-[35vw]
               md:h-[4vw] w-[92vw] h-[200px] flex items-center justify-center'>

           <div className='editors-reg font-medium w-[320px] text-white text-[20px] flex flex-col items-center'>
         Download Sponsorship Prospectus
           
               <img src={check} alt="" className='w-5 h-5 ml-2 mt-4'/>
           
           </div>
           {/* <Link to='/ticket' className='editors-reg font-medium text-white text-[20px] flex flex-row items-center'>
            Buy Ticket
             <span className='bg-cyan w-10 h-10 rounded-full mx-2 flex items-center justify-center'>
               <img src={arrow} alt="" className='w-5 h-5'/>
             </span>
           </Link> */}
 
         </button>
       </div>
     </div>
  )
}

export default Download
