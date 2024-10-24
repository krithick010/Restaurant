import React, { useState, useEffect } from 'react';
import './RestaurantAdmin.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API

const RestaurantAdmin = () => {
  const [offers, setOffers] = useState([]);
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [editingId, setEditingId] = useState(null);

  // GET data
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setOffers(data.slice(0, 10))); // Limit to 10 items
  }, []);

  // POST new data
  const handleAdd = (e) => {
    e.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => setOffers([...offers, data]));
  };

  // DELETE data
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })  // Fixed template literal usage
      .then(() => setOffers(offers.filter(offer => offer.id !== id)));
  };

  // PUT (Update) data
  const handleUpdate = (id) => {
    fetch(`${API_URL}/${id}`, {  // Fixed template literal usage
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(updatedItem => {
        const updatedOffers = offers.map(offer =>
          offer.id === id ? updatedItem : offer
        );
        setOffers(updatedOffers);
        setEditingId(null);
      });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="restaurant-admin">
      <h1>Restaurant Offers (Admin)</h1>
      <form onSubmit={editingId ? () => handleUpdate(editingId) : handleAdd}>
        <input
          type="text"
          name="title"
          placeholder="Offer Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          placeholder="Offer Details"
          value={formData.body}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Update Offer' : 'Add Offer'}</button>
      </form>

      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            <h2>{offer.title}</h2>
            <p>{offer.body}</p>
            <button onClick={() => setEditingId(offer.id)}>Edit</button>
            <button onClick={() => handleDelete(offer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantAdmin;
