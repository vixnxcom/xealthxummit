import React from 'react'
import { africa, forum, mang, medl } from '../assets'
import TypeWriterText from '../faq/TypeWriterText'

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Medlenna',
      logo: medl,
      color: 'text-blue',
      alt: 'Medlenna logo'
    },
    
    {
      id: 2,
      name: 'The African Achievers Awards',
      logo: africa,
      color: 'text-black',
      alt: 'African Achievers Awards logo'
    },
    {
      id: 3,
      name: 'MangroveX',
      logo: mang,
      color: 'text-black',
      alt: 'MangroveX logo'
    },
    {
      id: 4,
      name: 'Global Reputation Forum',
      logo: forum,
      color: 'text-black',
      alt: 'Global Reputation Forum logo'
    }
  ]

  return (
    <section className="my-20 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="h-10 lg:h-6 ">
                <TypeWriterText>
                  <p className={`editors-reg ${partner.color} text-[16px]`}>
                    {partner.name}
                  </p>
                </TypeWriterText>
              </div>
              
              <TypeWriterText>
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-[120px] h-[60px] mt-4 object-contain"
                  loading="lazy"
                />
              </TypeWriterText>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners