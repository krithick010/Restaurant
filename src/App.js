import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Booking from './Booking';
import AboutUs from './AboutUs';
import Offer from './Offer';
import RestaurantAdmin from './RestaurantAdmin'; // For CRUD
import Menu from './Menu'; // Import Menu component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin" element={<RestaurantAdmin />} /> {/* Admin CRUD */}
          <Route path="/menu" element={<Menu />} /> {/* Menu CRUD */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;