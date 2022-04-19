import React, { useState } from "react";

import "./Filter.css";
import Slider from "./Internals/Slider";
import PriceButton from "./Internals/PriceButton";
import Overlay from "./Overlay";

const Filter = (props) => {
  const [sliderV, setSliderV] = useState(props.data[2]);
  const [address, setAddress] = useState(props.data[0]);
  const [price, setPrice] = useState(props.data[1]);
  const [keyword, setKeyword] = useState(props.data[3]);

  var chewsdata = [address, price, sliderV, keyword];

  const onSliderChangeP = (value) => {
    setSliderV(value);
  };

  const onAddressChange = event => {
    setAddress(event.target.value);
  }

  const buttonHandler = value => {
    setPrice(value);
  }

  const onKeywordChange = event => {
    setKeyword(event.target.value);
  }

  const onChewsen = event => {
    chewsdata[0] = address;
    chewsdata[1] = price;
    chewsdata[2] = sliderV;
    chewsdata[3] = keyword;
    props.chews(chewsdata);
    console.log(address)
  }


    return (
      <div className={props.showFilter ? "filter": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}

        <p>ADDRESS</p>
        <input id="input" onChange={onAddressChange} placeholder="Street, City, Zip" value={address}></input>

        <div id="distance">
          <p style={{ marginRight: "10px" }}>MAX DISTANCE:</p>
          <p>{sliderV}</p>
          <p style={{ marginLeft: "5px" }}>MILES</p>
        </div>
        <Slider bcolor="#5C7CBE" onSliderChangeC={onSliderChangeP} value={sliderV}/>

        <p>PRICE</p>
        <div id="prices">
          <PriceButton bstatus={buttonHandler} value={price}></PriceButton>
        </div>

        <div className="keyworddiv">
          <p>KEYWORD</p>
          <input id="keywordinput" onChange={onKeywordChange} placeholder="dinner, pizza, etc" value={keyword}></input>
          <p id="note">*If you have multiple keywords, separate by commas</p>
        </div>

        <div id="chewsbuttondiv">
          <button id="chewsbutton" onClick={onChewsen}>
            <img id="mcbutton" src="/assets/Logos/mcbuttoninv.png" alt="this is the meal chewser button" />   
          </button>
        </div>
      </div>
    );
};

export default Filter;
