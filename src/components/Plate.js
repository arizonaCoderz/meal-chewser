import React, { useState } from "react";

import "./Plate.css";
import Item from "./Internals/Item";

const Plate = (props) => {
  console.log(props.resultsdata);

  //Adds or removes item to custom list
  const [customlistindex, setCustomListIndex] = useState([]);
  const clickedaddlist = (value) => {
    if (customlistindex.indexOf(value) !== -1) {
      setCustomListIndex((customlistindex) => customlistindex.splice(customlistindex.indexOf(value), 1));
    } else {
      setCustomListIndex((customlistindex) => [...customlistindex, value]);
    }
  };
  console.log(customlistindex);

  //Builds the custom list using the custom list index
  var customlist = [];
  if (customlistindex.length != 0) {
    for (var i = 0; i < customlistindex.length; i++) {
      customlist.push(
        <Item
          name={props.resultsdata[customlistindex[i]].name}
          price={props.resultsdata[customlistindex[i]].price_level}
          rating={props.resultsdata[customlistindex[i]].rating}
          key={customlistindex[i]}
          index={i}
          clickedaddlist={clickedaddlist}
          status={true}
        ></Item>
      );
    }
  }

  //Builds the list
  var resultslist = [];
  for (var i = 0; i < props.resultsdata.length; i++) {
    resultslist.push(
      <Item
        name={props.resultsdata[i].name}
        price={props.resultsdata[i].price_level}
        rating={props.resultsdata[i].rating}
        key={i}
        index={i}
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

  if (custom == false) {
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

  return (
    <div className={props.showPlate ? "plate" : "disappear"}>
      {/* Ternary to pick className, disappear has a styling to display:none*/}
      <button id="platebutton" onClick={toggleCustom}>
        {toggleCustomButton}
      </button>
      <p className={!custom ? "addplatetitle" : "disappear"}>ADD TO PLATE</p>
      <p className={custom ? "platetitle" : "disappear"}>PLATE</p>
      <div className={!custom ? "resultslist" : "disappear"}>{resultslist}</div>
      <div className={custom ? "customlist" : "disappear"}>{customlist}</div>
    </div>
  );
};

export default Plate;
