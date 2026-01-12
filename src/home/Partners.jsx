import React from 'react'
import { africa, medl } from '../assets'
import TypeWriterText from '../faq/TypeWriterText'

const Partners = () => {
  return (
    <section className="mt-20 mb-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-16 w-full max-w-5xl px-4">

        {/* Partner 1 */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-start">
          

            <TypeWriterText>
              <p className="editors-bold text-blue text-[24px]">
                Medlenna
              </p>
            </TypeWriterText>
          </div>

          <TypeWriterText>
            <img
              src={medl}
              alt="Medlenna logo"
              className="w-[200px] h-[100px] object-contain"
            />
          </TypeWriterText>
        </div>

        {/* Partner 2 */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-start">
           

            <TypeWriterText>
              <p className="editors-bold text-black text-[24px]">
                The African Achievers Awards
              </p>
            </TypeWriterText>
          </div>

          <TypeWriterText>
            <img
              src={africa}
              alt="African Achievers Awards logo"
              className="w-[200px] h-[100px] object-contain"
            />
          </TypeWriterText>
        </div>

      </div>
    </section>
  )
}

export default Partners
