import React, { useState } from "react";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";

const Content = (props) => {
  const [inputdata, setInputData] = useState([props.inputdata[0], props.inputdata[1], props.inputdata[2], props.inputdata[3]]);

  const pdataHandler = (value) => {
    setInputData(value);
  };

  const adataHandler = allData => {
    console.log(allData);
  }

  return (
    <div className={props.showHome ? "content": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
      <Leftside cdataHandler={pdataHandler} inputdata={inputdata}></Leftside>
      <Map
        inputdata={inputdata}
        adataHandler={adataHandler}
      ></Map>
    </div>
  );
};

export default Content;
