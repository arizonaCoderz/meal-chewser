import React, { useState } from "react";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";

const Content = (props) => {
  const [data, setData] = useState(["", [0, 0], 0, "0"]);

  const pdataHandler = (value) => {
    setData(value);
  };

  return (
    <div className="content">
      <Leftside cdataHandler={pdataHandler}></Leftside>
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
