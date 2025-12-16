import React from 'react'
import { Link } from 'react-router-dom'
import { arrow, sponsor } from '../assets'

const SponsorButton = () => {
  return (
    <div className="flex items-center justify-center  w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <button className='mt-5 backdrop-blur-50 border border-white shadow
           md:w-[24vw] md:h-[4vw] w-[90vw] h-[16vw] flex items-center justify-center hover:opacity-90 transition-opacity'>
            <p className='editors-reg font-medium text-white text-[20px] flex flex-row items-center'>
              Become a Sponsor
              <span className='bg-cyan w-10 h-10 rounded-full mx-2 flex items-center justify-center'>
                <img src={arrow} alt="" className='w-5 h-5'/>
              </span>
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SponsorButton