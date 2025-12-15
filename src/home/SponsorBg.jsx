// App.jsx or any page component
import React from 'react';
import VideoBackground from './VideoBackground';
import Sponsor from './Sponsor';
import { spbg } from '../assets';
import Benefits from './Benefits';


function SponsorBg() {
  return (
    <div>
      <VideoBackground videoSrc={spbg}>
       <Sponsor />
       <Benefits />
      </VideoBackground>
      
      {/* Rest of your page content */}
      
    </div>
  );
}

export default SponsorBg;