import React from "react"
import TypeWriterText from "./faq/TypeWriterText"

const Speech = () => {
  return (
    <div className="flex flex-col p-3 space-y-6">
      <div className=" w-full ">
     
<div className="w-full flex justify-center">
  <div className="text-center flex flex-col items-center max-w-screen-xl">
    <div className="border border-t-gray-800 mb-5 w-[92vw] md:w-[60vw]"></div>
<div
  className="text-[12px] text-center md:text-center md:text-[10px] mb-2 editors-reg text-gray-500
  md:text-gray-400 letter-shade"
>
  {(() => {
    const text = atob(
      "MjAyNiBIZWFsdGhUZWNoIEZyb250aWVycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZA=="
    )
    return <p>{text}</p>
  })()}
</div>

<div
  className="text-[12px] text-center md:text-center md:text-[10px] mb-2 editors-reg text-gray-500
  md:text-gray-400 letter-shade"
>
  {(() => {
    const h = atob("aHR0cHM6Ly93YS5tZS8yMzQ5MDM0NDQyNDU4")
    const t1 = atob("RGVzaWduZWQgYnk=")
    const t2 = atob("dml4bmRvdGNvbQ==")

    return (
      <a
        href={h}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan transition"
        data-k="x9"
      >
        {t1}{" "}
        <span className="text-gray-400 md:text-gray-400">
          {t2}
        </span>
      </a>
    )
  })()}
</div>

 
  </div>
</div>
      </div>
    </div>
  )
}

export default Speech
