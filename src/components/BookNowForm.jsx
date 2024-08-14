// import React from 'react'
// import officemeeting from "../assets/officemeeting.webp"

// const BookNowForm = () => {
//   return (
//     <section className="contact-section">
//         <div className="contact-container">
//             <div className="form-container">
//                 <h2>Write us on curtaincleaning.ae@gmail.com<br/>or fill the form below</h2>
//                 <form>
//                     <input type="text" placeholder="Name"/>
//                     <input type="email" placeholder="Email"/>
//                     <input type="tel" placeholder="Phone"/>
//                     <input type="text" placeholder="Address"/>
//                     <textarea placeholder="Type your message here..."></textarea>
//                     <button type="submit" className="schdule-pickup-button read-more">Get Free Quote!</button>
//                 </form>
//             </div>
//             <div className="info-container">
//                 <div className="sales">
//                 <h3>Sales Office:</h3>
//                 <p className='llc'>Best Curtain Cleaner L.L.C</p><br/>
//                 <p className='elite'>Office 604-7, Elite Business Centre,<br/>
//                 Al Barsha-1, Al Barsha - Dubai<br/>
//                 Contact: +971 54 716 5954</p>
//                 </div>
//             <div className="booknow-image">
//                 <img src={officemeeting} alt="officemeeting"/>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default BookNowForm



































































import React, { useState,useEffect } from 'react';
import officemeeting from "../assets/officemeeting.webp";
import axios from 'axios';

const BookNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Function to clear response message after 5 seconds
    const timeoutId = setTimeout(() => {
      setResponseMessage('');
      setIsError(false);
    }, 5000);

    // Clear timeout when component unmounts or when responseMessage changes
    return () => clearTimeout(timeoutId);
  }, [responseMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
     e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', formData);
      if(res.status>=200){
        setResponseMessage('Booking successful! Thank you for contacting us.');
      setIsError(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      }else {
        // Error: Display error message to the user
        setResponseMessage('there was an error submitting your booking. Please try again.');
        setIsError(true);
      }
    } catch (err) {
      setResponseMessage('there an error submitting your booking. Please try again.');
      setIsError(true);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="form-container">
          <h2>Write us on curtaincleaning.ae@gmail.com<br />or fill the form below</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="schdule-pickup-button read-more">Get Free Quote!</button>
          </form>
          {responseMessage && (
            <p className={isError ? 'error-message' : 'success-message'}>
              {responseMessage}
            </p>
          )}
        </div>
        <div className="info-container">
          <div className="sales">
            <h3>Sales Office:</h3>
            <p className='llc'>Best Curtain Cleaner L.L.C</p><br />
            <p className='elite'>Office 604-7, Elite Business Centre,<br />
              Al Barsha-1, Al Barsha - Dubai<br />
              Contact: +971 54 716 5954</p>
          </div>
          <div className="booknow-image">
            <img src={officemeeting} alt="officemeeting" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookNowForm;
