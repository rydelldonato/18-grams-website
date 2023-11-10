import React from "react";
import './menus.css'
import Header from "../header/header";
import Slideshow from "../slideshows/hoursAndLocation/slideshow";

export default function Menus() {
  const slideImages = [
    {
      url: "./frontCounter.jpg",
      caption: "Slide 1",
    },
    {
      url: "./lineView.jpg",
      caption: "Slide 2",
    },
    {
      url: "./murals.jpg",
      caption: "Slide 3",
    },
    {
      url: "./outsideView.jpg",
      caption: "Slide 4",
    },
  ];
  return (
    <>
      <Header />
      <div>
        <div className="menusSpanDiv">
        <span className="menusSpan"><h1>Menus</h1></span>
        </div>
        <Slideshow slideImages={slideImages} />
      </div>
    </>
  );
}
