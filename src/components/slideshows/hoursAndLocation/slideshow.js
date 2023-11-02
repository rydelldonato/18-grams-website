import React from "react";
import { Slide } from 'react-slideshow-image';
import './slideshow.css'

const images = [
  '/frontCounter.jpg',
//   'image2.jpg',
//   'image3.jpg',
  // Add more image paths here
];

const Slideshow = () => {
  return (
    <div className="slideshow-container">
      <Slide images={images}>
        {images.map((each, index) => (
          <div key={index}>
            <img src={each} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
