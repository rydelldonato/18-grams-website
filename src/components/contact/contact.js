import React from 'react';
import Header from '../header/header';

export default function Contact() {

  return (
    <>
      <Header />
      <iframe
          title="JotForm"
          id="jotformIFrame"
          allowTransparency="true"
          src="https://form.jotform.com/233236264862155"
          frameborder="0"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
          }}
        ></iframe>
    </>
  );
}
