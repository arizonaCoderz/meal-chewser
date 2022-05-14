import React, { useState } from "react";

import "./Home.css";
import HomeFilter from "./Internals/HomeFilter";

const Home = (props) => {
  //Initialize address and show filter state
  const [address, setAddress] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [isEmptyInput, setEmptyInput] = useState(false);

  //Executes when address is input (two way binding)
  const onAddressChange = (event) => {
    setAddress(event.target.value);
  };

  //Controls whether additional filters are shown or not
  const filterhandler = (event) => {
    if (showFilter === false) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  //Initialize Home filter variables
  var idata = [address, [0, 0], 0, ""];
  const chewsenhandler = (ichewsdata) => {
    idata[1] = ichewsdata[0];
    idata[2] = ichewsdata[1];
    idata[3] = ichewsdata[2];
  };

  //Executes when Chews My Meal button is clicked
  const chewshandler = (event) => {
    if (address === "") {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    }
    props.clickedChews(idata);
  };

  //Executes when Build My Plate button is clicked
  const buildhandler = (event) => {
    if (address === "") {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    }
    props.clickedBuild(idata);
  };

  //Add event listener for enter key press
  const handleEnterPress = e => {
    if (e.code.toString() === "Enter") {
      chewshandler();
    }
  }

  return (
    <div className={props.showHome? "home" : "disappear"}>
      <img
        id="homelogo"
        src="/assets/Logos/MealChewser_Logo7.png"
        alt="this is a big MealChewser Logo"
      />
      <div id="inputdiv">
        <input
          id={isEmptyInput ? "homeinputempty" : "homeinput"}
          onChange={onAddressChange}
          placeholder="Street, City, and/or Zip"
          onKeyPress={handleEnterPress}
        ></input>
      </div>
      <div id="homefilterdiv">
        <button id="filterdropdown" onClick={filterhandler}>
          <p>FILTERS</p>
          <img
            id="caret"
            src="/assets/Logos/Caretdown.png"
            alt="this is a caret down icon"
          />
        </button>
      </div>
      <HomeFilter showFilter={showFilter} chews={chewsenhandler}></HomeFilter>
      <div className="homebuttons">
        <button id="hchewsbutton" onClick={chewshandler}>
          <img
            className="hbuttons"
            src="/assets/Logos/chewsmymeal.png"
            alt="this is a Meal Chewser button"
          />
        </button>
        <p id="homeortext">OR</p>
        <button id="hbuildbutton" onClick={buildhandler}>
          <img
            className="hbuttons"
            src="/assets/Logos/buildmyplate.png"
            alt="this is a Build a Meal button"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
