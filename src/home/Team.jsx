import React from 'react'
import { abdul, achese, africa, forum, mang, medl, ola } from '../assets'
import TypeWriterText from '../faq/TypeWriterText'

const Team = () => {
  const partners = [
    {
      id: 1,
      name: 'Dr. Ahmed Abdulkareem',
      logo: abdul,
      color: 'text-black',
      title: 'CEO Primebridge Health'
    },
    
    {
      id: 2,
      name: 'Dr. Achese Inimgba',
      logo: achese,
      color: 'text-black',
      title: 'CTO Primebridge Health'
    },
   
    {
      id: 3,
      name: 'Dr. Olayemi Abdulrahman',
      logo: ola,
      color: 'text-black',
      title: 'COO Primebridge Health'
    },
 
  ]

  return (
    <section className="my-20 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col bg-black rounded-[16px] items-center text-center gap-4"
            >

                   <div className='border mt-5   bg-blue border-blue shadow-md border-2 '>
              <TypeWriterText>
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-[220px] rounded-t-[16px]  mx-auto justify-center  h-[340px] bg-white object-cover"
                  loading="lazy"
                />
              </TypeWriterText>
            </div>

              <div className=" lg:h-6 ">
                <TypeWriterText>
                  <p className={`editors-bold ${partner.color} text-[20px] text-white`}>
                    {partner.name}
                  </p>
                </TypeWriterText>
              </div>
              
           

            
              <TypeWriterText>
              <p className={`editors-reg ${partner.color} text-[16px] text-cyan mb-4`}>
                    {partner.title}
                  </p>
              </TypeWriterText>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team