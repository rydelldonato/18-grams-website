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
    slideRef.current.goToIndex(index);
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
    </>
  );
};

export default Slideshow;
