import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import MenuNutton from './MenuNutton';
import { Link } from 'react-router-dom';

const HamburgerNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current || !bgRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (menuOpen) {
      tl.fromTo(
        bgRef.current,
        { y: '100%' },
        { y: '0%', duration: 0.5 }
      ).fromTo(
        menuRef.current.querySelectorAll('.menu-item'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.2'
      );
    } else {
      tl.to(
        menuRef.current.querySelectorAll('.menu-item'),
        { opacity: 0, y: 40, duration: 0.3, stagger: 0.05, ease: 'power3.in' }
      ).to(
        bgRef.current,
        { y: '100%', duration: 0.5, ease: 'power3.in' },
        '-=0.3'
      );
    }
  }, [menuOpen]);

  // Close menu on Escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
    }
  };

  // Primary and secondary menu items
  const primaryMenu = ['Home', 'Awards', ];
  const secondaryMenu = ['Sponsorship','Speakers',  'Contact'];

  return (
    <div className="relative overflow-hidden" onKeyDown={handleKeyDown}>
      {/* Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="hamburger-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className="z-50 fixed top-2 right-1 w-12 h-12 flex items-center justify-center cursor-pointer"
      >
        <MenuNutton />
      </button>

      {/* Background Layer */}
      <div
        ref={bgRef}
        className="fixed top-0 left-0 w-full h-full bg-bg z-30 transform translate-y-full"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />

      {/* Menu Items */}
      <nav
        id="hamburger-menu"
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-full flex flex-col z-40 px-8 ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        {/* Heading */}
        <div className="menu-item w-full text-left pt-10 pb-20">
          <h1 className="text-[8vw]  md:text-[32px] editors-bold text-cyan letter-shade">
            HealthTech Frontiers
            <span className="editors-itallic mt-1 text-3xl">
              <br />  2026
            </span>
          </h1>
          <p className="editors-reg text-[4vw]  md:text-[24px] text-white mt-2 xs:mt-20">
            <span className="editors-thin text-white tracking-widest">
              Transforming Healthcare Through Innovation & Technology
            </span>
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-1">
          {/* Primary Menu */}
          <div className="w-1/2 h-2/3 flex flex-col justify-center gap-5">
            {primaryMenu.map((item, i) => (
              <div
                key={i}
                className="menu-item text-[8vw]  md:text-[32px] py-5 text-cyan editors-bold"
              >
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>

          {/* Vertical Border */}
          <div className="w-[1px] h-2/3 flex items-center border-l border-gray-900 ml-5 mr-12" />

          {/* Secondary Menu */}
          <div className="w-1/2 h-2/3 flex flex-col justify-center gap-8">
            {secondaryMenu.map((item, i) => (
              <div
                key={i}
                className="menu-item text-[4vw]  md:text-[24px] editors-thin text-white letter-shade"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerNav;
