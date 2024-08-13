// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import YoungFemaleStudent from "../assets/YoungFemaleStudent.webp"

// const Client = () => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//   return (
//     <div className='center-container'>
//       <div className="client-margin">
//       <Slider {...settings}>
//         {clientData.map((d=>(
//              <div className="client-container">
//              <div className="client-rating">5.0<div className="stars">
//             {[...Array(5)].map((_, i) => (
//               <i className="fa-solid fa-star" key={i}></i>
//             ))}5 rating 
//           </div></div>
//              <h2 className="welcome client-says">What our clients are saying</h2>
//              <div className="about-client">
//                  <div className="client-image">
//                  <img src={d.img} alt="" className="client-img" />
//                  <h2>{d.name}</h2>
//                  </div>
 
//                  <div className="client-remarks">
//                      <p className="client-para">{d.remarks}</p>
//                  </div>
//              </div>
//          </div>
//         )))}
//        </Slider>

//       </div>
//     </div>
//   )
// }



// const clientData = [
//     {
//         name: `Marian S`,
//         img : YoungFemaleStudent,
//         remarks: `Great people, always friendly and willing to help. They're very punctual and have great prices! I can only recommend them:)))`
//     },
//     {
//         name: `Muhammad Faris`,
//         img : YoungFemaleStudent,
//         remarks: `I have worked with this business for many years and am so happy with all their staff and professional work. They are all there to help us, the customers, and that is what I like. I am referring them to my friends who also need curtain cleaning too.`
//     },
//     {
//         name: `Fatima Shaheen`,
//         img : YoungFemaleStudent,
//         remarks: `I found this company online and decided to give them a try. They were very easy to deal with and did well with the cleaning job. What I liked best were the customer service and their fast response time. The price wasn't too high either which is always nice! Go ahead and contact them if you need some window curtain treatments cleaned!`
//     },
//     {
//         name: `Muhammad`,
//         img : YoungFemaleStudent,
//         remarks: `Sincerely, I am very surprised to see the negative reviews about these guys. I have been using them for almost 3 years, and I can say that they are absolutely the Best in their service. I totally recommend them for curtain cleaning services in Dubai. The initial quote was very good and after seeing their work, I was more than convinced.

//         `
//     },
//     {
//         name: `Devid`,
//         img : YoungFemaleStudent,
//         remarks: `My curtains were dusty and had some stains. I gave a call to this service provider, they came to my home and cleaned my curtains. It was a good experience because they delivered and picked up at home as well. They cleaned the stains perfectly and gave professional service with affordable price in Dubai.`
//     },
//     {
//         name: `Sheena`,
//         img : YoungFemaleStudent,
//         remarks: `Needed a curtain cleaning company who can provide me with top-notch services at reasonable rates. thankfully i found this service who offers the best cleaning services at affordable rates.`
//     },
//     {
//         name: `Veshali`,
//         img : YoungFemaleStudent,
//         remarks: `If you are looking for an experienced and professional curtain cleaning service in Dubai, then look no further! Decorate Like a Lady is the best choice for your curtains.`
//     },
// ]

// export default Client



















import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/main.css";
import YoungFemaleStudent from "../assets/YoungFemaleStudent.webp";
import SeniorManPortrait from "../assets/SeniorManPortrait.webp";
import Workatthedesk from "../assets/Workatthedesk.webp";
import Businessman from "../assets/Businessman.webp";
import HappyGrandparents from "../assets/HappyGrandparents.webp";
import BeautifulGirl from "../assets/BeautifulGirl.webp";
import GirlEnjoyingherDrink from "../assets/GirlEnjoyingherDrink.webp";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`next-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`prev-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}











const Client = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000 ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  // };

  const clientData = [
    {
      name: `Marian S`,
      img: YoungFemaleStudent,
      remarks: `I found this company online and decided to give them a try. They were very easy to deal with and did well with the cleaning job. What I liked best were the customer service and their fast response time. The price wasn't too high either which is always nice! Go ahead and contact them if you need some window curtain treatments cleaned!`
    },
    {
      name: `Muhammad Faris`,
      img: SeniorManPortrait,
      remarks: `I have worked with this business for many years and am so happy with all their staff and professional work. They are all there to help us, the customers, and that is what I like. I am referring them to my friends who also need curtain cleaning too.`
    },
    {
      name: `Fatima Shaheen`,
      img: Workatthedesk,
      remarks: `I found this company online and decided to give them a try. They were very easy to deal with and did well with the cleaning job. What I liked best were the customer service and their fast response time. The price wasn't too high either which is always nice! Go ahead and contact them if you need some window curtain treatments cleaned!`
    },
    {
      name: `Muhammad`,
      img: Businessman,
      remarks: `Sincerely, I am very surprised to see the negative reviews about these guys. I have been using them for almost 3 years, and I can say that they are absolutely the Best in their service. I totally recommend them for curtain cleaning services in Dubai. The initial quote was very good and after seeing their work, I was more than convinced.`
    },
    {
      name: `Devid`,
      img: HappyGrandparents,
      remarks: `My curtains were dusty and had some stains. I gave a call to this service provider, they came to my home and cleaned my curtains. It was a good experience because they delivered and picked up at home as well. They cleaned the stains perfectly and gave professional service with affordable price in Dubai.`
    },
    {
      name: `Sheena`,
      img: BeautifulGirl,
      remarks: `Needed a curtain cleaning company who can provide me with top-notch services at reasonable rates. thankfully i found this service who offers the best cleaning services at affordable rates.`
    },
    {
      name: `Veshali`,
      img: GirlEnjoyingherDrink,
      remarks: `If you are looking for an experienced and professional curtain cleaning service in Dubai, then look no further! Decorate Like a Lady is the best choice for your curtains.`
    },
  ];

  return (
    <div className='center-container'>
      <div className="client-margin">
        <Slider {...settings}>
          {clientData.map((d, index) => (
            <div className="client-container" key={index}>
              <div className="client-rating">
                5.0
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                  5 rating
                </div>
              </div>
              <h2 className="welcome client-says">What our clients are saying</h2>
              <div className="about-client">
                <div className="client-image">
                  <img src={d.img} alt={d.name} className="client-img" />
                  <h2 className='client-name'>{d.name}</h2>
                </div>
                <div className="client-remarks">
                  <p className="client-para">{d.remarks}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
