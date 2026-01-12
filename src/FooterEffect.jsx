import React from 'react'
import { ahmed, big, lab, sponsor } from './assets'

const FooterEffect = () => {
  return (
    <div className='w-full max-w-5xl'>
   <div class="image-collage ">
  <img src={big} class="img img-main" />
  <img src={ahmed} class="img img-left" />
  <div class="block block-left"></div>
  <div class="block block-right"></div>
  <div class="block block-bottom"></div>
</div>
</div>
  )
}

export default FooterEffect
