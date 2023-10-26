import React, { useRef } from 'react';
import Header from '../header/header';
import './home.css';

export default function Home() {
  const targetDivRef = useRef(null);

  const scrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <a href='https://www.instagram.com/18grams.916/'>
        <div>
          <img alt='store logo' width="100%" src='./o.jpg' />
        </div>
      </a>
      <div className='headLineContainer'>
          <p>Midtown-Inspired</p>
          <img alt='coffee icon' src='./icons-coffee.png' />
          <p>Crafted In-House</p>
          <img alt='coffee icon' src='./icons-coffee.png' />
          <p>Sip-Worthy</p>
          <img alt='coffee icon' src='./icons-coffee.png' />
      </div>
      
      {/* The arrow icon that scrolls to the target div */}
      <div className="arrow-icon" onClick={scrollToDiv}>
        <img src='./icons-down-arrow.png' alt="Scroll to Div" />
      </div>
      <div style={{height:"1000px"}}></div>
      {/* The target div with an id */}
      <div  id="target-div" ref={targetDivRef}>
        {/* Content of the target div */}
        heres the content
      </div>
    </>
  );
}
