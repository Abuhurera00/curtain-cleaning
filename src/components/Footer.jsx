// import React from 'react'
// import "../Styles/main.css";
// // import slidesfooter from "../assets/slidesfooter.svg"
// import visaonline from "../assets/visaonline.webp"

// const Footer = () => {
  
//   const footerNav = [
//     {
//       list: `Curtain Cleaning Pricing`
//     },
//     {
//       list: `Sofa Mattress Carpet Cleaning Pricing`
//     },
//     {
//       list: `Services`
//     },
//     {
//       list: `Book Now`
//     },
//     {
//       list: `Terms & Conditions`
//     }
//   ]




//   return (
//     <div>
//       <div className="footer">

//         <div className="footer-top-container">
//           <div className="footer-top">
//             <div className="input-container">
//             <span><i className="fa-solid fa-magnifying-glass"></i></span>
//               <input type="text" name='text' id='text' className='input-text' placeholder='Search...' />
//             </div>
//             <div className='border'></div>

//            <div className="quick-cont">
//             <li className='quick-li'><a className='quick-anchor' href='/'>Quick Links</a></li>
//            </div>
//            <div className='border'></div>

//            <div className="visa-cont">
//             <img src={visaonline} alt="visaonline" className='visa-img' />
//            </div>
//           </div>

//           <div className="footer-nav">
//             {footerNav.map((d, index) =>(
//                <div className="quick-cont" key={index}>
//                <li className='quick-li'><a className='quick-anchor' href='/'>{d.list}</a></li>
//               </div>
//             ))}
//           </div>



//         <div className="best-curtain">
//           <h2 className='h2-heading'><a href='#' className='h2-anchor'>Best Curtain Cleaner L.L.C</a></h2>
//         </div>

//         <div className="footer-box">
//           <div className="footer-box1">
//             <h3 className="footer-heading">
//               <span className='box-span'>We are available to serve you near in Abu Dhabi - Dubai - Sharjah - Ajman - Al Ain</span>
//             </h3>
//           </div>
//           <div className="center-arrow"></div>
//         </div>



//         <div className="mega-footer">
//         <div className="footer-container">
//           <div className="row">
//             <div className="footer-col">
//               <h4>company</h4>
//               <ul className="uo-list">
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>company</h4>
//               <ul className="uo-list">
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>company</h4>
//               <ul className="uo-list">
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>company</h4>
//               <ul className="uo-list">
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//                 <li><a href="#">about us</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         </div>

//         </div>



//       </div>
//     </div>
//   )
// }

// export default Footer












































import React from 'react';
import "../Styles/main.css";
import visaonline from "../assets/visaonline.webp";

const Footer = () => {
  const footerNav = [
    'Curtain Cleaning Pricing',
    'Sofa Mattress Carpet Cleaning Pricing',
    'Services',
    'Book Now',
    'Terms & Conditions'
  ];

  const footerSections = [
    {
      title: "Area's in Abu Dhabi",
      links: ['Mussafah','Mohamed Bin Zayed City','Khalifa City','Al Mafraq','Shbiya','Al Shawamekh','Al Shamkha','Shakhboot City','Baniyas','Al Reef Village','Yas Island','Al Jubail Island',' Saadiyat Island','Al Reem Island','Al Raha Beach','Masdar City','Al Maqta','Sas Al Nakhl','Al Rawdah','Al Mushrif','Al Manhal','Al Bateen','Al Nahyan','Al Khalidiyah','Al Marina','Al Danah']
    },
    {
      title: "Area's in Dubai",
      links: ['Palm Jebel Ali','The Palm Jumeirah','Mina Jebel Ali','Dubai Marina','Jumeirah','Mirdif','Al Warqa',' Dubai Silicon Oasis','Academic City','Liwan','The Villa','Wadi Al Safa','Falcon City of Wonders','Al Barari','Majan','City of Arabia','Al Reem','Arabian Ranches','Arjan Dubai Land','Jumeirah Village Circle','Jumeirah Village Triangle','Motor City','Dubai Studio City',' Green Community Village',
      'Al Furjan','All Islands']
    },
    {
      title: "Area's in Sharjah",
      links: ['Al Nekhailat','Al Ghafia', 'Al Sabkha','Al Azra','Al Muntazah',' Al Fisht',' Sharqan','Al Qadisiya','Al Hazzanah','Al Falaj','Al Qasimia','Al Jubail','Al Gharb','Abu Shagara','Al Majaz','Al Khan',' Al Nahda','Muwailih','Al Zahia','University City','Al Gharayen','Al Khaledia','Al Layyeh','Al Falaj','Al Jazzat','Al Ramtha']
    },
    {
      title: "Area's in Ajman",
      links: ['Al Rumailah','Al Rashidiya','Al Rashdiya 1','Al Rashdiya 2','Al Rashdiya 3',' Al Nakhil','Al Nuaimia','Al Nuaimia 1','Al Nuaimia 2','Al Bustan','Liwara','Liwara 1', 'Liwara 2','Mushairef','Al Jerf','Al Hamidiya','Industrial Area','Al Hamriya','Ajman Uptown', 'Al Heliow','Al Raqaib', 'Emirates City','Al Amerah','Al Zahya','Free Zone']
    }
  ];

  return (
    <div>
      <div className="footer">
        <div className="footer-top-container">
          <div className="footer-top">
            <div className="input-container">
              <span><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" name="text" id="text" className="input-text" placeholder="Search..." />
            </div>
            <div className="border"></div>

            <div className="quick-cont">
              <li className="quick-li"><a className="quick-anchor" href="/">Quick Links</a></li>
            </div>
            <div className="border"></div>

            <div className="visa-cont">
              <img src={visaonline} alt="visaonline" className="visa-img" />
            </div>
          </div>

          <div className="footer-nav">
            {footerNav.map((item, index) => (
              <div className="quick-cont" key={index}>
                <li className="quick-li"><a className="quick-anchor" href="/">{item}</a></li>
              </div>
            ))}
          </div>

          <div className="best-curtain">
            <h2 className="h2-heading"><a href="#" className="h2-anchor">Best Curtain Cleaner L.L.C</a></h2>
          </div>

          <div className="footer-box">
            <div className="footer-box1">
              <h3 className="footer-heading">
                <span className="box-span">We are available to serve you near in Abu Dhabi - Dubai - Sharjah - Ajman - Al Ain</span>
              </h3>
            </div>
            <div className="center-arrow"></div>
          </div>

          <div className="mega-footer">
            <div className="footer-container">
              <div className="row">
                {footerSections.map((section, index) => (
                  <div className="footer-col" key={index}>
                    <h4>{section.title}</h4>
                    <ul className="uo-list">
                      {section.links.map((link, idx) => (
                        <li key={idx}><a href="#">{link}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="copyright">
            <h2 className="copy-head">© 2023 by CurtainCleaning.AE. Proudly created by <a href="#"> MetaDigitalMarketing.AE</a></h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
