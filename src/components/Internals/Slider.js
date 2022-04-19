import React, { useState } from "react";

import "./Slider.css";

const Slider = (props) => {
  const [slideValue, setSlideValue] = useState(props.value);

  const sliderChange = event => {
      setSlideValue(event.target.value);
      props.onSliderChangeC(event.target.value);
  }
  
  const backcolor = props.bcolor;

  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={slideValue}
        className="slider"
        onChange={sliderChange}
        style={{backgroundColor: backcolor}}
      ></input>
    </div>
  );
};

export default Slider;
