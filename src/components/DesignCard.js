import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure you have this import for Bootstrap Icons
import '../styles/DesignCard.css';

const DesignCard = ({ image, title, size, onBook, onGetQuote }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="design-card">
      <img src={image} alt={title} className="design-card__image" />
      <div className="design-card__body">
        <h3 className="design-card__title">{title}</h3>
        <p className="design-card__size">Size: {size}</p>
        <div className="design-card__actions">
          <button className="design-card__btn book-btn" onClick={onBook}>Book Free Consultation</button>
          <button className="design-card__btn quote-btn" onClick={onGetQuote}>Get Quote</button>
        </div>
        <div className={`design-card__favorite ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}>
          <i className="bi bi-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
