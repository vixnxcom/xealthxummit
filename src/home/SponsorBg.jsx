// App.jsx or any page component
import React from 'react';
import VideoBackground from './VideoBackground';
import Sponsor from './Sponsor';

import Benefits from './Benefits';


function SponsorBg() {
  return (
    <div>
    
       <Sponsor />
       <Benefits />
    
      
      {/* Rest of your page content */}
      
    </div>
  );
}

export default SponsorBg;