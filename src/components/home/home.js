import React from "react";
import Header from "../header/header";
import "./home.css";
import DownArrow from "../downArrow/downArrow";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="topHomeSection">
          <a href="https://www.instagram.com/18grams.916/">
            <div className="storeLogo">
              <img alt="store logo" width="90%" src="./o.jpg" />
            </div>
          </a>
          <div className="headLineContainer">
            <p>Midtown-Inspired</p>
            <img alt="coffee icon" src="./icons-coffee.png" />
            <p>Crafted In-House</p>
            <img alt="coffee icon" src="./icons-coffee.png" />
            <p>Sip-Worthy</p>
            <img alt="coffee icon" src="./icons-coffee.png" />
          </div>
          <DownArrow targetDivId="target-div" />
          <div id="target-div">
            <img className="canva" alt="food and drinks" src="./page1.gif" />
            <img className="canva" alt="food and drinks" src="./page2.gif" />
            <img className="canva" alt="food and drinks" src="./page3.gif" />
            <img className="canva" alt="food and drinks" src="./page4.gif" />
            <img className="canva" alt="food and drinks" src="./page5.gif" />
          </div>
        </div>
      </div>
    </>
  );
}
