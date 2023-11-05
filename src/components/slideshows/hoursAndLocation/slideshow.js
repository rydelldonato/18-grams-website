import React, { useRef } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshow.css";
import DownArrow from "../../downArrow/downArrow";

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

const Slideshow = () => {
  const slideRef = useRef(null);

  const handleDotClick = (index) => {
    // Move the slideshow to the specified index
    slideRef.current.goToIndex(index);
  };

  return (
    <>
    <DownArrow targetDivId="target-div"/>
      <div className="slide-container">
        <Fade ref={slideRef}>
          {slideImages.map((slideImage, index) => (
            <div className="slideshowSlider" key={index}>
              <div
                className="slide-div"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              ></div>
              <span></span>
              <ul className="slick-dots">
                {slideImages.map((_, buttonIndex) => (
                  <li
                    key={buttonIndex}
                    onClick={() => handleDotClick(buttonIndex)}
                    className={buttonIndex === index ? "active" : ""}
                  >
                    <button></button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Fade>
      </div>
      <div id="target-div">
        <h1>Hours & Location</h1>
        <div className="coffee-icons">
          <img alt="coffeeicon" src="/icons-coffee.png"/>
          <img alt="coffeeicon" src="/icons-coffee.png"/>
          <img alt="coffeeicon" src="/icons-coffee.png"/>
        </div>
        <p>Open everyday of the week!</p>
        <p>1600 Ethan Way Ste 30, Sacramento, CA 95825</p>
        <p>M-W 8AM-2PM, TH-Sun 8AM-8PM</p>
        <p>9677 E Stockton Blvd, Elk Grove, CA 95624</p>
        <p>7AM-5PM</p>
      </div>
    </>
  );
};

export default Slideshow;
