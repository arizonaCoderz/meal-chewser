import React, { useState } from "react";

import "./Results.css";
import Delayed from "./Internals/Delayed";

function getDistanceFromLatLngInMiles(lat1, lon1, lat2, lon2) { //calculate distance between 2 latlng pairs
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
  //choose a random number
  const [chosennum, setChosenNum] = useState(Math.floor(Math.random() * props.resultsdata.length));
  props.chosenHandler(chosennum);


  //choose a new number (Choose again button was pressed)
  const clickedChooseAgain = (event) => {
    var newChosen = Math.floor(Math.random() * props.resultsdata.length);
    while (newChosen == chosennum) {
      newChosen = Math.floor(Math.random() * props.resultsdata.length); //make sure new chosen is not the same as old chosen
    }
    setChosenNum(newChosen);
    props.clickedChooseAgain(newChosen);
  };

  if (props.resultsdata.length != 0) {
    return (
      <div className={props.showResults ? "results" : "disappear"}>{/* Ternary to pick className, disappear has a styling to display:none*/}
        <p className="letseat">LETS EAT!</p>
        <p className="nameinfo">{props.resultsdata[chosennum].name}</p>
        <p className="addressinfo">
          {props.resultsdata[chosennum].vicinity}
        </p>
        <p className="distanceinfo">
          {Math.round(
            getDistanceFromLatLngInMiles(
              props.resultsdata[chosennum].geometry.location.lat,
              props.resultsdata[chosennum].geometry.location.lng,
              props.origin[0],
              props.origin[1]
            ) * 10
          ) / 10}{" "}
          Miles
        </p>
        <div className="resultbuttons">
          <button className="gobutton">GO</button>
          <button className="chooseagain" onClick={clickedChooseAgain}>
            CHOOSE AGAIN
          </button>
        </div>
      </div>
    );
  } else {
    return <div>No Results</div>;
  }
};

export default Results;
