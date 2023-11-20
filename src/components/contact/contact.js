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
        <p className="message">
          Send us a message and we’ll get back to you as soon as possible.
          Looking forward to hearing from you.
        </p>
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
    </>
  );
}
