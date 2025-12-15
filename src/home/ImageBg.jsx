import React from 'react'
import styles from '../style'
import SponsorButton from './SponsorButton'



const ImageBg = () => {
  return (
    <section>
      
         
          <p className='textl text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate deleniti
             quis maiores reiciendis nulla quos nam quaerat. Accusantium necessitatibus repellendus,
              velit sit eum beatae aspernatur laboriosam recusandae adipisci. Natus officiis
               accusantium iure, odit nihil amet libero nisi assumenda alias minus voluptatum? 
               Magnam incidunt quam laborum praesentium repellendus pariatur numquam itaque dolor
                necessitatibus magni, cumque corporis eligendi eos rerum tempore explicabo in, adipisci,
                 similique libero! Quod, dicta doloribus et mollitia, similique odio, hic laudantium qui
                  tempore</p>
                  
           <div className={`${styles.flexCenter} mx-auto  mb-20 `}>
 <div className={`${styles.boxWidth}  `}>

   <SponsorButton />

    
</div>
</div>
</section>
  )
}

export default ImageBg
