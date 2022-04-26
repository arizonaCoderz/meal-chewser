import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Results from "./Results.js";

const Leftside = (props) => {
  const [showFilter, setShowFilter] = useState(false); //changed this to boolean
  const [showResults, setShowResults] =useState(true);
  const [filterColor, setFilterColor] = useState("#C0DCF3");
  const [resultsColor, setResultsColor] = useState("#ffffff");

  const clickedFilterTab = (event) => {
    setShowFilter(true); //if you click filter tab, you should show filter. 
    setShowResults(false);
    setFilterColor("#ffffff");
    setResultsColor("#C0DCF3");
  };

  const clickedResultsTab = (event) => {
    setShowFilter(false);
    setShowResults(true);
    setFilterColor("#C0DCF3");
    setResultsColor("#ffffff");
  };

  const onChews = chewsdata => {
    clickedResultsTab();
    props.inputdataHandler(chewsdata);
  }

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
        <Results showResults={showResults} resultsdata={props.resultsdata} chosennum={props.chosennum} origin={props.origin} clickedChooseAgain={clickedChooseAgain}></Results>
      </div>
    );
  }


export default Leftside;
