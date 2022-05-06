import React, { useState } from "react";

import "./Plate.css";
import Item from "./Internals/Item";
import Overlay from "./Overlay";

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

  const clickedEliminate = (event) => {
    customlistindex.splice(
      Math.floor(Math.random() * customlistindex.length),
      1
    );
    setReload(true);
  };

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
  } else {
    customlist.push(
      <p className="emptyplate" key="1">
        Chews Some Plates!
      </p>
    );
  }

  //Builds the list
  var resultslist = [];
  for (var j = 0; j < props.resultsdata.length; j++) {
    if (customlistindex.indexOf(j) === -1) {
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
    } else {
      resultslist.push(
        <Item
          name={props.resultsdata[j].name}
          price={props.resultsdata[j].price_level}
          rating={props.resultsdata[j].rating}
          key={j}
          index={j}
          clickedaddlist={clickedaddlist}
          status={true}
        ></Item>
      );
    }
  }

  if (resultslist.length === 0) {
    resultslist.push(
      <p className="emptyaddplate" key="1">
        NO RESULTS
      </p>
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
        key="2"
      />
    );
  }

  if (reload) {
    setReload(false);
  }

  //Show and hide overlay
  const [showOverlay, setShowOverlay] = useState(false);
  const onClickedBackdrop = (event) => {
    setShowOverlay(false);
  };

  //choose a random number
  const [chosen, setChosen] = useState(0);
  const [overlaydata, setOverlayData] = useState([]);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const clickedRandomSelect = (event) => {
    var tempchosen = 0;
    if (customlistindex.length === 0) {
      setRenderOverlay(false);
    } else if (customlistindex.length === 1) {
      setRenderOverlay(true);
      tempchosen = 0;
      setChosen(tempchosen);
      setOverlayData([
        props.resultsdata[customlistindex[chosen]].name,
        props.resultsdata[customlistindex[chosen]].price_level,
        props.resultsdata[customlistindex[chosen]].vicinity,
        props.resultsdata[customlistindex[chosen]].rating,
        props.resultsdata[customlistindex[chosen]].place_id,
      ]);
      setShowOverlay(true);
    } else {
      setRenderOverlay(true);
      while (chosen === tempchosen) {
        tempchosen = Math.floor(Math.random() * customlistindex.length);
      }
      setChosen(tempchosen);
      setOverlayData([
        props.resultsdata[customlistindex[chosen]].name,
        props.resultsdata[customlistindex[chosen]].price_level,
        props.resultsdata[customlistindex[chosen]].vicinity,
        props.resultsdata[customlistindex[chosen]].rating,
        props.resultsdata[customlistindex[chosen]].place_id,
      ]);
      setShowOverlay(true);
    }
  };

  //Go to filter button
  const goToFilter = (event) => {
    props.clickedPlateFilter();
  };

  return (
    <div className={props.showPlate ? "plate" : "disappear"}>
      {/* Ternary to pick className, disappear has a styling to display:none*/}
      <button id="platebutton" onClick={toggleCustom}>
        {toggleCustomButton}
      </button>
      <button id="filterbutton" onClick={goToFilter}>
        FILTER
      </button>
      <div className={!custom ? "addplatepage" : "disappear"}>
        <p className="addplatetitle">ADD TO PLATE</p>
        <div className="resultslist">{!custom ? resultslist : <div />}</div>
      </div>
      <div className={custom ? "platepage" : "disappear"}>
        <p className="platetitle">PLATE</p>
        <div className="platebuttons">
          <button className="platebutton" onClick={clickedRandomSelect}>
            Chews my Meal
          </button>
          <p className="or">OR</p>
          <button className="platebutton" onClick={clickedEliminate}>
            Eliminate an Option
          </button>
        </div>
        <div className="customlist">{customlist}</div>
        <Overlay
          showOverlay={showOverlay}
          onClickedBackdrop={onClickedBackdrop}
          overlaydata={overlaydata}
          clickedRandomSelect={clickedRandomSelect}
          origin={props.origin}
          renderOverlay={renderOverlay}
        ></Overlay>
      </div>
    </div>
  );
};

export default Plate;
