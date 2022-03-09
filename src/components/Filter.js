import React from "react";

import "./Filter.css";

const Filter = (props) => {
  return (
    <div className="filter">
      <p>Address</p>
      <input id="input"></input>
      <p>Max Distance</p>
    </div>
  );
};

export default Filter;
