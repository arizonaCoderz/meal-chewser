import React, { useState } from "react";

import "./Filter.css";
import Slider from "./Internals/Slider";
import PriceButton from "./Internals/PriceButton";
import Overlay from "./Overlay";

const Filter = (props) => {
  const [sliderV, setSliderV] = useState(25);
  const onSliderChangeP = (value) => {
    setSliderV(value);
  };

  const [overlay, setOverlay] = useState(false);
  const pullOverlay = (event) => {
    //pulls up the randomized result
    setOverlay(true);
  };
  const removeOverlay = (event) => {
    //removes the overlay and backdrop
    setOverlay(false);
  };

  if (overlay === true) {
    return (
      <div className="filter">
        <p>Address</p>
        <input id="input"></input>
        <div id="distance">
          <p style={{ marginRight: "10px" }}>Max Distance:</p>
          <p>{sliderV}</p>
          <p style={{ marginLeft: "5px" }}>Miles</p>
        </div>
        <Slider onSliderChangeC={onSliderChangeP} />
        <p>Price</p>
        <div id="prices">
          <PriceButton value="$"></PriceButton>
          <PriceButton value="$$"></PriceButton>
          <PriceButton value="$$$"></PriceButton>
        </div>
        <p>Cuisine</p>
        <div id="cuisine"></div>
        <div id="chewsbuttondiv">
          <button id="chewsbutton" onClick={pullOverlay}>
            Chews My Meal
          </button>
        </div>
        <Overlay onClickedBackdrop={removeOverlay}></Overlay>
      </div>
    );
  } else {
    return (
      <div className="filter">
        <p>Address</p>
        <input id="input"></input>
        <div id="distance">
          <p style={{ marginRight: "10px" }}>Max Distance:</p>
          <p>{sliderV}</p>
          <p style={{ marginLeft: "5px" }}>Miles</p>
        </div>
        <Slider onSliderChangeC={onSliderChangeP} />
        <p>Price</p>
        <div id="prices">
          <PriceButton value="$"></PriceButton>
          <PriceButton value="$$"></PriceButton>
          <PriceButton value="$$$"></PriceButton>
        </div>
        <p>Cuisine</p>
        <div id="cuisine"></div>
        <div id="chewsbuttondiv">
          <button id="chewsbutton" onClick={pullOverlay}>
            Chews My Meal
          </button>
        </div>
      </div>
    );
  }
};

export default Filter;
