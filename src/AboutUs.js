import React from 'react';
import coimbatoreImg from './coimbatoreImg.avif';
import chennaiImg from './chennaiImg.jpg';
import bangaloreImg from './bangloreImg.jpeg'; // Corrected relative path
import './Aboutus.css';
import { FaPhone, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Importing icons

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>

      <div className="branches-container">
        <h1 className='bb'>Our Branches</h1>
        <div className="branch-grid">
          <div className="branch">
            <img src={coimbatoreImg} alt="Coimbatore" />
            <h3 className='bc'>Coimbatore</h3>
            <p>Experience the vibrant city with a taste of our South Indian cuisine.</p>
          </div>
          <div className="branch">
            <img src={chennaiImg} alt="Chennai" />
            <h3 className='bc'>Chennai</h3>
            <p>Experience the vibrant city with a taste of our authentic cuisine.</p>
          </div>
          <div className="branch">
            <img src={bangaloreImg} alt="Bangalore" />
            <h3 className='bc'>Bangalore</h3>
            <p>Experience the vibrant city with a taste of our North Indian cuisine.</p>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Duke's Table</p>
        <p>"Dine like a Duke, feast like a king."</p>
        <p>Kovaipudur, Coimbatore</p>

        <div className="contact-icons">
          <a href="tel:+918220641028" aria-label="Phone">
            <FaPhone className="icon" />
          </a>
          <a href="https://www.instagram.com/krithickroshan_23?igsh=MWwyd2VlbXY1a3FmeQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064524747045&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="icon" />
          </a>
          <a href="dhanushkumarkaruppasamy@gmail.com" aria-label="Email">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;