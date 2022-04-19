import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Results from "./Results.js";

const Leftside = (props) => {
  const [showFilter, setShowFilter] = useState(true); //changed this to boolean
  const [filterColor, setFilterColor] = useState("#ffffff");
  const [resultsColor, setResultsColor] = useState("#C0DCF3");

  const clickedFilterTab = (event) => {
    setShowFilter(true); //if you click filter tab, you should show filter. 
    setFilterColor("#ffffff");
    setResultsColor("#C0DCF3");
  };

  const clickedResultsTab = (event) => {
    setShowFilter(false);
    setFilterColor("#C0DCF3");
    setResultsColor("#ffffff");
  };

  const onChews = value => {
    props.cdataHandler(value);
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
        <Filter chews={onChews} showFilter={showFilter}></Filter> 
      </div>
    );
  }


export default Leftside;
