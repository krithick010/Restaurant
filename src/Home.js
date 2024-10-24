import React, { useState } from 'react';
import booking from './Untitled.mp4';
import './Home.css';

const Home = () => {
  const [explore, setExplore] = useState(false);

  const handleExploreClick = () => {
    setExplore(true);
    scrollToSection('explore-section');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="homepage">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={booking} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best dining with us</p>
        {!explore && (
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore
          </button>
        )}
      </div>

      {explore && (
        <div id="explore-section" className="explore-content">
          <h2>Discover Our Specialties</h2>
          <p>
            At our restaurant, we offer a variety of dishes made with the
            freshest ingredients. Whether you're looking for a gourmet meal or
            something more casual, we have something for everyone.
          </p>
          <ul className="specialties-list">
            <li>Authentic Italian Pasta</li>
            <li>Grilled Seafood Platter</li>
            <li>Wood-fired Pizzas</li>
            <li>Chef’s Signature Desserts</li>
            <li>Exquisite Wine Selection</li>
          </ul>
          <button className="booking-btn">Make a Reservation</button>
          <button className="back-btn" onClick={() => setExplore(false)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Home;