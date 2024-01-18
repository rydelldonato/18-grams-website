import React, { useState } from "react";
import "./menus.css";
import Header from "../header/header";
import Slideshow from "../slideshows/hoursAndLocation/slideshow";
import MenuLayout from "./menuLayout";
import drinks from "./drinks/drinks";
import brunch from "./brunch/brunch";

export default function Menus() {
  const [menu, setMenu] = useState(drinks); // Set the initial menu to drinks

  const slideImages = [
    {
      url: "./ubeToast.jpg",
      caption: "Slide 1",
    },
    {
      url: "./foodAssortion.jpg",
      caption: "Slide 2",
    },
    {
      url: "./misoCarb.jpg",
      caption: "Slide 3",
    },
    {
      url: "./karage.jpg",
      caption: "Slide 4",
    },
  ];

  const handleMenuButtons = (id) => {
    if (id === "drinksButton") {
      setMenu(drinks);
    } else if (id === "brunchButton") {
      setMenu(brunch);
    }
  };

  return (
    <>
      <div className="allContent">
        <Header />
        <div className="topDiv">
          <div>
            <div className="menusSpanDiv">
              <span className="menusSpan">
                <h1>Menus</h1>
              </span>
            </div>
            <Slideshow slideImages={slideImages} />
          </div>
        </div>
        <div className="middleDiv">
          <h2>Welcome to Our Café and Brunch Menu</h2>
          <div className="middleDivWelcomeMessage">
            <p className="middleDivWelcomeParagraph">
              Indulge in our delightful selection of beverages and brunch
              options. We strive to create a warm and inviting atmosphere for
              you to enjoy delicious treats with friends and family.
            </p>
            <div className="middleDivHours">
              <p>
                We serve <span>drinks every day of the week </span>
                <br></br>
                <span>M-W from 8AM-2PM</span> * TH-SUN from 8AM-8PM
              </p>
              <p>
                We serve <span>brunch</span>
                <br></br>
                <span>TUES-WED from 8AM-2PM</span> * TH-SUN from 8AM-3PM
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="menuDiv">
          <div className="menuButtons">
            <button
              onClick={() => handleMenuButtons("drinksButton")}
              id="drinksButton"
              className="buttons"
              style={{fontSize: '18px',padding: '30px 70px 30px 70px'}}
            >
              Drinks
            </button>
            <button
              onClick={() => handleMenuButtons("brunchButton")}
              id="brunchButton"
              className="buttons"
              style={{fontSize: '18px',padding: '30px 70px 30px 70px'}}
            >
              Brunch
            </button>
          </div>
          <MenuLayout menu={menu} />
        </div>
      </div>
    </>
  );
}
