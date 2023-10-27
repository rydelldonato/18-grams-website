import React from "react";
import Header from "../header/header";
import "./home.css";
import DownArrow from "../downArrow/downArrow";

export default function Home() {
  return (
    <>
      <Header />
      <a href="https://www.instagram.com/18grams.916/">
        <div>
          <img alt="store logo" width="100%" src="./o.jpg" />
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
      <div style={{ height: "296px" }}></div>
      
      <div id="target-div">
        <img className="foodAndDrinks" alt="food and drinks" src="./food-and-drinks.png"/>
      </div>
    </>
  );
}
