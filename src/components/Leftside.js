import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Results from "./Results.js";

const Leftside = (props) => {
  const [showFilter, setShowFilter] = useState(true); //changed this to boolean
  const [showResults, setShowResults] =useState(false);
  const [filterColor, setFilterColor] = useState("#ffffff");
  const [resultsColor, setResultsColor] = useState("#C0DCF3");

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
    props.inputdataHandler(chewsdata);
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
        <Results showResults={showResults} resultsdata={props.resultsdata} chosennum={props.chosennum}></Results>
      </div>
    );
  }


export default Leftside;
