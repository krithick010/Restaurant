import React, { useState } from 'react';
import './Booking.css';
import bookingvdo from './bookingvdo.mp4';

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    guests: '',
  });

  const handleChange = (e) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${bookingDetails.name}`);
  };

  return (
    <div className="booking-page">
      <video className="booking-video" autoPlay loop muted>
        <source src={bookingvdo} type="video/mp4" />
      </video>
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Make a Reservation</h2>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={bookingDetails.date}
          onChange={handleChange}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          value={bookingDetails.time}
          onChange={handleChange}
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={bookingDetails.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={bookingDetails.email}
          onChange={handleChange}
        />
        <label>Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={bookingDetails.guests}
          onChange={handleChange}
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
