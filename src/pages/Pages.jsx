import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../home/Home';
import MenuNutton from '../MenuNutton';
import HamburgerNav from '../HamburgerNav';
import Services from '../services/Services';
import About from '../about/About';

const Pages = () => {
  return (
    <Router>
      <div className="w-full top-20">
        <HamburgerNav />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Services />} />
       
        <Route exact path="/about" element={<About />} />
      </Routes>


    </Router>
  );
};

export default Pages;
