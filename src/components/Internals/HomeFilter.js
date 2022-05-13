import React, { useState } from "react";

import "./HomeFilter.css";
import HomePB from "./HomePB";
import Slider from "./Slider";

const HomeFilter = (props) => {
  //Initialize Home filter variables
  const [sliderV, setSliderV] = useState(15); //Slider value aka Distance
  const [price, setPrice] = useState([0,4]); //price selection toggle
  const [keyword, setKeyword] = useState(""); //Keyword

  //Two way binding with Slider. When slider is moved, value is automatically updated
  const onSliderChangeP = value => {
    setSliderV(value);
  };

  //Price button selection handler
  const buttonHandler = value => {
    setPrice(value);
  }

  //Linked to keyword input box
  const onKeywordChange = event => {
    setKeyword(event.target.value);
  }

  //Put all input variables in an array and send to parent component (Home)
  var ichewsdata = [price, sliderV, keyword];
  const onChewsen = event => {
    ichewsdata[0] = price;
    ichewsdata[1] = sliderV;
    ichewsdata[2] = keyword;
    props.chews(ichewsdata);
  }

  onChewsen();

  return (
    <div className={props.showFilter ? "homefilter": "disappear"}>
      <div className="homedistance">
        <p style={{ marginRight: "10px" }}>MAX DISTANCE:</p>
        <p>{sliderV}</p>
        <p style={{ marginLeft: "5px" }}>MILES</p>
      </div>
      <Slider bcolor="white" onSliderChangeC={onSliderChangeP} value={sliderV}/>
      <HomePB bstatus={buttonHandler}></HomePB>
      <div className="homekeyworddiv">
          <p>KEYWORD</p>
          <input className="homekeywordinput" onChange={onKeywordChange} placeholder="dinner, pizza, etc"></input>
          <p id="note">*If you have multiple keywords, separate by commas</p>
      </div>
    </div>
  );
};

export default HomeFilter;
