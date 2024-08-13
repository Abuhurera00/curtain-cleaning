import React from 'react'
import "../Styles/Pricing.css";

const PricingFAQ = () => {
//    const faqData = [
//     {
//         faq: "FAQ",

//     }
//    ]

  return (
    <div className='pricing-faq'>
      <div className="faq-wrap">
        <div className="faq-width">
        <div className="faq">
            <h1>FAQ's</h1>
        </div>

        <div className="Query">
            <div className="q-wrap">
            <p className="question">How to calculate the price for curtain cleaning?</p>
            <p className="answer">First, you need to get the curtain cleaning area size for that purpose measure the curtain height & width. Then multiply both numbers (Height*Width), and the outcome will be the size of the cleaning area.Multiply the area by the above-given price.For example; I have a blackout curtain and my curtain height is 3 meter and width is 2.5 meters. The cleaning area size will be 3*2.5 meters = 7.5 square meters. And the cleaning cost will be 7.5 * 12 = 90 AED Only.</p>
            </div>
            <div className="q-wrap">
            <p className="question">How to measure exact curtain size for cleaning?</p>
            <p className="answer">It can be done with help of another person. To measure the width hold the customer from both ends of the width and stretch it, Measurements should be without pleats, and with measuring tape you can now get the actual width of the curtain. Repeat the process to calculate the height as well.If you require assistance here,  please schedule a free visit to get an estimate.</p>
            </div>
            <div className="q-wrap">
            <p className="question">What other service do you provide other than cleaning?</p>
            <p className="answer">You can avail our on-deman service curtain installation, de-installation other than curtain cleaning & curtain alteration services. We also provide free esimate visit and free pickup & delivery service.</p>
            </div>
            <a href="#" className="schdule-pickup-button read-more">Read More</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PricingFAQ
