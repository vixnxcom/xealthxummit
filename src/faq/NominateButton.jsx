import React from 'react'
import { arrow } from '../assets'

const NominateButton = () => {
  return (
   <div className={`] flex   mx-auto`}>
            <div className='mx-auto'>
              <button className='mx-auto mt-5 backdrop-blur-50  border border-white shadow md:w-[24vw]
               md:h-[4vw] w-[70vw] h-[16vw] flex items-center justify-center'>
      
                <p className='editors-reg font-medium text-white text-[20px] flex flex-row items-center'>
             Nominate Now
                  <span className='bg-cyan w-10 h-10 rounded-full mx-2 flex items-center justify-center'>
                    <img src={arrow} alt="" className='w-5 h-5'/>
                  </span>
                </p>
      
              </button>
            </div>
          </div>
  )
}

export default NominateButton
