import React from 'react'
import "../Styles/Aboutus.css"
import Aboutusexperience from "../assets/Aboutusexperience.webp"
import customerhappines from "../assets/customerhappines.webp"
import payment from "../assets/payment.webp"

const Aboutarticle = () => {
    return (
        <section className="article-section">
            <div className="article-container">
                <div className="article-content">
                    <div className="article-main">
                        <div className="article-main-gap">
                            <div className="transform-content-container">
                                <div className="border-container">
                                    <div className="empty-div">
                                    </div>
                                    <div className="about-image">
                                        <img src={Aboutusexperience} alt="Aboutusexperience" />
                                    </div>
                                </div>
                                <div className="about-content">
                                    <div className="client-rating">
                                        5.0
                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <i className="fa-solid fa-star" key={i}></i>
                                            ))}
                                            5 rating
                                        </div>
                                    </div>
                                    <h2 className="cleaning">Best Curtain Cleaner In Dubai</h2>
                                    <div className="about-essay">
                                        <span className="about-essay-span">
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
                </div>
            </div>





            <div className="article-container">
                <div className="article-content">
                    <div id='blog-section' className="article-main">
                        <div className="article-main-gap">
                            <div className="transform-content-container">
                                <div className="border-container border-width">
                                    <div className="empty-div">
                                    </div>
                                    <div className="about-dual-image">
                                        <img src={payment} alt="payment" className='payment' />
                                        <img src={customerhappines} alt="customerhappines" className='customer' />
                                    </div>
                                </div>
                                <div className="about-content">
                                    <h2 className="cleaning">Simple, Convenient & Affordable</h2>
                                    <div className="about-essay">
                                        <span className="about-essay-span">

                                            About Us
                                            Our family-run business has been providing professional curtain cleaning services for UAE residents since 2011. We have grown to be one of the leading providers in the area, and we pride ourselves on our hard-working team of professionals who know how to get the job done right.

                                            We provide complete curtain cleaning services, including drapery steam cleaning, window blinds cleaning, roman shades cleaning, valances cleaning, curtain steam pressing, curtain repair & alteration, curtain washing, and more.

                                            We specialize in dry cleaning techniques and are dedicated to using environmentally friendly products that are safe for both you and your home environment.

                                            Best Curtain Cleaner In Dubai
                                            5.0
                                            5 Rating
                                            average rating is 5 out of 5, based on 5 votes, Rating
                                            At CurtainCleaning.AE, we believe that every customer deserves to be treated with care and respect.



                                            That's why we offer a dedicated team of customer service representatives who work 24 hours a week on your behalf. Our team is here to make sure you're satisfied with our services, and our guarantee means you can rest easy knowing that if you're not happy, someone will be on the phone to help.



                                            We also take pride in being environmentally conscious. All of our cleaning solutions are environment-friendly, and when you use our services, you can rest assured that your home will be safe from toxic chemicals and other harmful substances.

                                            And because we want to make sure you get the most out of your experience with us, we offer a five-star curtain cleaning rating in Dubai—so you know that when it comes to keeping your curtains sparkling clean and fresh-smelling, no one beats us!



                                            You can pay easily using a credit card online when scheduling an appointment or booking pickup or delivery service, so there are no high fees or hidden costs involved. You can even get free estimates from our experts before making a purchase!
                                        </span>
                                    </div>
                                    <div>
                                        <button className="schdule-pickup-button read-more">Read More</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutarticle
