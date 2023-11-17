import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./header.css";

export default function Header() {
  const [isChange, setIsChange] = useState(false);

  const toggleChange = () => {
    setIsChange(!isChange);
  };

  return (
    <>
      <div className="topHeader">
        <p>1600 Ethan Way Ste 30, Sacramento, CA 95825</p>
        <div className="menuBarsContainer">
          <div
            className={`container ${isChange ? "change" : ""}`}
            onClick={toggleChange}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="menuContainer">
        <div className={`vertical-menu ${isChange ? "show" : ""}`}>
        <div className="socialLine"></div>
          <Link to="/"> 
            HOME
          </Link>
          <Link to="/hoursandlocation"> 
            HOURS & LOCATIONS
          </Link>
          <Link to="/menus">MENUS</Link>
          <Link to="/contact">CONTACT</Link>
          <div className="socialLine"></div>
          <a href="https://www.instagram.com/18grams.916/">
            <img alt="instagram icon" src="./icons-instagram.png" />
          </a>
        </div>
      </div>
    </>
  );
}
