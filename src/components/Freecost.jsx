import React from 'react'
import "../Styles/main.css";
import deepclean from "../assets/deepclean.jpg"

const Freecost = () => {
    const freeCostData = [
        {
            bgimg: deepclean,
            bgHeading: `Get a Free Cost Estimation`,
            bgPara: `Everything we do is designed to make your experience as enjoyable and painless as possible. Always at your service, our expertly trained curtain cleaners over deliver every time. We realize that you’re busy and don’t have time for things like curtain cleaning. We are only too happy to help get that pressure off your shoulders by giving you a hassle-free quote for your curtains.`
        }
    ]
  return (
    <section className='free-cost'>
        {freeCostData.map((d, index)=>(
            <div className="bg-container" key={index}>
            <div className="bg-heading">
                <h2 className='bg-heading-inner'>{d.bgHeading}</h2>
            </div>
            <div className="bg-para">
                <p className='bg-para-inner'>{d.bgPara}</p>
            </div>
            <div className="bg-btn">
            <button className="schdule-pickup-button read-more">Get a Quote now</button>
            </div>
            <div className="bg-icon">
                <a href='#' className="fb"><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#' className="in"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href='#' className="insta"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        ))}
      
    </section>
  )
}

export default Freecost
