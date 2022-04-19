import React, { useState } from "react";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";

const Content = (props) => {
  const [data, setData] = useState([props.data[0], props.data[1], props.data[2], props.data[3]]);

  const pdataHandler = (value) => {
    setData(value);
  };

  return (
    <div className={props.showHome ? "content": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
      <Leftside cdataHandler={pdataHandler} data={data}></Leftside>
      <Map
        address={data[0]}
        price={data[1]}
        distance={data[2]}
        keyword={data[3]}
      ></Map>
    </div>
  );
};

export default Content;
