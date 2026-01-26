import React, { useState } from 'react'
import { check } from '../assets'

const Download = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex mx-auto">
      <div className="mx-auto mt-5 bg-blue rounded-[8px]
          md:w-[35vw] w-[92vw] h-[200px]
          flex flex-col items-center justify-center text-white">

        <p className="text-[20px] editors-reg mb-4">
          Download Sponsorship Prospectus
        </p>

        {/* CHECK */}
        <button
          onClick={() => setChecked(true)}
          className="border border-white rounded-full h-12 w-12
                     hover:scale-110 transition"
        >
          <img src={check} alt="Check" className="p-3" />
        </button>

        {/* DOWNLOAD APPEARS AFTER CHECK */}
        {checked && (
          <a
            href="/HealthTech_Frontiers_Primebridge.pdf"
            download
            className="mt-4 underline text-[16px] editors-reg"
          >
            Click here to download
          </a>
        )}
      </div>
    </div>
  )
}

export default Download
