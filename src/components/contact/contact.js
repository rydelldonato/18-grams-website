import React from 'react';
import Header from '../header/header';

export default function Contact() {

  return (
    <>
      <Header />
      <iframe
        id="JotFormIFrame-233218218954156"
        title="18 grams contact form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowtransparency="true"
        allowFullScreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/233218218954156?nav=false"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      >
      </iframe>
    </>
  );
}
