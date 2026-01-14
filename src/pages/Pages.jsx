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
import PayTicket from '../pay/PayTicket';
import NavTag from '../NavTag';
import Speaker from '../home/Speaker';
import MoveToTop from '../home/MoveToTop';
import Footer from '../Footer';
import Booking from '../booking/Booking';
import StartUpForm from '../forms/StartUpForm';
import IndustryForm from '../forms/IndustryForm';
import GeneralForm from '../forms/GeneralForm';
import FooterEffect from '../FooterEffect';
import styles from '../style';
import BecomeSponsor from '../becomesponsor/BecomeSponsor';

const Pages = () => {
  return (
    <Router>
      <div className="w-full ">
  <NavTag />
       <div className='top-20'>
 <HamburgerNav />
       </div>
       
       
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Services />} />
       
        <Route exact path="/awards" element={<Faq />} />
        <Route exact path="/sponsor" element={<BecomeSponsor />} />
        <Route exact path="/sponsorship" element={<Sponsorship />} />
        <Route exact path="/paygold" element={<PayGold />} />
        <Route exact path="/payplat" element={<PayPlat />} />
        <Route exact path="/paysilver" element={<PaySilver />} />
        <Route exact path="/paysupport" element={<PaySupport />} />
        <Route exact path="/ticket" element={<PayTicket />} />
        <Route exact path="/speakers" element={<Speaker />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/startup" element={<StartUpForm />} />
        <Route exact path="/industry" element={<IndustryForm />} />
        <Route exact path="/general" element={<GeneralForm />} />
      </Routes>

<MoveToTop />

     <div className={`${styles.flexCenter}  bg-black`}>
 <div className={`${styles.boxWidth}  `}>
 <FooterEffect />
 <Footer />
       </div> 
       </div>   

    </Router>
  );
};

export default Pages;
