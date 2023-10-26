import React, { useState } from "react";
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
        <p>9677 E Stockton Blvd, Elk Grove, CA 95624</p>
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
          <a href="https://www.instagram.com/18grams.916/" className="active">
            HOURS & LOCATIONS
          </a>
          <a href="https://www.instagram.com/18grams.916/">MENUS</a>
          <a href="https://www.instagram.com/18grams.916/">OUR STORY</a>
          <a href="https://www.instagram.com/18grams.916/">ORDER PICKUP</a>
          <a href="https://www.instagram.com/18grams.916/">CONTACT</a>
          <div className="socialLine"></div>
          <a href="https://www.instagram.com/18grams.916/">
            < img alt="instagram icon" src="./icons-instagram.png" />
          </a>
        </div>
      </div>
    </>
  );
}
