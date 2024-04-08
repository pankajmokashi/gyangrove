import React from "react";
import "./styles.css";
import Shows from "../Shows";
import Events from "../Events";

function Body() {
  return (
    <div className="body">
      <div className="banner">
        <div className="text">
          <div className="heading">
            Discover Exciting Events Happening Near You - Stay Tuned For Updates
          </div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="container">
        <Shows />
        <Events />
      </div>
    </div>
  );
}

export default Body;
