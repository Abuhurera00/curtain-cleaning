




import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/main.css";
import curtaincleaninglogo from "../assets/curtaincleaninglogo.gif";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="sticky">
      <div className="address">
        <p className="para">
          <span className="curtain">Best Curtain Cleaner L.L.C</span>
          <span className="office">
            Office 604-7, Elite Business Centre, Al Barsha-1, Al Barsha - Dubai
            Contact:+971 54 716 5954
          </span>
        </p>
      </div>

      <header>
        <h3 className="logo">
          <img
            src={curtaincleaninglogo}
            alt="logo"
            style={{ width: "62px", height: "62px", objectFit: "cover" }}
          />
        </h3>
        <nav ref={navRef} className="navbar">
          <ul className="li-container">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-links ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cleaning-alteration-installation-pricing"
                className={({ isActive }) =>
                  `nav-links ${isActive ? "active" : ""}`
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mattress-sofa-cleaning"
                className={({ isActive }) =>
                  `nav-links ${isActive ? "active" : ""}`
                }
              >
                Exclusive Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book-now"
                className={({ isActive }) =>
                  `nav-links ${isActive ? "active" : ""}`
                }
              >
                Book Now
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `nav-links ${isActive ? "active" : ""}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `nav-links ${isActive ? "active" : ""}`
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="login">
            <span className="login-span">
              <i className="fa-solid fa-circle-user"></i>
            </span>
            Login
          </div>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </div>
  );
}

export default Navbar;




















































































// import { useRef, useState } from "react";
// import "../Styles/main.css";
// import curtaincleaninglogo from "../assets/curtaincleaninglogo.gif";

// function Navbar() {
//   const [activeLink, setActiveLink] = useState("/");
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   const handleSetActive = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="sticky">
//       <div className="address">
//         <p className="para">
//           <span className="curtain">Best Curtain Cleaner L.L.C</span>
//           <span className="office">
//             Office 604-7, Elite Business Centre, Al Barsha-1, Al Barsha - Dubai
//             Contact:+971 54 716 5954
//           </span>
//         </p>
//       </div>

//       <header>
//         <h3 className="logo">
//           <img
//             src={curtaincleaninglogo}
//             alt="logo"
//             style={{ width: "62px", height: "62px", objectFit: "cover" }}
//           />
//         </h3>
//         <nav ref={navRef} className="navbar">
//           <ul className="li-container">
//             <li>
//               <a
//                 className={`nav-links ${activeLink === "/" ? "active" : ""}`}
//                 href="/"
//                 onClick={() => handleSetActive("/")}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 className={`nav-links ${activeLink === "/pricing" ? "active" : ""}`}
//                 href="/pricing"
//                 onClick={() => handleSetActive("/pricing")}
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 className={`nav-links ${activeLink === "/exclusive-services" ? "active" : ""}`}
//                 href="/exclusive-services"
//                 onClick={() => handleSetActive("/exclusive-services")}
//               >
//                 Exclusive Services
//               </a>
//             </li>
//             <li>
//               <a
//                 className={`nav-links ${activeLink === "/book-now" ? "active" : ""}`}
//                 href="/book-now"
//                 onClick={() => handleSetActive("/book-now")}
//               >
//                 Book Now
//               </a>
//             </li>
//             <li>
//               <a
//                 className={`nav-links ${activeLink === "/about-us" ? "active" : ""}`}
//                 href="/about-us"
//                 onClick={() => handleSetActive("/about-us")}
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 className={`nav-links ${activeLink === "/faq" ? "active" : ""}`}
//                 href="/faq"
//                 onClick={() => handleSetActive("/faq")}
//               >
//                 FAQ
//               </a>
//             </li>
//           </ul>
//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <i className="fa-solid fa-xmark"></i>
//           </button>
//           <div className="login">
//             <span className="login-span">
//               <i className="fa-solid fa-circle-user"></i>
//             </span>
//             Login
//           </div>
//         </nav>
//         <button className="nav-btn" onClick={showNavbar}>
//           <i className="fa-solid fa-bars"></i>
//         </button>
//       </header>
//     </div>
//   );
// }

// export default Navbar;
