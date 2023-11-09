import React from "react";
import Header from "../header/header";
import Slideshow from "../slideshows/hoursAndLocation/slideshow";

export default function HoursAndLocation() {
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <>
      <Header />
      <Slideshow />
      <div>
        <h1>Hours & Location</h1>
        <div className="coffee-icons">
          <img alt="coffeeicon" src="/icons-coffee.png" />
          <img alt="coffeeicon" src="/icons-coffee.png" />
          <img alt="coffeeicon" src="/icons-coffee.png" />
        </div>
        <div className="hoursAndLocations">
          <p>Open every day of the week!</p>
          <p>Check us out on Yelp!</p>
          <div style={{ height: 20 }}></div>
          <p>
            {isMobileDevice ? (
              <a
                href="maps:?q=1600+Ethan+Way+Ste+30,+Sacramento,+CA+95825"
              >
                1600 Ethan Way Ste 30, Sacramento, CA 95825
              </a>
            ) : (
              <a
                href="https://www.google.com/maps/search/?api=1&query=1600%20Ethan%20Way%20Ste%2030%2C%20Sacramento%2C%20CA%2095825"
                target="_blank"
                rel="noopener noreferrer"
              >
                1600 Ethan Way Ste 30, Sacramento, CA 95825
              </a>
            )}
          </p>
          <p>M-W 8AM-2PM, TH-Sun 8AM-8PM</p>
          {/* Yelp Review Embed Code */}
          <span
            className="yelp-review"
            data-review-id="zaOSDECRx_6YO30jJf0fRw"
            data-hostname="www.yelp.com"
            style={{ height: 50 }}
          >
            Read <a href="https://www.yelp.com/user_details?userid=CNl758-IFadffzzaKH9eUw" rel="nofollow noopener">Athena M.</a>'s <a href="https://www.yelp.com/biz/18-grams-coffee-roasters-sacramento?hrid=zaOSDECRx_6YO30jJf0fRw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/rtF0Mvs6iScYR9oBueQrtA" rel="nofollow noopener">18 Grams Coffee Roasters</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
          </span>
          <div style={{ height: 15 }}></div>
        </div>
      </div>
    </>
  );
}
