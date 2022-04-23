import React, { useState } from "react";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";

const Content = (props) => {
  const [adata, setAData] = useState();
  const [filtereddata, setFilteredData] = useState();

  const adataHandler = allData => {
    // setAData(allData);
    console.log("inside adataHandler: " + adata);
  }

  const handleFilterData = filtereddata => {
    setFilteredData(filtereddata);
  }

  return (
    <div className={props.showHome ? "content": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
      <Leftside inputdata={props.inputdata} handleFilterData={handleFilterData} adata={adata}></Leftside>
      <Map
        filtereddata={props.inputdata}
        adataHandler={adataHandler}
      ></Map>
    </div>
  );
};

export default Content;
