import React from 'react'
import styles from '../style'
import { arrow, arrw, black } from '../assets'
import { Link } from 'react-router-dom'

const WhiteButton = () => {
  return (
    <div className={`] flex  mx-auto`}>
      <div className='mx-auto'>
         <button className='mx-auto mt-5  bg-white  rounded-[8px]  md:w-[35vw]
               md:h-[4vw] w-[92vw] h-[14vw] flex items-center justify-center'>

          <p className='editors-reg font-medium text-blue text-[20px] flex flex-row items-center'>
           Buy Ticket
            <span className=' mx-2 flex items-center justify-center'>
              <img src={black} alt="" className='w-5 h-5'/>
            </span>
          </p>
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

export default WhiteButton
