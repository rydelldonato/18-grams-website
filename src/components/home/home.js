import React from "react";
import Header from "../header/header";
import "./home.css";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="topHomeSection">
          <a href="https://www.instagram.com/18grams.916/">
            <div className="storeLogo">
              <img
                className="logo"
                alt="store logo"
                width="90%"
                src="./store-logo.jpg"
              />
            </div>
          </a>
          <div className="headLineContainer">
            <p>Crafted In-House</p>
            <div>
              <img alt="coffee icon" src="./icons-coffee.png" />
            </div>
            <p>Sip-Worthy</p>
            <div>
              <img alt="coffee icon" src="./icons-coffee.png" />
            </div>
          </div>
          <div id="target-div">
            <img
              className="canva page1Desktop"
              alt="food and drinks"
              src="./page1.gif"
            />
            <img className="canva page2Desktop" alt="food and drinks" src="./page2.gif" />
            <img className="canva page3Desktop" alt="food and drinks" src="./page3.gif" />
            <img className="canva page4Desktop" alt="food and drinks" src="./page4.gif" />
            <a href="https://www.instagram.com/18grams.916/">
              <img className="canva page5Desktop" alt="food and drinks" src="./page5.gif" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
