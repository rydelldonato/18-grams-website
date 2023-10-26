import React from "react";
import "./downArrow.css";

export default function DownArrow({ targetDivId }) {
  const scrollToDiv = () => {
    const targetDiv = document.getElementById(targetDivId);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="arrow-icon" onClick={scrollToDiv}>
      <img src='./icons-down-arrow.png' alt="Scroll to Div" />
    </div>
  );
}
