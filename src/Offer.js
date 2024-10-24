import React from 'react';
import './Offer.css';

const offers = [
  {
    id: 1,
    dishName: 'Spaghetti Carbonara',
    realPrice: 1200.00,
    offerPrice: 800.00,
    offerPercent: 33,
    imageName: 'carbonara.jpg',
    description: 'Classic Italian pasta with creamy sauce and pancetta.'
  },
  {
    id: 2,
    dishName: 'Margherita Pizza',
    realPrice: 900.00,
    offerPrice: 600.00,
    offerPercent: 33,
    imageName: 'margherita.jpg',
    description: 'Simple yet delicious pizza with fresh tomatoes and basil.'
  },
];

function Offer() {
  return (
    <div className="offer-page">
      <h1>Special Offers</h1>
      <div className="offers">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img
              src={`/images/${offer.imageName}`}  
              alt={offer.dishName}
              className="offer-image"
            />
            <div className="offer-details">
              <h2>{offer.dishName}</h2>
              <p className="description">{offer.description}</p>
              <p className="price">
                <span className="real-price">₹{offer.realPrice.toFixed(2)}</span>
                <span className="offer-price">₹{offer.offerPrice.toFixed(2)}</span>
                <span className="offer-percent">({offer.offerPercent}% off)</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
