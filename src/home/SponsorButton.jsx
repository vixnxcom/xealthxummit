import React from 'react'
import { Link } from 'react-router-dom'
import { arrow, arrw, black, sponsor } from '../assets'

const SponsorButton = () => {
  return (
     <div className={`] flex   mx-auto`}>
       <div className='mx-auto'>
         <button className='mx-auto mt-5  bg-white  rounded-[8px]  md:w-[35vw]
               md:h-[12vw] w-[92vw] h-[16vw] flex items-center justify-center'>

           <Link to='/sponsor' className='editors-reg font-medium text-blue text-[20px] flex flex-row items-center'>
          Become a Sponsor
           
               <img src={black} alt="" className='w-5 h-5 ml-2'/>
           
           </Link>
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

export default SponsorButton