import React, { useState } from "react";

import "./Slider.css";

const Slider = (props) => {
  const [slideValue, setSlideValue] = useState(25);

  const sliderChange = event => {
      setSlideValue(event.value);
      this.props.onSliderChangeC(slideValue);
  }
  
  return (
    <div>
      <input
        type="range"
        min="1"
        max="50"
        value={slideValue}
        class="slider"
        onChange={sliderChange}
      ></input>
    </div>
  );
};

export default Slider;
