import React, { useState } from "react";

import "./Slider.css";

const Slider = (props) => {
  //Initialize slide value
  const [slideValue, setSlideValue] = useState(props.value);

  //Executes when slider is moved
  const sliderChange = event => {
      setSlideValue(event.target.value);
      props.onSliderChangeC(event.target.value);
  }

  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={slideValue}
        className="slider"
        onChange={sliderChange}
        style={{backgroundColor: props.bcolor}}
      ></input>
    </div>
  );
};

export default Slider;
