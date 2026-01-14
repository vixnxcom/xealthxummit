import React from 'react'
import { ahmed, big, lab, right, sponsor } from './assets'

const FooterEffect = () => {
  return (
    <div className='w-[95vw] xl:w-[100vw] max-w-5xl'>
   <div className="image-collage xl:mx-auto">
  <img src={big} className="img img-main " />
  <img src={right} className="img img-left" />
  <div className="block block-left" />
  <div className="block block-right" />
  <div className="block block-bottom " />
</div>

</div>
  )
}
export default FooterEffect
