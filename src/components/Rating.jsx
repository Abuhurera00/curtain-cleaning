import React from 'react';
import "../Styles/main.css";

const Rating = () => {
  return (
    <div className="rating">
        <div className="rating-gap">
      <div className="rating-heading">
        <h1>Rating 5 out of 5</h1>
      </div>
      <div className="arrow-btn">
        <a href="#blog-section">
      <div className="scroll-button">
        <div className="mouse-icon">
            <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
    </div>
    </a>
      </div>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i className="fa-solid fa-star" key={i}></i>
            ))}
          </div>
          </div>
    </div>
  );
};

export default Rating;
