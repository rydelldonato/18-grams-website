import React from "react";
import "./menus.css";
import Header from "../header/header";
import Slideshow from "../slideshows/hoursAndLocation/slideshow";

export default function Menus() {
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
        <div className="menuButtons">
          <button className="buttons">Drinks</button>
          <button className="buttons">Brunch</button>
        </div>
      </div>
    </>
  );
}
