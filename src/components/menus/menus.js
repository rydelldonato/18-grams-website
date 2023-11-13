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
        <div className="menuButtons">
          <button onClick={() => handleMenuButtons("drinksButton")} id="drinksButton" className="buttons">Drinks</button>
          <button onClick={() => handleMenuButtons("brunchButton")} id="brunchButton" className="buttons">Brunch</button>
        </div>
        <MenuLayout menu={menu} />
      </div>
    </>
  );
}
