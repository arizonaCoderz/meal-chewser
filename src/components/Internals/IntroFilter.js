import React, { useState } from "react";

import "./IntroFilter.css";
import IntroPB from "./IntroPB";
import Slider from "./Slider";

const IntroFilter = (props) => {
  const [sliderV, setSliderV] = useState(25);
  const [price, setPrice] = useState([0,4,0]);
  const [keyword, setKeyword] = useState("");

  const onSliderChangeP = value => {
    setSliderV(value);
  };

  const buttonHandler = value => {
    setPrice(value);
  }

  const onKeywordChange = event => {
    setKeyword(event.target.value);
  }

  var ichewsdata = [price, sliderV, keyword];
  const onChewsen = event => {
    ichewsdata[0] = price;
    ichewsdata[1] = sliderV;
    ichewsdata[2] = keyword;
    props.chews(ichewsdata);
  }

  onChewsen();

  return (
    <div className={props.showFilter ? "introfilter": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}

      <p className="introprice">PRICE</p>
      <IntroPB bstatus={buttonHandler}></IntroPB>
      <div className="introdistance">
        <p style={{ marginRight: "10px" }}>MAX DISTANCE:</p>
        <p>{sliderV}</p>
        <p style={{ marginLeft: "5px" }}>MILES</p>
      </div>
      <Slider bcolor="white" onSliderChangeC={onSliderChangeP} value={sliderV}/>
      <div className="introkeyworddiv">
          <p>KEYWORD</p>
          <input className="introkeywordinput" onChange={onKeywordChange} placeholder="dinner, pizza, etc"></input>
          <p id="note">*If you have multiple keywords, separate by commas</p>
      </div>
    </div>
  );
};

export default IntroFilter;
