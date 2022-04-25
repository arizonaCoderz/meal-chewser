import React, { useState } from "react";

import "./Results.css";
import Result from "./Result.js";

function getDistanceFromLatLngInMiles(lat1, lon1, lat2, lon2) {
  var R = 3963; // Radius of the earth in miles
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in miles
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const Results = (props) => {
  if (props.resultsdata.length != 0) {
    return (
      <div className={props.showResults ? "results" : "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
        <p>{props.resultsdata[props.chosennum].name}</p>
        <p>{props.resultsdata[props.chosennum].vicinity}</p>
        <p>
          {Math.round(
            getDistanceFromLatLngInMiles(
              props.resultsdata[props.chosennum].geometry.location.lat,
              props.resultsdata[props.chosennum].geometry.location.lng,
              props.origin[0],
              props.origin[1]
            ) * 10
          ) / 10} Miles
        </p>
      </div>
    );
  } else {
    return <div>No Results</div>;
  }
};

export default Results;
