import React from 'react'
import "../Styles/main.css"
import galleryimg from "../assets/galleryimg.webp"


const Quality = () => {
    return (
        <div id='blog-section' className="blog-main">
            <h1 className="welcome">Welcome</h1>
            <div className="blog-main-gap">
                <div className="blog-container">
                    <div className="blog-img-cont">
                        <img src={galleryimg} alt="When Quality Reliability Service Are The Key Factors" className="img-gallery" />
                    </div>
                    <div className="content">
                        <div className="essay">
                            <span className="essay-span">
                                CurtainCleaning.AE is a leading professional & reliable curtain cleaner company in UAE. We provide expert services for commercial & residential projects. Our services are curtain washing, curtain dry-cleaning, repairing, fixing, removing, and alteration. All types of curtains like blackout, drapery, fancy curtains, silk, voile, cotton, polyester, etc. can be cleaned by our specialists with confidence. We offer free estimate visits with the cheapest price and excellent turnaround time.  We cover all areas of Dubai, Abu Dhabi, Sharjah, Ajman, and Al Ain as well. Our team provides FREE pickup & delivery service too.
                            </span>
                        </div>
                        <div>
                            <button className="schdule-pickup-button read-more">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality
