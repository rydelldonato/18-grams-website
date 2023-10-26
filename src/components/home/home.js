import React from "react";
import Header from "../header/header";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <a href="https://www.instagram.com/18grams.916/">
        <div>
          <img width={"100%"} src="./o.jpg" />
        </div>
      </a>
      <div className="headLineContainer">
        <p>Midtown-Inspired</p>
        <img src="./icons-coffee.png" />
        <p>Crafted In-House</p>
        <img src="./icons-coffee.png" />
        <p>Sip-Worthy</p>
        <img src="./icons-coffee.png" />
      </div>
    </>
  );
}
