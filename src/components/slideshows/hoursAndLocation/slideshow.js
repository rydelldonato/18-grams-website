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
    slideRef.current.goTo(index);
  };

  return (
    <>
      <DownArrow targetDivId="target-div" />
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
                    className={buttonIndex === index ? "active" : ""}
                  >
                    <button
                      onClick={() => handleDotClick(buttonIndex)}
                    ></button>
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
          <img alt="coffeeicon" src="/icons-coffee.png" />
          <img alt="coffeeicon" src="/icons-coffee.png" />
          <img alt="coffeeicon" src="/icons-coffee.png" />
        </div>
        <div className="hoursAndLocations">
          <p>Open every day of the week!</p>
          <div style={{ height: 20 }}></div>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1600%20Ethan%20Way%20Ste%2030%2C%20Sacramento%2C%20CA%2095825"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 Grams Coffee Roasters, 1600 Ethan Way Ste 30, Sacramento, CA 95825
            </a>
          </p>
          <p>M-W 8AM-2PM, TH-Sun 8AM-8PM</p>
          <div style={{ height: 15 }}></div>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=9677%20E%20Stockton%20Blvd%2C%20Elk%20Grove%2C%20CA%2095624"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 Grams Coffee & Tea, 9677 E Stockton Blvd, Elk Grove, CA 95624
            </a>
          </p>
          <p>7AM-5PM</p>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
