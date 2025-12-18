import React from 'react'
import FullAwards from './FullAwards'
import HeadAwards from './HeadAwards'
import NominateButton from './NominateButton'
import SecondAwards from './SecondAwards'
import { Background, Parallax } from 'react-parallax'
import Quote from '../services/Quote'
import styles from '../style'
import { doc, man } from '../assets'
import PImage from './PImage'
import BookParallaxFloatImage from '../about/IntroImage'

const Awards = () => {
  return (
    <div className=' '>
        <HeadAwards />
      <FullAwards />


    <BookParallaxFloatImage />
      <SecondAwards />
      <NominateButton />
    </div>
  )
}

export default Awards
