import React from "react";
import "../Styles/main.css";
import curtain from "../assets/curtain.mp4";
import wattsapp from "../assets/wattsapp.webp"

const Hero = () => {
    return (
        <div className="video-container">
            <div className="overlay"></div>
            <video src={curtain} autoPlay loop muted />
            <div className="text-overlay">
                <span className="heading-overlay">Curtain CLEANING</span>
                <span className="heading-overlay">DUBAI</span>
                <p className="para-over">PROFESSIONAL & RELIABLE | FREE PICKUP &</p>
                    <p className="para-over">DELIVERY | FREE ESTIMATE VISIT</p>
                    <div className="wattsapp-btn">
                    <div className="watts-span"><img src={wattsapp} alt="wattsapp" className="watts-icon" /></div>
                    <div>
                    <button className="schdule-pickup-button">Schdule Pickup</button>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Hero;
