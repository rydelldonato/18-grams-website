import React,{useEffect} from "react";
import Header from "../header/header";
import Slideshow from "../slideshows/hoursAndLocation/slideshow";
import './hoursAndLocation.css'

export default function HoursAndLocation() {
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  function handleDirectionsButton() {
    // Define the Google Maps URL
    const googleMapsURL =
      "https://www.google.com/maps/search/?api=1&query=1600%20Ethan%20Way%20Ste%2030%2C%20Sacramento%2C%20CA%2095825";

    if (isMobileDevice) {
      // If it's a mobile device, open a mobile-friendly link
      window.open(
        "maps:?q=1600+Ethan+Way+Ste+30,+Sacramento,+CA+95825",
        "_blank"
      );
    } else {
      // If it's not a mobile device, open the Google Maps URL
      window.open(googleMapsURL, "_blank");
    }
  }

  // Function to load Yelp review script
  const loadYelpReviewScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.yelp.com/embed/widgets.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  };

  // Load Yelp review script when the component mounts
  useEffect(() => {
    loadYelpReviewScript();
  }, []);
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

  return (
    <>
      <Header />
      <div className="allContent">
      <Slideshow slideImages={slideImages} />
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
          <p>1600 Ethan Way Ste 30, Sacramento, CA 95825</p>
          <p>M-W 8AM-2PM, TH-Sun 8AM-8PM</p>
          {/* Yelp Review Embed Code */}
          <div className="yelp-reviewDiv">
          <span
            className="yelp-review"
            data-review-id="zaOSDECRx_6YO30jJf0fRw"
            data-hostname="www.yelp.com"
            style={{ height: 50 }}
          >
            Read <a href="https://www.yelp.com/user_details?userid=CNl758-IFadffzzaKH9eUw" rel="nofollow noopener">Athena M.</a>'s <a href="https://www.yelp.com/biz/18-grams-coffee-roasters-sacramento?hrid=zaOSDECRx_6YO30jJf0fRw" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/rtF0Mvs6iScYR9oBueQrtA" rel="nofollow noopener">18 Grams Coffee Roasters</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
          </span>
          </div>
          <div style={{ height: 15 }}></div>
        </div>
        <div
          style={{
            backgroundImage: 'url("/maps.png")',
            height: "215px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="getDirectionsButton"
        >
          <button style={{padding: '10px 50px 10px 50px',fontSize: '20px' }} onClick={() => handleDirectionsButton()}>
            Get Directions
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
