import React from 'react'
import "../Styles/Exclusive.css";
import VacuumingtheCouch from "../assets/VacuumingtheCouch.webp"
import CleanBed from "../assets/CleanBed.webp"
import VacuumingCouch from "../assets/VacuumingCouch.webp"
import CrochetCushion from "../assets/CrochetCushion.webp"
import VaccumCleaner from "../assets/VaccumCleaner.webp"
import WhiteCurtain from "../assets/WhiteCurtain.webp"

const ExclusiveCard = () => {
    return (
        <section className='Exclusive__card'>
          <div className="Exclusive__card__container">
            <div className="Exclusive__card__content">
              <div className='Exclusive__card__flex'>
                {data.map((d, index) => (
                  <article className='Exclusive__card__article' key={index}>
                    <div className="Exclusive__card__data">
                      <h3 className='Exclusive__card__name'>{d.heading}</h3>
                      </div>
                    <div className="Exclusive__card__image">
                      <img src={d.img} alt={d.heading} className="Exclusive__card__img" />
                      <div className="card__shadow"></div>
                    </div>
    
                    <div className="Exclusive__card__data"> 
                      <div className="btn-gap">
                      <a href="#" className='Exclusive__card__button'>Price</a>
                      <a href="#" className='Exclusive__card__button'>Book now</a>
                      </div>
                      <div className="des-gap">
                      <p className="Exclusive__card__description">{d.description}</p>
                      </div>
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
        heading: `Sofa Cleaning`,
        img: VacuumingtheCouch,
        description: `Experience the ultimate comfort and cleanliness with our professional sofa cleaning and sanitization service. Our skilled team will restore your sofa's beauty, removing dirt, stains, and allergens, all at an unbeatable price. Book now for a spotless and healthy living space.`
      },
      {
        heading: `Mattress Cleaning`,
        img: CleanBed,
        description: `Revitalize your sleep sanctuary with our professional mattress deep cleaning and sanitization service. Our expert technicians use cutting-edge equipment and eco-friendly products to eliminate dust mites, allergens, and bacteria that accumulate over time. Experience a fresh, hygienic mattress at an unbeatable price. Book now and sleep soundly with peace of mind.`
      },
      {
        heading: `Couch Cleaning`,
        img: VacuumingCouch,
        description: `Revive your couch's allure with our top-notch deep cleaning and sanitization service! Say goodbye to stains, odors, and hidden allergens as our skilled experts work wonders on your upholstery. Experience the ultimate comfort while saving big with our unbeatable prices. Don't miss the chance to transform your couch into a spotless sanctuary!`
      },
      {
        heading: `Cushion Cleaning`,
        img: CrochetCushion,
        description: `Experience the ultimate comfort with our cushion deep cleaning and steaming service. Enhance hygiene, eliminate allergens, and enjoy affordable prices. Book now!`
      },
      {
        heading: `Carpet Cleaning`,
        img: VaccumCleaner,
        description: `Regular carpet cleaning is vital for a healthy home. Our professional services remove dirt, allergens, and stains, ensuring a fresh and hygienic environment. Don't compromise your family's well-being—book our top-notch carpet cleaning service today for a spotless and inviting space you'll love coming home to.`
      },
      {
        heading: `Curtain Cleaning`,
        img: WhiteCurtain,
        description: `Welcome to our professional curtain cleaning services! We understand the importance of clean and fresh curtains in enhancing the overall look and feel of your space. Our comprehensive range of services is designed to cater to all your curtain maintenance needs. With our curtain dry cleaning service, we ensure a thorough cleaning process that removes dust, allergens, and stains, while preserving the fabric's quality. Our curtain washing service offers a deeper clean for heavier fabrics, effectively eliminating deep-seated dirt and odors. If you require alterations, our skilled team can handle curtain resizing, hemming, and repairs to ensure the perfect fit for your windows. For those seeking wrinkle-free curtains, our curtain steam pressing service guarantees a crisp and polished look. Trust us to revitalize your curtains and transform your living spaces. Experience the difference with our exceptional curtain cleaning services today!`
      },
    ]

export default ExclusiveCard
