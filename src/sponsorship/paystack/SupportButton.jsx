import React from "react"
import { useNavigate } from "react-router-dom"

const SupportButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/paysupport") // redirect to payment page
  }

  return (
    <button
      onClick={handleClick}
      className="editors-reg text-[20px] border border-3 border-t-[##cbcbcf;] border-r-[#2a2b2c] 
      border-r-[#2a2b2c] border-l-[#2a2b2c] border-b-[#cbcbcf] mt-10 w-[320px]"
    >
        <p className="px-5 py-3 text-blue-200">
  Become a Support Sponsor
        </p>
   
    </button>
  )
}

export default SupportButton
