import React from 'react'
import "../Styles/Exclusive.css";
import sofabedroom from "../assets/sofabedroom.webp"

const ExclusiveHero = () => {
  return (
    <div className="exclusive-image-container">
            <img src={sofabedroom} alt='sofabedroom' /> 
            <div className="exclusive-overlay"></div>
            <div className="exclusive-text-overlay">
                <h1 className="exclusive-hero-heading">Exclusive Services</h1>
            </div>
        </div>
  )
}

export default ExclusiveHero
