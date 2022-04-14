import React, { useState } from "react";

import "./Filter.css";
import Slider from "./Internals/Slider";
import PriceButton from "./Internals/PriceButton";
import Overlay from "./Overlay";

const Filter = (props) => {
  const [sliderV, setSliderV] = useState(25);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState([0,0]);
  const [keyword, setKeyword] = useState("dessert");

  const onSliderChangeP = (value) => {
    setSliderV(value);
  };

  const onAddressChange = event => {
    setAddress(event.target.value);
  }

  const button1Handler = value => {
    setPrice([0,1]);
  }

  const button2Handler = value => {
    setPrice([2,3]);
  }

  const button3Handler = value => {
    setPrice([4,4]);
  }

  const onKeyWordChange = event => {
    setKeyword(event.target.value);
  }
  

  const [overlay, setOverlay] = useState(false);
  // const pullOverlay = (event) => {
  //   //pulls up the randomized result
  //   setOverlay(true);
  // };
  const removeOverlay = (event) => {
    //removes the overlay and backdrop
    setOverlay(false);
  };
  
  var chewsdata = ["0", [0,0], 0, "0"];

  const onChewsen = event => {
    chewsdata[0] = address;
    chewsdata[1] = price;
    chewsdata[2] = sliderV;
    chewsdata[3] = keyword;
    props.chews(chewsdata);
    setOverlay(true);
    console.log(address)
  }

  // if (overlay === true) {
  //   return (
  //     <div className="filter">
  //       <p>Address</p>
  //       <input id="input"></input>
  //       <div id="distance">
  //         <p style={{ marginRight: "10px" }}>Max Distance:</p>
  //         <p>{sliderV}</p>
  //         <p style={{ marginLeft: "5px" }}>Miles</p>
  //       </div>
  //       <Slider onSliderChangeC={onSliderChangeP} />
  //       <p>Price</p>
  //       <div id="prices">
  //         <PriceButton value="$"></PriceButton>
  //         <PriceButton value="$$"></PriceButton>
  //         <PriceButton value="$$$"></PriceButton>
  //       </div>
  //       <p>Cuisine</p>
  //       <div id="cuisine"></div>
  //       <div id="chewsbuttondiv">
  //         <button id="chewsbutton" onClick={onChewsen}>
  //           Chews My Meal
  //         </button>
  //       </div>
  //       <Overlay onClickedBackdrop={removeOverlay}></Overlay>
  //     </div>
  //   );
  // } else {
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
          <PriceButton value="$" bstatus={button1Handler}></PriceButton>
          <PriceButton value="$$" bstatus={button2Handler}></PriceButton>
          <PriceButton value="$$$" bstatus={button3Handler}></PriceButton>
        </div>
        <p>Cuisine</p>
        <div id="cuisine"></div>
        <div id="chewsbuttondiv">
          <button id="chewsbutton" onClick={onChewsen}>
            Chews My Meal
          </button>
        </div>
      </div>
    );
  //} //for the overlay
};

export default Filter;
