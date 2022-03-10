import React, { useState } from "react";

import "./Filter.css";
import Slider from "./Slider";

const Filter = (props) => {
  const [sliderV, setSliderV] = useState(25);
  const onSliderChangeP = event => {
    setSliderV(event.value);
  }
  
  return (
    <div className="filter">
      <p>Address</p>
      <input id="input"></input>
      <div id="distance">
        <p style={{marginRight: "10px"}}>Max Distance:</p>
        <p>{sliderV}</p>
      </div>
      <Slider onSliderChangeC={onSliderChangeP}/>
    </div>
  );
};

export default Filter;
