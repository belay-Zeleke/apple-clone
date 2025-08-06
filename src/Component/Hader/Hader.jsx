// import React from 'react'
// import AppLogo from '../../images/icons/logo.png'
// import search from '../../images/icons/search-icon.png'
// import cart from '../../images/icons/cart.png'
// import { Link } from 'react-router'

// const Hader = () => {
//   return (
//     <div>

// <header className="MyHader">

//       <div className="Links">
//         <ul className="UnorderList">
//           <li className="Logo">
//             <Link to="/"> <img src={AppLogo} alt="apple Logo" /> </Link>
//           </li>
//           <li><Link to="/mac">Mac</Link></li>
//           <li><Link to="/iphone">iphone</Link></li>
//           <li><Link to="/ipad">ipad</Link></li>
//           <li><Link to="/watch">watch</Link></li>
//           <li><Link to="/tv">Tv</Link></li>
//           <li><Link to="/music">Music</Link></li>
//           <li><Link to="/Support"> Support</Link></li>
//           <li className="search-icon"> <Link to="/search"> <img src={search} alt="search-icon" /> </Link> </li>
//           <li className="cart"> <Link to="/cart"><img src={cart} alt="cart" /></Link>   </li>
//         </ul>
//       </div>
//     </header>

//     </div>
//   )
// }

// export default Hader

import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import AppLogo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";
import "../../General css/All-in-One.css";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src={AppLogo} alt="Apple Logo" />
          </Link>

          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          </div>

          <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/mac">Mac</Link>
            </li>
            <li>
              <Link to="/iphone">iPhone</Link>
            </li>
            <li>
              <Link to="/ipad">iPad</Link>
            </li>
            <li>
              <Link to="/watch">Watch</Link>
            </li>
            <li>
              <Link to="/tv">TV & Home</Link>
            </li>
            {/* <li><Link to="/Entertainments">Entertainments</Link></li> */}
            <li>
              <Link to="/Accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li className="icon">
              <Link to="">
                <img src={search} alt="Search" />
              </Link>
            </li>
            <li className="icon">
              <Link to="">
                <img src={cart} alt="Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
