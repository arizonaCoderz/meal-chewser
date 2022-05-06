import React from "react";

import "./Results.css";

function getDistanceFromLatLngInMiles(lat1, lng1, lat2, lng2) {
  //calculate distance between 2 latlng pairs
  var R = 3963; // Radius of the earth in miles
  var dLat = deg2rad(lat2 - lat1);
  var dLng = deg2rad(lng2 - lng1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in miles
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const Results = (props) => {
  //Choose Again button pressed
  const clickedChooseAgain = (event) => {
    props.clickedChooseAgain();
  };

  var photolink =
    "https://maps.googleapis.com/maps/api/place/photo?maxheight=400&maxwidth=400&photo_reference=";
  var placelink = "https://www.google.com/maps/dir/?api=1&origin=";

  if (props.resultsdata.length !== 0) {
    photolink =
      photolink +
      props.resultsdata[props.chosennum].photos[0].photo_reference +
      "&sensor=false&key=" + process.env.REACT_APP_API_KEY;
    placelink = placelink + props.origin[2] + "&destination=";
    placelink =
      placelink +
      props.resultsdata[props.chosennum].vicinity
        .trim()
        .replace(/ /g, "+")
        .toString() +
      "&destination_place_id=";
    placelink = placelink + props.resultsdata[props.chosennum].place_id;
  }

  //Additional Information Retrieval
  // var addInfoURL =
  //   "https://maps.googleapis.com/maps/api/place/findplacefromtext/json" + 
  //   "?fields=name%2Copening_hours%2Cphoto" + 
  //   "&input=" +
  //   props.resultsdata[props.chosennum].name.trim().replace(/ /g, "%20") +
  //   "&inputtype=textquery" +
  //   "&locationbias=circle%3A100%40" + 
  //   props.resultsdata[props.chosennum].geometry.location.lat + 
  //   "%2C" + 
  //   props.resultsdata[props.chosennum].geometry.location.lng + 
  //   "&key=" + process.env.REACT_APP_API_KEY;

  // useEffect(() => {
  //   axios.get(addInfoURL).then((response) => {
  //     console.log(response.data.candidates[0]);
  //   });
  // }, [addInfoURL]);

  if (props.resultsdata.length !== 0) {
    return (
      <div className={props.showResults ? "results" : "disappear"}>
        {/* Ternary to pick className, disappear has a styling to display:none*/}
        <p className="letseat">LETS EAT!</p>
        <div className="placephotodiv">
          <img className="placephoto" src={photolink} alt="this is a place" />
        </div>
        <p className="nameinfo">{props.resultsdata[props.chosennum].name}</p>
        <p className="addressinfo">
          {props.resultsdata[props.chosennum].vicinity}
        </p>
        <p className="distanceinfo">
          {Math.round(
            getDistanceFromLatLngInMiles(
              props.resultsdata[props.chosennum].geometry.location.lat,
              props.resultsdata[props.chosennum].geometry.location.lng,
              props.origin[0],
              props.origin[1]
            ) * 10
          ) / 10}{" "}
          Miles
        </p>
        <div className="resultbuttons">
          <a
            href={placelink}
            className="golink"
            target="_blank"
            rel="noreferrer"
          >
            GO
          </a>
          <button className="chooseagain" onClick={clickedChooseAgain}>
            CHOOSE AGAIN
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.showResults ? "noresults" : "disappear"}>
        <p className="noresultstext">NO RESULTS</p>
        <p>Tweak your filters!</p>
      </div>
    );
  }
};

export default Results;
