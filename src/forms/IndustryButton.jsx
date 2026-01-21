// StartUpButton.jsx - simplified
import React from 'react'
import { arrw } from '../assets'
import { useNavigate } from 'react-router-dom'

const StartUpButton = () => {
  const navigate = useNavigate()

  return (
    <div className="flex mx-auto">
      <div className="mx-auto">
        <button
          onClick={() => navigate('/industry')}
          className="mx-auto mt-15 mb-5 bg-cyan hover:!bg-black hover:scale-103 cursor-pointer 
            active:!bg-black  rounded-[9px] md:w-[35vw] md:h-[4vw] w-[86vw] h-[12vw] flex items-center
                    justify-center"
        >
          <div className="editors-reg text-white text-[16px] flex items-center">
            Register Industry Pass
            <img src={arrw} alt="arrow" className="w-5 h-5 ml-2" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default StartUpButton