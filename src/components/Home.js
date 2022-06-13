import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

import "./Home.css";
import HomeFilter from "./Internals/HomeFilter";

const Home = (props) => {
  //Initialize address and show filter state
  const [address, setAddress] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [isEmptyInput, setEmptyInput] = useState(false);
  // const [coordinates, setCoordinates] = useState([]);

  //Controls whether additional filters are shown or not
  const filterhandler = (event) => {
    if (showFilter === false) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  };

  //Initialize Home filter variables
  var idata = [address, [0, 0], 0, ""];
  const chewsenhandler = (ichewsdata) => {
    idata[1] = ichewsdata[0];
    idata[2] = ichewsdata[1];
    idata[3] = ichewsdata[2];
  };

  //Executes when Chews My Meal button is clicked
  const chewshandler = (event) => {
    if (address === "") {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
      props.clickedChews(idata);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      // props.getCoordinates(coordinates);
    }
  };

  //Executes when Build My Plate button is clicked
  const buildhandler = (event) => {
    if (address === "") {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
      props.clickedBuild(idata);
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      // props.getCoordinates(coordinates);
    }
  };

  //Add event listener for enter key press
  const handleEnterPress = (e) => {
    if (e.code.toString() === "Enter") {
      chewshandler();
    }
  };

  //Handle google autocomplete -- BROKEN
  // const handleSelect = async (value) => {
  //   setAddress(value);
  //   if (value !== "") {
  //     const results = await geocodeByAddress(value);
  //     const latlng = await getLatLng(results[0]);
  //     setCoordinates(latlng);
  //   }
  // };

  //Handle input ternary
  var inputstyle;
  var placeholder;
  if (isEmptyInput) {
    inputstyle = "homeinputempty";
    placeholder = "Please enter an Address, City, or Zip";
  } else {
    inputstyle = "homeinput";
    placeholder = "Enter Address, City, or Zip";
  }

  //Handles when info button is clicked
  const clickedInstructions = (event) => {
    props.clickedInstructions();
  };

  return (
    <div className={props.showHome ? "home" : "disappear"}>
      <img
        id="homelogo"
        src="./assets/Logos/MealChewser_Logo7.png"
        alt="this is a big MealChewser Logo"
      />
      <div id="inputdiv">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={setAddress}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: placeholder,
                  id: inputstyle,
                  onKeyDown: handleEnterPress,
                })}
              />
              <div className="pac-container">
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#e4e4e4", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, { style })}
                      className="pac-item"
                    >
                      <div className="pac-suggestion">
                        {suggestion.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <button id="infobutton" onClick={clickedInstructions}>
          <img
            src="./assets/Logos/infobutton.png"
            alt="this is the infobutton"
          />
        </button>
      </div>
      <div id="homefilterdiv">
        <button id="filterdropdown" onClick={filterhandler}>
          <p>FILTERS</p>
          <img
            id="caret"
            src="./assets/Logos/Caretdown.png"
            alt="this is a caret down icon"
          />
        </button>
      </div>
      <HomeFilter showFilter={showFilter} chews={chewsenhandler}></HomeFilter>
      <div className="homebuttons">
        <button id="hchewsbutton" onClick={chewshandler}>
          <img
            className="hbuttons"
            src="./assets/Logos/chewsmymeal.png"
            alt="this is a Meal Chewser button"
          />
        </button>
        <button id="hbuildbutton" onClick={buildhandler}>
          <img
            className="hbuttons"
            src="./assets/Logos/buildmyplate.png"
            alt="this is a Build a Meal button"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
