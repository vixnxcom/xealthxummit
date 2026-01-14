import React from 'react'
import { arrw } from '../assets'
import { Link } from 'react-router-dom'

const StartUpButton = () => {
  return (
    <div className={` flex   mx-auto`}>
      <div className='mx-auto'>
         <button className='mx-auto mt-15 mb-5  bg-cyan hover:!bg-black active:!bg-black hover:scale-103 cursor-pointer 
          rounded-[9px]  md:w-[35vw]
               md:h-[4vw] w-[86vw] h-[12vw] flex items-center justify-center'>

          <Link to='/startup' className='editors-reg text-shade  text-white text-[16px] flex flex-row items-center'>
           Register StartUp Pass
            <span className=' mx-2 flex items-center justify-center'>
              <img src={arrw} alt="" className='w-5 h-5'/>
            </span>
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

export default StartUpButton
