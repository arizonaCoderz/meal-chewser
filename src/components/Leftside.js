import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Results from "./Results.js";

const Leftside = (props) => {
  //Initialize Filter/Result States and tab colors
  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] =useState(true);
  const [filterColor, setFilterColor] = useState("#C0DCF3");
  const [resultsColor, setResultsColor] = useState("#ffffff");

  //Executes when Fitler tab is clicked
  const clickedFilterTab = (event) => {
    setShowFilter(true);
    setShowResults(false);
    setFilterColor("#ffffff");
    setResultsColor("#C0DCF3");
  };

  //Executes when results tab is clicked
  const clickedResultsTab = (event) => {
    setShowFilter(false);
    setShowResults(true);
    setFilterColor("#C0DCF3");
    setResultsColor("#ffffff");
  };

  //Executes when Chews My Meal button is clicked in filter
  const onChews = chewsdata => {
    clickedResultsTab();
    props.inputdataHandler(chewsdata);
  }

  //Executes when Choose Again button is clicked in results
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
            title="RESULTS"
            coloring={resultsColor}
            onClick={clickedResultsTab}
          />
        </div>
        <Filter chews={onChews} showFilter={showFilter} inputdata={props.inputdata}></Filter> 
        <Results showResults={showResults} resultsdata={props.resultsdata} origin={props.origin} clickedChooseAgain={clickedChooseAgain} chosennum={props.chosennum}></Results>
      </div>
    );
  }


export default Leftside;
