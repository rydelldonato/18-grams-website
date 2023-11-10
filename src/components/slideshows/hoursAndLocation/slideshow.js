import React, { useRef } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshow.css";




const Slideshow = (props) => {
  const {slideImages} = props
  const slideRef = useRef(null);

  const handleDotClick = (index) => {
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
                    <button onClick={() => handleDotClick(buttonIndex)}></button>
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
