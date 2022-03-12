import React, { useState } from "react";

import "./Overlay.css";

const Overlay = (props) => {
  const clickedBackdrop = (event) => {
    props.onClickedBackdrop();
  };

  const clickedDirections = event => { //execute when clicked on get directions

  }

  const clickedShare = event => { //execute when clicked on share

  }

  return (
    <div>
      <div className="backdrop" onClick={clickedBackdrop}></div>
      <div className="overlay">
        <p id="resultname">Name of Restaurant!</p>
        <div className="location">
          <p id="resultaddress">1234 Blah Avenue, Laveen, AZ, 99999</p>
          <p>25 miles</p> {/* result distance */}
        </div>
        <div id="tags">(pics and tags idk)</div>
        <div className="resultbuttons">
            <button className="resultbutton" onClick={clickedDirections}>Get Directions</button>
            <button className="resultbutton" onClick={clickedShare}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
