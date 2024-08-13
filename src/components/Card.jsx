// import React from 'react'
// import "../Styles/main.css"
// import Laundrette from "../assets/Laundrette.webp"
// import Lace from "../assets/Lace.webp"
// import GarmentSteamer from "../assets/GarmentSteamer.webp"
// import CurtainFixing from "../assets/CurtainFixing.webp"
// import SewingMachine from "../assets/SewingMachine.webp"
// import Commercial from "../assets/Commercial .webp"

// const Card = () => {
//   return (
//     <section className='container'>
//         <div className="card__container">
//         <h2 className='welcome pd-top'>Our Services</h2>
//           <div className="card__content">
//             <div className='card__flex'>
//               <article className='card__article'>
//               <div className="card__image">
//                 <img src={Laundrette} alt="Laundrete" className="card__img" />
//                 <div className="card__shadow"></div>
//               </div>

//               <div className="card__data">
//                 <h3 className='card__name'>Curtain Washing</h3>
//                 <p className="card__description">Get your curtain, drapery & blinds refresh & cleaned with our curtain wash service.
//                 </p>
//                 <a href="#" className='card__button'>Price</a>
//               </div>
//               </article>

//               <article className='card__article'>
//               <div className="card__image">
//                 <img src={Lace} alt="Lace" className="card__img" />
//                 <div className="card__shadow"></div>
//               </div>

//               <div className="card__data">
//                 <h3 className='card__name'>Curtain Dry Cleaning</h3>
//                 <p className="card__description">Need extra care? Get our cost-effective & high-precision curtain dry cleaning service.
//                 </p>
//                 <a href="#" className='card__button'>Price</a>
//               </div>
//               </article>

//               <article className='card__article'>
//               <div className="card__image">
//                 <img src={GarmentSteamer} alt="GarmentSteamer" className="card__img" />
//                 <div className="card__shadow"></div>
//               </div>

//               <div className="card__data">
//                 <h3 className='card__name'>Curtain Steam Pressing</h3>
//                 <p className="card__description">Get steam-press your curtains for a beautiful pressed look at an affordable rate. 100% satisfaction guarantee.
//                 </p>
//                 <a href="#" className='card__button'>Price</a>
//               </div>
//               </article>

//               <article className='card__article'>
//               <div className="card__image">
//                 <img src={CurtainFixing} alt="CurtainFixing" className="card__img" />
//                 <div className="card__shadow"></div>
//               </div>

//               <div className="card__data">
//                 <h3 className='card__name'>Curtain Fixing</h3>
//                 <p className="card__description">We provide you the installation and de-instaletion service. No need to worry about hanging your curtains even after clean curtain deliver to your door step. our expert team will do this for you.
//                 </p>
//                 <a href="#" className='card__button'>Price</a>
//               </div>
//               </article>

//               <article className='card__article'>
//               <div className="card__image">
//                 <img src={SewingMachine} alt="SewingMachine" className="card__img" />
//                 <div className="card__shadow"></div>
//               </div>

//               <div className="card__data">
//                 <h3 className='card__name'>Curtain Alternation</h3>
//                 <p className="card__description">Get your curtain repair or alter by our Curtain Alteration service at cheapest price in UAE. Contact us!
//                 </p>
//                 <a href="#" className='card__button'>Price</a>
//               </div>
//               </article>

//               <article className='card__article'>
//               <div className="card__image">
//                 <img src={Commercial} alt="Commercial" className="card__img" />
//                 <div className="card__shadow"></div>
//               </div>

//               <div className="card__data">
//                 <h3 className='card__name'>Commercial Curtain Cleaning</h3>
//                 <p className="card__description">We are offering the commercial curtain cleaning service to Hotels, Restaurents, Hospitals etc.
//                 </p>
//                 <a href="#" className='card__button'>Price</a>
//               </div>
//               </article>


//             </div>
//           </div>
//         </div>
//     </section>
//   )
// }

// export default Card






















import React from 'react'
import "../Styles/main.css"
import Laundrette from "../assets/Laundrette.webp"
import Lace from "../assets/Lace.webp"
import GarmentSteamer from "../assets/GarmentSteamer.webp"
import CurtainFixing from "../assets/CurtainFixing.webp"
import SewingMachine from "../assets/SewingMachine.webp"
import Commercial from "../assets/Commercial .webp"


const Card = () => {
  return (
    <section className='container'>
      <div className="card__container">
        <h2 className='welcome pd-top'>Our Services</h2>
        <div className="card__content">
          <div className='card__flex'>
            {data.map((d, index) => (
              <article className='card__article' key={index}>
                <div className="card__image">
                  <img src={d.img} alt={d.heading} className="card__img" />
                  <div className="card__shadow"></div>
                </div>

                <div className="card__data">
                  <h3 className='card__name'>{d.heading}</h3>
                  <p className="card__description">{d.description}</p>
                  <a href="#" className='card__button'>Price</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    heading: `Curtain Washing`,
    img: Laundrette,
    description: `Get your curtain, drapery & blinds refresh & cleaned with our curtain wash service.`
  },
  {
    heading: `Curtain Dry Cleaning`,
    img: Lace,
    description: `Need extra care? Get our cost-effective & high-precision curtain dry cleaning service.`
  },
  {
    heading: `Curtain Steam Pressing`,
    img: GarmentSteamer,
    description: `Get steam-press your curtains for a beautiful pressed look at an affordable rate. 100% satisfaction guarantee.`
  },
  {
    heading: `Curtain Fixing`,
    img: CurtainFixing,
    description: `We provide you the installation and de-installation service. No need to worry about hanging your curtains even after clean curtain deliver to your doorstep. our expert team will do this for you.`
  },
  {
    heading: `Curtain Alternation`,
    img: SewingMachine,
    description: `Get your curtain repair or alter by our Curtain Alteration service at cheapest price in UAE. Contact us!`
  },
  {
    heading: `Commercial Curtain Cleaning`,
    img: Commercial,
    description: `We are offering the commercial curtain cleaning service to Hotels, Restaurants, Hospitals etc.`
  },
]

export default Card
