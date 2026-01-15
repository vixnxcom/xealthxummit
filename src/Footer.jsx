import React from 'react'
import TypeWriterText from './faq/TypeWriterText'

const Footer = () => {
  return (
    <div className="flex flex-col p-3 space-y-6 ">
      <div className="max-w-5xl w-full mx-auto ">
        <TypeWriterText>
   <h1 className="text-[13vw] md:text-[56px] md:px-12  editors-bold font-bold text-blue mb-10 letter-shade 
        ">
          HEALTHTECH <br />
          FRONTIERS <br />
          <span className="editors-itallic">2026</span>
        </h1>
        </TypeWriterText>
     

        {/* <div className="text-[3vw] text-center md:text-[10px] mb-2 editors-reg text-gray-400 letter-sahde">
         
          <a
            href="https://wa.me/2349034442458"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan transition"
          >
            Designed by{" "} vixndotcom
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
