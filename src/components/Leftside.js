import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Results from "./Results.js";

const Leftside = (props) => {
  const [showFilter, setShowFilter] = useState(true);
  const [filterColor, setFilterColor] = useState("#C0DCF3");
  const [resultsColor, setResultsColor] = useState("#8CB0DD");

  const clickedFilterTab = (event) => {
   setShowFilter(true);
    setFilterColor("#ffffff");
    setResultsColor("#ffffff");
  };

  const clickedResultsTab = (event) => {
   setShowFilter(false);
    setFilterColor("#ffffff");
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
