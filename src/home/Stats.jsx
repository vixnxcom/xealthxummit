// Updated Stats component using AnimatedItem
import React from 'react'
import styles from '../style'


import BackgroundLines from './BackgroundLines'

const Stats = () => {
  return (
 <section className="relative min-h-screen bg-blue text-white">
  <BackgroundLines />

  <div className="relative z-10 p-24">
    <h1 className="text-5xl font-bold">Your Content Here</h1>
    <p className="mt-4 opacity-80">Animated glowing net background.</p>
  </div>
</section>



  )
}

export default Stats