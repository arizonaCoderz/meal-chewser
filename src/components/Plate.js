import React, { useState, useEffect } from "react";

import "./Plate.css";
import Item from "./Internals/Item";
import Overlay from "./Overlay";
import Filter from "./Filter";

const Plate = (props) => {
  //Initialize all Plate variables---------------------------------------------------------------------------------------------------------
  const [reload, setReload] = useState(false); //triggers reload when something is added to the plate
  const [customlistindex, setCustomListIndex] = useState([]); //index that shows which objects in the search data should be in the plate
  const [custom, setCustom] = useState(false); //toggles between plate and add to plate pages
  const [showOverlay, setShowOverlay] = useState(false); //show overlay or not
  const [chosen, setChosen] = useState(0); //chosen is the index of the randomized chosen restaurant
  const [overlaydata, setOverlayData] = useState([]); //sends data to overlay
  const [renderOverlay, setRenderOverlay] = useState(false); //render overlay or not
  var customlist = []; //array of Item objects in the plate
  var resultslist = []; //array of all Item objects from search data
  var toggleCustomButton = []; //fork and knife icon toggle
  const [showFilter, setShowFilter] = useState(false);
  const [showChooseAgain, setChooseAgain] = useState(true);

  //Adds or removes item to custom list---------------------------------------------------------------------------------------------------
  const clickedaddlist = (value) => {
    if (customlistindex.indexOf(value) === -1) {
      setCustomListIndex((customlistindex) => [...customlistindex, value]);
    } else {
      customlistindex.splice(customlistindex.indexOf(value), 1);
      setCustomListIndex(customlistindex);
      setReload(true);
    }
  };

  //Removes an item from plate when Eliminate an Option button is clicked
  const clickedEliminate = (event) => {
    customlistindex.splice(
      Math.floor(Math.random() * customlistindex.length),
      1
    );
    if (customlistindex.length === 1) {
      setRenderOverlay(true);
      setOverlayData([
        props.resultsdata[customlistindex[0]].name,
        props.resultsdata[customlistindex[0]].price_level,
        props.resultsdata[customlistindex[0]].vicinity,
        props.resultsdata[customlistindex[0]].rating,
        props.resultsdata[customlistindex[0]].place_id,
      ]);
      setShowOverlay(true);
    }
    setReload(true);
  };

  //Builds the custom list using the custom list index------------------------------------------------------------------------------------
  if (customlistindex.length !== 0 && props.resultsdata.length !== 0) {
    for (var i = 0; i < customlistindex.length; i++) {
      customlist.push(
        <Item
          name={props.resultsdata[customlistindex[i]].name}
          price={props.resultsdata[customlistindex[i]].price_level}
          rating={props.resultsdata[customlistindex[i]].rating}
          address={props.resultsdata[customlistindex[i]].vicinity}
          key={customlistindex[i]}
          index={customlistindex[i]}
          number={customlist.length + 1}
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

  //Builds the list from the search data---------------------------------------------------------------------------------------------------
  for (var j = 0; j < props.resultsdata.length; j++) {
    if (customlistindex.indexOf(j) === -1) {
      resultslist.push(
        <Item
          name={props.resultsdata[j].name}
          price={props.resultsdata[j].price_level}
          rating={props.resultsdata[j].rating}
          address={props.resultsdata[j].vicinity}
          key={j}
          index={j}
          number={resultslist.length + 1}
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
          address={props.resultsdata[j].vicinity}
          key={j}
          index={j}
          number={resultslist.length + 1}
          clickedaddlist={clickedaddlist}
          status={true}
        ></Item>
      );
    }
  }

  //Shows no results if there are no results------------------------------------------------------------------------------------------------
  if (resultslist.length === 0) {
    resultslist.push(
      <p className="emptyaddplate" key="1">
        NO RESULTS
      </p>
    );
  }

  //Toggles between plate and add to plate----------------------------------------------------------------------------------------------------
  const toggleCustom = (event) => {
    setCustom(!custom);
  };

  if (custom === false) {
    toggleCustomButton.push(
      <img
        className="custombuttons"
        src="./assets/Logos/gotoplate.png"
        alt="this is next button"
        key="1"
      />
    );
  } else {
    toggleCustomButton.push(
      <img
        className="custombuttons"
        src="./assets/Logos/backbutton.png"
        alt="this is a previous button"
        key="2"
      />
    );
  }

  //triggers reload if something was added to the plate--------------------------------------------------------------------------------------------
  if (reload) {
    setReload(false);
  }

  //Show and hide overlay--------------------------------------------------------------------------------------------------------------------------
  const onClickedBackdrop = (event) => {
    setShowOverlay(false);
  };

  //choose a random number for the index of the randomized restaurant-------------------------------------------------------------------------------
  const clickedRandomSelect = (event) => {
    var tempChosen = chosen;
    if (customlistindex.length === 0) {
      setRenderOverlay(false);
    } else if (customlistindex.length === 1) {
      setRenderOverlay(true);
      setOverlayData([
        props.resultsdata[customlistindex[0]].name,
        props.resultsdata[customlistindex[0]].price_level,
        props.resultsdata[customlistindex[0]].vicinity,
        props.resultsdata[customlistindex[0]].rating,
        props.resultsdata[customlistindex[0]].place_id,
      ]);
      setShowOverlay(true);
    } else {
      setRenderOverlay(true);
      while (chosen === tempChosen) {
        tempChosen = Math.floor(Math.random() * customlistindex.length);
      }
      setChosen(tempChosen);
      setOverlayData([
        props.resultsdata[customlistindex[tempChosen]].name,
        props.resultsdata[customlistindex[tempChosen]].price_level,
        props.resultsdata[customlistindex[tempChosen]].vicinity,
        props.resultsdata[customlistindex[tempChosen]].rating,
        props.resultsdata[customlistindex[tempChosen]].place_id,
      ]);
      setShowOverlay(true);
    }
  };

  //Toggle Filter when Filter Button is clicked-----------------------------------------------------------------------------------------------------
  const clickedFilter = (event) => {
    setShowFilter(!showFilter);
  };

  //Updated search parameters are run
  const onBuildPlate = (chewsdata) => {
    props.inputdataHandler(chewsdata);
  };

  //display choose again button in overlay or not----------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (customlist.length > 1) {
      setChooseAgain(true);
    } else {
      setChooseAgain(false);
    }
  }, [customlist]);

  return (
    <div className={props.showPlate ? "plate" : "disappear"}>
      <div className="platediv">
        <div className={!custom ? "createplatepage" : "disappear"}>
          <p className="createplatetitle">CREATE A PLATE</p>
          <button className="platefilterbutton" onClick={clickedFilter}>
            FILTER
          </button>
          <Filter
            chews={onBuildPlate}
            showFilter={showFilter}
            inputdata={props.inputdata}
            filtertype="Plate"
          ></Filter>
          <div className="resultslist">{!custom ? resultslist : <div />}</div>
        </div>
        <div className={custom ? "platepage" : "disappear"}>
          <p className="platetitle">PLATE</p>
          <div className="platebuttons">
            <button className="platebutton" onClick={clickedRandomSelect}>
              CHEWS MY MEAL
            </button>
            <p className="or">OR</p>
            <button className="platebutton" onClick={clickedEliminate}>
              ELIMINATE AN OPTION
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
            showChooseAgain={showChooseAgain}
          ></Overlay>
        </div>
        <div className="platetogglebutton">
          <button
            className={!custom ? "gotoplatebutton" : "backbutton"}
            onClick={toggleCustom}
          >
            {toggleCustomButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plate;
