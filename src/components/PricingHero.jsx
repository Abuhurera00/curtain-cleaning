import React from 'react'
import "../Styles/Pricing.css";
import bedroom from "../assets/bedroom.webp"

const PricingHero = () => {

    // const pricingCard = [
    //     { curtainhead: 'CURTAIN, DRAPERY, BLINDS CLEANING-ALTERATION- INSTALLATION PRICING' },
    //     { curtainbold: 'On average, dry-cleaning curtains costs 100 AED per curtain, while a window cleaning cost range can be between 180 AED and 400 AED. The cost of your home/apartment/villa curtain cleaning will ultimately be determined by the size of your window curtain treatments, the cleaning specifications, and the cost-of-living factors in your area.' },
    //     { curtainsmall: "No one likes dirty window curtains, but the treatment costs of dry-cleaning curtains can make some people wonder if it's worth it to try to wash their window treatments themselves. Professionally cleaning your curtains, drapes, or blinds will cost more than doing it yourself, but it will save you the time and trouble of figuring out how to get your curtains down and clean them." }
    // ]

    return (
        <>
            <div className='bed-container'>
                <div className="bed-image-container">
                    <img src={bedroom} alt="bedroom" className="bed-img" />
                </div>
                <div className="curtain-card-cont">
                    <div className='gradient'></div>
                    <div className="curtain-card">
                        <div className="col-wrap">
                            {/* {pricingCard.map((d, index) => ( */}
                                <div className="col">
                                    <h4 className="cleaning">CURTAIN, DRAPERY, BLINDS CLEANING-ALTERATION- INSTALLATION PRICING</h4><hr />
                                    <p className="bold-cont"><span className="bold">On average, dry-cleaning curtains costs 100 AED per curtain, while a window cleaning cost range can be between 180 AED and 400 AED. The cost of your home/apartment/villa curtain cleaning will ultimately be determined by the size of your window curtain treatments, the cleaning specifications, and the cost-of-living factors in your area.</span></p>
                                    <p className="small-cont"><span className="small">No one likes dirty window curtains, but the treatment costs of dry-cleaning curtains can make some people wonder if it's worth it to try to wash their window treatments themselves. Professionally cleaning your curtains, drapes, or blinds will cost more than doing it yourself, but it will save you the time and trouble of figuring out how to get your curtains down and clean them.</span></p>
                                </div>
                            {/* ))} */}
                        </div>
                    </div>
                </div>

            </div>

            <div className="money-back">
                <h4 className='moneyh4'>Money back guarantee curtain cleaning services in
                    dubai - abu dhabi - sharjah - ajman - al ain</h4>
            </div>
        </>
//         <>        
//         <div className="bed-container">
//             <div className="bedroom-cont">
//                 <article className="curtain-article">
//                     <img src={bedroom} alt="bedroom" className="curtain-img" />
                    
//                     <div className="curtain-data">
//                         <h4 className="curtain-heading">CURTAIN, DRAPERY, BLINDS CLEANING-ALTERATION- INSTALLATION PRICING</h4>
//                         <p className="curtain-bold">On average, dry-cleaning curtains costs 100 AED per curtain, while a window cleaning cost range can be between 180 AED and 400 AED. The cost of your home/apartment/villa curtain cleaning will ultimately be determined by the size of your window curtain treatments, the cleaning specifications, and the cost-of-living factors in your area.</p>
//                         <p className="curtain-small">No one likes dirty window curtains, but the treatment costs of dry-cleaning curtains can make some people wonder if it's worth it to try to wash their window treatments themselves. Professionally cleaning your curtains, drapes, or blinds will cost more than doing it yourself, but it will save you the time and trouble of figuring out how to get your curtains down and clean them.</p>
//                     </div>
//                 </article>
//             </div>
//         </div>


// <div className="money-back">
//                  <h4>Money back guarantee curtain cleaning services in
//                      dubai - abu dhabi - sharjah - ajman - al ain</h4>
//              </div>
//         </>

    )
}

export default PricingHero
