import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Chosen from "./Chosen.js";

const Leftside = (props) => {
  //Initialize Filter/Chosen States and tab colors
  const [showFilter, setShowFilter] = useState(false);
  const [showChosen, setShowChosen] =useState(true);
  const [filterColor, setFilterColor] = useState("#C0DCF3");
  const [chosenColor, setChosenColor] = useState("#ffffff");

  //Executes when Fitler tab is clicked
  const clickedFilterTab = (event) => {
    setShowFilter(true);
    setShowChosen(false);
    setFilterColor("#ffffff");
    setChosenColor("#C0DCF3");
  };

  //Executes when chosen tab is clicked
  const clickedChosenTab = (event) => {
    setShowFilter(false);
    setShowChosen(true);
    setFilterColor("#C0DCF3");
    setChosenColor("#ffffff");
  };

  //Executes when Chews My Meal button is clicked in filter
  const onChews = chewsdata => {
    clickedChosenTab();
    props.inputdataHandler(chewsdata);
  }

  //Executes when Choose Again button is clicked in chosen
  const clickedChooseAgain = event => {
    props.changeChosen();
  }

    return (
      <div className="leftside">
        <div className="tabs">
          <Tab
            title="FILTER"
            coloring={filterColor}
            onClick={clickedFilterTab}
          />
          <Tab
            title="CHOSEN"
            coloring={chosenColor}
            onClick={clickedChosenTab}
          />
        </div>
        <Filter chews={onChews} showFilter={showFilter} inputdata={props.inputdata} filtertype="Results"></Filter> 
        <Chosen showChosen={showChosen} chosendata={props.resultsdata} origin={props.origin} clickedChooseAgain={clickedChooseAgain} chosennum={props.chosennum}></Chosen>
      </div>
    );
  }


export default Leftside;
