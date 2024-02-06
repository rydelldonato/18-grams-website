import React from "react";
import Header from "../header/header";
import './contact.css'

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        <h3 className="header">Contact</h3>
        <div className="coffeeIcons">
          <img alt="coffee icon" src="./icons-coffee.png"/>
          <img alt="coffee icon" src="./icons-coffee.png"/>
          <img alt="coffee icon" src="./icons-coffee.png"/>
        </div>
      </div>
      <div>
        <iframe
          title="JotForm"
          id="jotformIFrame"
          allowTransparency="true"
          src="https://form.jotform.com/233236264862155"
          frameborder="0"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
        ></iframe>
      </div>
      <div>
        "18 Grams is my favorite coffee shop in Sacramento!" - Shannon D. (Yelp)
      </div>
    </>
  );
}
