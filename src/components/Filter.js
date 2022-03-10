import React, { useState } from "react";

import "./Filter.css";
import Slider from "./Slider";
import PriceButton from "./PriceButton";

const Filter = (props) => {
  const [sliderV, setSliderV] = useState(25);
  const onSliderChangeP = (event) => {
    setSliderV(event.value);
  };

  return (
    <div className="filter">
      <p>Address</p>
      <input id="input"></input>
      <div id="distance">
        <p style={{ marginRight: "10px" }}>Max Distance:</p>
        <p>{sliderV}</p>
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
        <button id="chewsbutton">Chews My Meal</button>
      </div>
    </div>
  );
};

export default Filter;
