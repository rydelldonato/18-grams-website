import React, { useRef } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshow.css";

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
      <div>
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
              href="geo:0,0?q=1600 Ethan Way Ste 30, Sacramento, CA 95825"
            >
              18 Grams Coffee Roasters, 1600 Ethan Way Ste 30, Sacramento, CA 95825
            </a>
          </p>
          <p>M-W 8AM-2PM, TH-Sun 8AM-8PM</p>
          <div style={{ height: 15 }}></div>
          <p>
            <a
              href="geo:0,0?q=9677 E Stockton Blvd, Elk Grove, CA 95624"
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
