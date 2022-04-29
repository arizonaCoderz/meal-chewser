import React, { useState } from "react";

import "./Plate.css";
import Item from "./Internals/Item";

const Plate = (props) => {
  const [reload, setReload] = useState(false);

  //Adds or removes item to custom list
  const [customlistindex, setCustomListIndex] = useState([]);
  const clickedaddlist = (value) => {
    // console.log("value is " + value)
    // console.log("index is " + customlistindex.indexOf(value))
    // console.log(customlistindex);
    if (customlistindex.indexOf(value) === -1) {
      setCustomListIndex((customlistindex) => [...customlistindex, value]);
      // console.log(customlistindex);
    } else {
      customlistindex.splice(customlistindex.indexOf(value), 1);
      setCustomListIndex(customlistindex);
      setReload(true);
    }
  };
  // console.log(customlistindex);


  //Builds the custom list using the custom list index
  var customlist = [];
  if (customlistindex.length !== 0) {
    for (var i = 0; i < customlistindex.length; i++) {
      customlist.push(
        <Item
          name={props.resultsdata[customlistindex[i]].name}
          price={props.resultsdata[customlistindex[i]].price_level}
          rating={props.resultsdata[customlistindex[i]].rating}
          key={customlistindex[i]}
          index={customlistindex[i]}
          clickedaddlist={clickedaddlist}
          status={true}
        ></Item>
      );
    }
  }

  //Builds the list
  var resultslist = [];
  for (var j = 0; j < props.resultsdata.length; j++) {
    resultslist.push(
      <Item
        name={props.resultsdata[j].name}
        price={props.resultsdata[j].price_level}
        rating={props.resultsdata[j].rating}
        key={j}
        index={j}
        clickedaddlist={clickedaddlist}
        status={false}
      ></Item>
    );
  }

  //Toggles between list and custom list
  var toggleCustomButton = [];

  const [custom, setCustom] = useState(false);
  const toggleCustom = (event) => {
    setCustom(!custom);
  };

  if (custom === false) {
    toggleCustomButton.push(
      <img
        src="/assets/Logos/forkandknife.png"
        alt="this is fork and knife icon"
        key="1"
      />
    );
  } else {
    toggleCustomButton.push(
      <img
        className="invertedfk"
        src="/assets/Logos/iforkandknife.png"
        alt="this is inverted fork and knife icon"
        key="1"
      />
    );
  }

  if (reload) {
    setReload(false);
  }

  return (
    <div className={props.showPlate ? "plate" : "disappear"}>
      {/* Ternary to pick className, disappear has a styling to display:none*/}
      <button id="platebutton" onClick={toggleCustom}>
        {toggleCustomButton}
      </button>
      <div className={!custom ? "addplatepage" : "disappear"}>
        <p className="addplatetitle">ADD TO PLATE</p>
        <div className="resultslist">{resultslist}</div>
      </div>
      <div className={custom ? "platepage" : "disappear"}>
        <p className="platetitle">PLATE</p>
        <div className="platebuttons">
          <button className="platebutton">Random Select</button>
          <p className="or">OR</p>
          <button className="platebutton">Eliminate</button>
        </div>
        <div className="customlist">{customlist}</div>
      </div>
    </div>
  );
};

export default Plate;
