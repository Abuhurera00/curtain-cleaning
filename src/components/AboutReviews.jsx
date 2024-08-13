// import React from 'react'
// import "../Styles/Aboutus.css"

// const AboutReviews = () => {
//     // const Reviews = [
//     //     {
//     //         person: 'Honey',
//     //         city: "dubai",
//     //         comments: "Satisfying and professional services,They are providing the complete services from removal to installation, Repairing to strip replacementExtremely happy 😊,100% recommended"
//     //     }
//     // ]


//     return (
//         <section id='testimonials'>
//             <div className="testimonial-box-container">
//                 <div className="testimonial-box">
//                     <div className="box-top">
//                         <div className="profile">
//                             <div className="name-user">Honey</div>
//                         </div>
//                         <div className="reviews">
//                             <div className="stars">
//                                 {[...Array(5)].map((_, i) => (
//                                     <i className="fa-solid fa-star" key={i}></i>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="city">
//                             <div className='name-city'>Dubai</div>
//                         </div>
//                     </div>

//                     <div className="client-comments">
//                         <p>Satisfying and professional services</p>
//                         <p>They are providing the complete services from removal to installation</p>
//                         <p>Repairing to strip replacement</p>
//                         <p>Extremely happy 😊</p>
//                         <p>100% recommended</p>

//                     </div>
//                 </div>


//                 <div className="testimonial-box">
//                     <div className="box-top">
//                         <div className="profile">
//                             <div className="name-user">Renee Pattle</div>
//                         </div>
//                         <div className="reviews">
//                             <div className="stars">
//                                 {[...Array(5)].map((_, i) => (
//                                     <i className="fa-solid fa-star" key={i}></i>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="city">
//                             <div className='name-city'>Springs</div>
//                         </div>
//                     </div>

//                     <div className="client-comments">
//                         <p>Your team arrived on time for both the quoting and to do the job. They were friendly and professional</p>

//                     </div>
//                 </div>


//                 <div className="testimonial-box">
//                     <div className="box-top">
//                         <div className="profile">
//                             <div className="name-user">Ahmad</div>
//                         </div>
//                         <div className="reviews">
//                             <div className="stars">
//                                 {[...Array(5)].map((_, i) => (
//                                     <i className="fa-solid fa-star" key={i}></i>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="city">
//                             <div className='name-city'>Jumeirah</div>
//                         </div>
//                     </div>

//                     <div className="client-comments">
//                         <p>A+ service!</p>
//                         <p>I was really impressed with the curtain cleaning service I used.</p>
//                         <p>They did a thorough job, and they were punctual for delivery. They also offer complete curtain solutions—not just cleaning but also alterations and repairs.</p>
//                         <p>I booked a cleaning & alteration service for my blackout curtains, and they did an amazing job on them. The curtains look like new! I definitely recommend them. :-)</p>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutReviews

























































import React from 'react';
import "../Styles/Aboutus.css";

const AboutReviews = () => {
    const reviews = [
        {
            person: 'Honey',
            city: 'Dubai',
            comments: [
                'Satisfying and professional services',
                'They are providing the complete services from removal to installation',
                'Repairing to strip replacement',
                'Extremely happy 😊',
                '100% recommended'
            ]
        },
        {
            person: 'Renee Pattle',
            city: 'Springs',
            comments: [
                'Your team arrived on time for both the quoting and to do the job. They were friendly and professional'
            ]
        },
        {
            person: 'Ahmad',
            city: 'Jumeirah',
            comments: [
                'A+ service!',
                'I was really impressed with the curtain cleaning service I used.',
                'They did a thorough job, and they were punctual for delivery. They also offer complete curtain solutions—not just cleaning but also alterations and repairs.',
                'I booked a cleaning & alteration service for my blackout curtains, and they did an amazing job on them. The curtains look like new! I definitely recommend them. :-)',
            ]
        }
    ];

    return (
        <section id='testimonials'>
            <div className="testimonial-box-container">
                {reviews.map((review, index) => (
                    <div className="testimonial-box" key={index}>
                        <div className="box-top">
                            <div className="profile">
                                <div className="name-user">{review.person}</div>
                            </div>
                            <div className="reviews">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i className="fa-solid fa-star" key={i}></i>
                                    ))}
                                </div>
                            </div>
                            <div className="city">
                                <div className='name-city'>{review.city}</div>
                            </div>
                        </div>

                        <div className="client-comments">
                            {review.comments.map((comment, idx) => (
                                <p key={idx}>{comment}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button className="schdule-pickup-button read-more">Leave a Review</button>
            </div>
        </section>
    );
}

export default AboutReviews;
