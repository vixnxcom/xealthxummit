import React from 'react'
import TypeWriterText from '../faq/TypeWriterText'

const Details = () => {
  return (
    <section className="w-full  relative overflow-hidden">
      
      

      {/* CONTENT AREA */}
      <div className="h-full flex flex-col mt-40 mb-30 pb-16">
        <div className="flex flex-col mt-20 gap-6">

          {/* EMAIL */}
          <div>
            <TypeWriterText>
              <h1 className="editors-bold px-3  text-[24px] py-2 tracking-widest text-black">
                Email
              </h1>
            </TypeWriterText>

            <ul className="px-3 text-[16px] editors-reg">
              <TypeWriterText>
                <li className="py-1 tracking-widest flex items-center gap-2">
                  <span className="w-3 h-3 bg-black shrink-0"></span>
                partnerships@healthtech<br />frontiers.com
                </li>
              </TypeWriterText>
            </ul>
          </div>

          {/* CALL */}
          <div>
            <TypeWriterText>
              <h1 className="editors-bold px-3 text-[24px] py-2 tracking-widest text-black">
                Call
              </h1>
            </TypeWriterText>

            <ul className="px-3 text-[16px] editors-reg">
              <TypeWriterText>
                <li className="py-1 tracking-widest flex items-center gap-2">
                  <span className="w-3 h-3 bg-black shrink-0"></span>
                  +2349041875880
                </li>
              </TypeWriterText>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Details
