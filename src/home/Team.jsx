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
              className="flex flex-col  shadow-md  border border-gray-200 
                rounded-[16px] items-center text-center gap-4"
            >
            <TypeWriterText>
                   <div className=' h-[400px]  w-[340px] md:w-[280px] border border-gray-200
                      bg-brain overflow-hidden mt-5 md:mt-3 rounded-t-[16px] '>
            
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-[340px] md:w-[280px]  rounded-t-[16px] mt-3 lg:mt-0  
                   mx-auto justify-center  h-[400px]
                    object-cover"
                 
                />
            
            </div>
            </TypeWriterText>
            
             <div className=' '>
              <div className=" lg:h-10 ">
                <TypeWriterText>
                  <p className={`editors-bold ${partner.color} mt-2 text-[20px] text-black`}>
                    {partner.name}
                  </p>
                </TypeWriterText>
              </div>
              
           

            
              <TypeWriterText>
              <p className={`editors-reg ${partner.color} text-[16px] text-black mb-4`}>
                    {partner.title}
                  </p>
              </TypeWriterText>
            
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team