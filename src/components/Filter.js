import React, { useState } from "react";

import "./Filter.css";
import Slider from "./Internals/Slider";
import PriceButton from "./Internals/PriceButton";
import Overlay from "./Overlay";

const Filter = (props) => {
  const [sliderV, setSliderV] = useState(25);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState([0,1]);
  const [keyword, setKeyword] = useState("");

  const onSliderChangeP = (value) => {
    setSliderV(value);
  };

  const onAddressChange = event => {
    setAddress(event.target.value);
  }

  const buttonHandler = value => {
    setPrice(value);
  }

  const onKeyWordChange = event => {
    setKeyword(event.target.value);
  }
  
  var chewsdata = ["0", [0,0], 0, "0"];

  const onChewsen = event => {
    chewsdata[0] = address;
    chewsdata[1] = price;
    chewsdata[2] = sliderV;
    chewsdata[3] = keyword;
    props.chews(chewsdata);
    console.log(address)
  }

    return (
      <div className="filter">
        <p>Address</p>
        <input id="input" onChange={onAddressChange}></input>
        <div id="distance">
          <p style={{ marginRight: "10px" }}>Max Distance:</p>
          <p>{sliderV}</p>
          <p style={{ marginLeft: "5px" }}>Miles</p>
        </div>
        <Slider onSliderChangeC={onSliderChangeP} />
        <p>Price</p>
        <div id="prices">
          <PriceButton bstatus={buttonHandler}></PriceButton>
        </div>
        <p>Cuisine</p>
        <div id="cuisine"></div>
        <div id="chewsbuttondiv">
          <button id="chewsbutton" onClick={onChewsen}>
            <img id="mcbutton" src="/assets/Logos/mcbutton.png" alt="this is the meal chewser button" />   
          </button>
        </div>
      </div>
    );
};

export default Filter;
