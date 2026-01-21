import React from "react"
import TypeWriterText from "./faq/TypeWriterText"

const Speech = () => {
  return (
    <div className="flex flex-col p-3 space-y-6">
      <div className=" w-full ">
        <TypeWriterText>
          <h1 className="text-[12vw] md:text-[56px] md:px-12 editors-bold font-bold text-blue 
          mb-10 letter-shade">
            HEALTHTECH <br />
            FRONTIERS <br />
            <span className="editors-itallic">2026</span>
          </h1>
        </TypeWriterText>
<div className="w-full flex justify-center">
  <div className="text-center flex flex-col items-center max-w-screen-xl">
    <div className="border border-t-gray-800 mb-5 w-[92vw] md:w-[60vw]"></div>

   <div className="text-[12px] text-center md:text-center md:text-[10px] mb-2 editors-reg text-gray-600 letter-shade">
  {(() => {
    const text = atob("MjAyNiBIZWFsdGhUZWNoIEZyb250aWVycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZA==")
    return <p>{text}</p>
  })()}
</div>

    <div className="text-[12px] text-center md:text-center md:text-[10px] mb-2 editors-reg text-gray-600 letter-shade">
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
            <span>{t2}</span>
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
