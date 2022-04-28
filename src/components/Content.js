import React, { useState, useEffect } from "react";
import axios from "axios";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";
import Delayed from "./Internals/Delayed";
import Plate from "./Plate";

const Content = (props) => {
  //Loading mode--------------------------------------------------------------------------------------------
  // const [isLoading, setLoading] = useState(true);

  //Initialize Filters--------------------------------------------------------------------------------------
  const [inputData, setInputData] = useState([
    props.inputdata[0].trim().replace(/ /g, "%20"),
    props.inputdata[1],
    props.inputdata[2] * 1609,
    props.inputdata[3],
  ]);

  //Converts Address to Latitude and Longitude---------------------------------------------------------------
  const locURL =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
    inputData[0] +
    "&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

  const [loc, setloc] = useState([0,0]);
  const [wantSearch, setWantSearch] = useState(false); //makes sure the search goes through when location is changed

  // const [inputChange, setInputChange] = useState(false); //makes sure the search goes through when input changes
  

  useEffect(() => {
    axios.get(locURL).then((response) => {
      setloc([response.data.candidates[0].geometry.location.lat, response.data.candidates[0].geometry.location.lng]);
      console.log("Places API Call LatLng");
      setWantSearch(true);
    });
  }, [inputData]);

  //Search Function-----------------------------------------------------------------------------------------
  var baseURL;
  if (wantSearch) {baseURL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    loc[0].toString() +
    "," +
    loc[1].toString() +
    "&radius=" +
    inputData[2] +
    "&type=food" +
    "&keyword=food," +
    inputData[3] +
    "&opennow=true" +
    "&minprice=" +
    inputData[1][0] +
    "&maxprice=" +
    inputData[1][1] +
    // "&rankby=distance" + //if you use this, radius is disallowed
    "&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";
  }

  const [searchdata, setSearchData] = useState([]);
  //const [page2token, setPage2] = useState("");

  useEffect(() => {
    if (wantSearch) {
      axios.get(baseURL).then((response) => {
        setSearchData(response.data.results);
        // if (typeof response.data.next_page_token !== "undefined") {
        //   setPage2(response.data.next_page_token.toString());
        // }
        // setLoading(false);
        console.log("Places API Call Search");
        console.log(loc);
        setWantSearch(false);
        props.resultsDataHandler(searchdata);
      });
    }
  }, [baseURL]);

  //Page 2 Results

  // const [searchdata2, setSearchData2] = useState([]);
  // const [page3token, setPage3] = useState("");

  // const baseURL2 =
  //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
  //   lat +
  //   "," +
  //   lng +
  //   "&pagetoken=" +
  //   page2token +
  //   "&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

  // useEffect(() => {
  //   axios.get(baseURL2).then((response) => {
  //     setSearchData2(response.data.results);
  //     if (typeof response.data.next_page_token !== 'undefined') {
  //       setPage3(response.data.next_page_token.toString());
  //     }
  //     console.log("search data2 is " + searchdata2);
  //   });
  // }, []);

  //Concat all data
  // var resultsdata = [];
  // if (searchdata.length != 0) {
  //   resultsdata = searchdata;
  // }
  // console.log(searchdata)

  //Connect Regular Filter to Results
  const inputdataHandler = (chewsdata) => {
    setInputData([
      chewsdata[0].trim().replace(/ /g, "%20"),
      chewsdata[1],
      chewsdata[2] * 1609,
      chewsdata[3],
    ]);
    // setLoading(true);
  };

  //Choose a Random number
  const [refreshcount, setRefreshCount] = useState(0); //counts how many times choose again was pressed
  var chosennum = 0;
  if (searchdata.length != 0) {
    chosennum = Math.floor(Math.random() * searchdata.length);
  }

  //Clicked choose again
  const changeChosen = (event) => {
    setRefreshCount(refreshcount + 1); //reloading the component is enough to pick a new chosennum
  };

  return (
    <Delayed waitBeforeShow={2000}>
      <div className={props.showHome ? "content" : "disappear"}>
        {/* Ternary to pick className, disappear has a styling to display:none*/}
        <Leftside
          inputdataHandler={inputdataHandler}
          changeChosen={changeChosen}
          chosennum={chosennum}
          inputdata={props.inputdata}
          resultsdata={searchdata}
          origin={[loc[0], loc[1]]}
        ></Leftside>
        <Map resultsdata={searchdata} chosennum={chosennum}></Map>
      </div>
      <Plate showPlate={props.showPlate} resultsdata={searchdata}></Plate>
    </Delayed>
  );
};

export default Content;
