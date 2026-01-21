// In your StartUpButton.jsx (now a simple navigation button)
import React from 'react';
import { arrw } from '../assets';
import { useNavigate } from 'react-router-dom';

const IndustryButton = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Simply navigate to the form page
    navigate('/industry');
  };

  return (
    <div className="flex mx-auto">
      <div className="mx-auto">
        <button
          onClick={handleNavigation}
          className="mx-auto mt-15 mb-5 bg-cyan hover:!bg-black active:!bg-black hover:scale-103 cursor-pointer 
                   rounded-[9px] md:w-[35vw] md:h-[4vw] w-[86vw] h-[12vw] flex items-center justify-center"
        >
          <div className="editors-reg text-shade text-white text-[16px] flex flex-row items-center">
            Register Industry Pass
            <span className="mx-2 flex items-center justify-center">
              <img src={arrw} alt="arrow" className="w-5 h-5" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default IndustryButton;