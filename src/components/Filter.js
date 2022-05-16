import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

import "./Filter.css";
import Slider from "./Internals/Slider";
import PriceButton from "./Internals/PriceButton";

const Filter = (props) => {
  //Initialize all filter variables
  const [sliderV, setSliderV] = useState(props.inputdata[2]); //Slider aka Distance
  const [address, setAddress] = useState(props.inputdata[0]); //Address
  const [price, setPrice] = useState(props.inputdata[1]); //Price Range
  const [keyword, setKeyword] = useState(props.inputdata[3]); //Keywords

  var chewsdata = [address, price, sliderV, keyword]; //Put all input variables in an array

  //Two way binding with Slider. When slider is moved, value is automatically updated
  const onSliderChangeP = (value) => {
    setSliderV(value);
  };

  //Price button selection handler
  const buttonHandler = (value) => {
    setPrice(value);
  };

  //Linked to keyword input box
  const onKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  //Executes when Chews My Meal button is pressed
  const onChewsen = (event) => {
    chewsdata[0] = address;
    chewsdata[1] = price;
    chewsdata[2] = sliderV;
    chewsdata[3] = keyword;
    if (address !== "") {
      props.chews(chewsdata);
    }
  };

  //Add event listener for enter key press
  const handleEnterPress = (e) => {
    if (e.code.toString() === "Enter") {
      onChewsen();
    }
  };

  //Changes styling and buttons for Results and Plate page filters
  if ((props.filtertype === "Results")) {
    return (
      <div className={props.showFilter ? "filter" : "disappear"}>
        <p>ADDRESS</p>
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
                  placeholder: "Enter Address, City, or Zip",
                  id: "input",
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
                      <div className="pac-suggestion">{suggestion.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div id="distance">
          <p style={{ marginRight: "10px" }}>MAX DISTANCE:</p>
          <p>{sliderV}</p>
          <p style={{ marginLeft: "5px" }}>MILES</p>
        </div>
        <Slider
          bcolor="#5C7CBE"
          onSliderChangeC={onSliderChangeP}
          value={sliderV}
        />

        <p>PRICE</p>
        <div id="prices">
          <PriceButton bstatus={buttonHandler} value={price}></PriceButton>
        </div>

        <div id="keyworddiv">
          <p>KEYWORD</p>
          <input
            id="keywordinput"
            onChange={onKeywordChange}
            placeholder="dinner, pizza, etc"
            value={keyword}
          ></input>
          <p id="note">*If you have multiple keywords, separate by commas</p>
        </div>

        <div id="chewsbuttondiv">
          <button id="chewsbutton" onClick={onChewsen}>
            <img
              id="mcbutton"
              src="/assets/Logos/mcbuttoninv.png"
              alt="this is the meal chewser button"
            />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.showFilter ? "filter" : "disappear"}>
        <p>ADDRESS</p>
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
                  placeholder: "Enter Address, City, or Zip",
                  id: "input",
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
                      <div className="pac-suggestion">{suggestion.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div id="distance">
          <p style={{ marginRight: "10px" }}>MAX DISTANCE:</p>
          <p>{sliderV}</p>
          <p style={{ marginLeft: "5px" }}>MILES</p>
        </div>
        <Slider
          bcolor="#5C7CBE"
          onSliderChangeC={onSliderChangeP}
          value={sliderV}
        />

        <p>PRICE</p>
        <div id="prices">
          <PriceButton bstatus={buttonHandler} value={price}></PriceButton>
        </div>

        <div id="keyworddiv">
          <p>KEYWORD</p>
          <input
            id="keywordinput"
            onChange={onKeywordChange}
            placeholder="dinner, pizza, etc"
            value={keyword}
          ></input>
          <p id="note">*If you have multiple keywords, separate by commas</p>
        </div>

        <div id="chewsbuttondiv">
          <button id="buildplatebutton" onClick={onChewsen}>
            <img
              id="mcbutton"
              src="/assets/Logos/buildmyplate.png"
              alt="this is the build plate button"
            />
          </button>
        </div>
      </div>
    );
  }
};

export default Filter;
