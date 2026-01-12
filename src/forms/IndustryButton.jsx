import React from 'react'
import { Link } from 'react-router-dom'
import { arrw } from '../assets'

const IndustryButton = () => {
   return (
    <div className={` flex   mx-auto`}>
      <div className='mx-auto'>
         <button className='mx-auto mt-15 mb-5  bg-cyan hover:!bg-black hover:scale-103 cursor-pointer
           rounded-[9px]  md:w-[35vw]
               md:h-[4vw] w-[86vw] h-[12vw] flex items-center justify-center'>

          <Link to='/industry' className='editors-reg text-shade  text-white text-[16px] flex flex-row items-center'>
           Register Industry Pass
            <span className=' mx-2 flex items-center justify-center'>
              <img src={arrw} alt="" className='w-5 h-5'/>
            </span>
          </Link>
          

        </button>
      </div>
    </div>
  )
}

export default IndustryButton
