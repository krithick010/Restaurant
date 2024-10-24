import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scroll ? 'navbar-scroll' : ''}`}>
      <div className="navbar-logo">
        <a href="/">
          <img src="/Navlogo.jpg" alt="Restaurant Logo" className="logo" />
        </a>
      </div>
      <div className="nav-icon" onClick={toggleMenu}>
        <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#offer">Offer</a>
        <a href="#booking">Booking</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
