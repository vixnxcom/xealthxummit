import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../home/Home';
import MenuNutton from '../MenuNutton';
import HamburgerNav from '../HamburgerNav';
import Services from '../services/Services';
import About from '../about/About';
import Faq from '../faq/Faq';
import Sponsorship from '../sponsorship/Sponsorship';
import PayGold from '../sponsorship/paystack/PayGold';
import PayPlat from '../sponsorship/paystack/PayPlat';
import PaySilver from '../sponsorship/paystack/PaySilver';
import PaySupport from '../sponsorship/paystack/PaySupport';

const Pages = () => {
  return (
    <Router>
      <div className="w-full top-20">
        <HamburgerNav />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Services />} />
       
        <Route exact path="/about" element={<Faq />} />
        <Route exact path="/sponsor" element={<Sponsorship />} />
        <Route exact path="/paygold" element={<PayGold />} />
        <Route exact path="/payplat" element={<PayPlat />} />
        <Route exact path="/paysilver" element={<PaySilver />} />
        <Route exact path="/paysupport" element={<PaySupport />} />
      </Routes>


    </Router>
  );
};

export default Pages;
