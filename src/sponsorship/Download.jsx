import React from 'react'
import { arrw, check } from '../assets'

const Download = () => {
  return (
   <div className={`] flex   mx-auto`}>
       <div className='mx-auto'>
         <button className='mx-auto mt-5  bg-blue  rounded-[8px]  md:w-[35vw]  hover:scale-103
                w-[92vw] h-[200px] md:h-[20vw lg:h-[16vw] flex items-center justify-center'>

           <div className='editors-reg font-medium w-[320px] text-white text-[20px] flex flex-col items-center'>
         Download Sponsorship Prospectus
           
           <div className='border border-white border-2 hover:!scale-110 active:!scale-110 rounded-full h-12 w-12 mt-4'>
<img src={check} alt="" className='p-3 '/>
           </div>
               
           
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
