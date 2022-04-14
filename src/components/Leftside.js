import React, { useState } from "react";

import "./Leftside.css";
import Tab from "./Internals/Tab";
import Filter from "./Filter.js";
import Results from "./Results.js";

const Leftside = (props) => {
  const [tab, setTab] = useState(0);
  const [filterColor, setFilterColor] = useState("#C0DCF3");
  const [resultsColor, setResultsColor] = useState("#8CB0DD");

  const clickedFilterTab = (event) => {
    setTab(0);
    setFilterColor("#C0DCF3");
    setResultsColor("#8CB0DD");
  };

  const clickedResultsTab = (event) => {
    setTab(1);
    setFilterColor("#8CB0DD");
    setResultsColor("#C0DCF3");
  };

  const onChews = value => {
    props.cdataHandler(value);
  }

  if (tab == 0) {
    return (
      <div className="leftside">
        <div className="tabs">
          <Tab
            title="Filter"
            coloring={filterColor}
            onClick={clickedFilterTab}
          />
          <Tab
            title="Results"
            coloring={resultsColor}
            onClick={clickedResultsTab}
          />
        </div>
        <Filter chews={onChews}></Filter>
      </div>
    );
  }
  else {
    return (
        <div className="leftside">
        <div className="tabs">
          <Tab
            title="Filter"
            coloring={filterColor}
            onClick={clickedFilterTab}
          />
          <Tab
            title="Results"
            coloring={resultsColor}
            onClick={clickedResultsTab}
          />
        </div>
        <Results></Results>
      </div>
    );
  }
};

export default Leftside;
