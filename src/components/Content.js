import React, { useState, useEffect } from "react";
import axios from "axios";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";
import Delayed from "./Internals/Delayed";

const Content = (props) => {
  //Loading mode--------------------------------------------------------------------------------------------
  const [isLoading, setLoading] = useState(true);

  //Initialize Filters--------------------------------------------------------------------------------------
  const [inputData, setInputData] = useState([
    props.inputdata[0].trim().replace(/ /g, "%20"),
    props.inputdata[1],
    props.inputdata[2] * 1609.34,
    props.inputdata[3],
  ]);
  //console.log(inputData);
  

  //Converts Address to Latitude and Longitude---------------------------------------------------------------
  const locURL =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
    inputData[0] +
    "&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

  const [loc, setloc] = useState([39, -97]);

  useEffect(() => {
    axios.get(locURL).then((response) => {
      const temploc = response.data.candidates[0].geometry.location;
      setloc([temploc.lat, temploc.lng]);
    });
  }, [inputData[0]]);

  //Search Function-----------------------------------------------------------------------------------------
  const baseURL =
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

  // console.log("baseURL is: " + baseURL);

  const [searchdata, setSearchData] = useState([]);
  //const [page2token, setPage2] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSearchData(response.data.results);
      // if (typeof response.data.next_page_token !== "undefined") {
      //   setPage2(response.data.next_page_token.toString());
      // }
      setLoading(false);
    });
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
  var resultsdata = [];
  if (searchdata.length != 0) {
    resultsdata = searchdata;
  }


  //Connect Regular Filter to Results
  const inputdataHandler = (chewsdata) => {
    setInputData([
      chewsdata[0].trim().replace(/ /g, "%20"),
      chewsdata[1],
      chewsdata[2] * 1609.34,
      chewsdata[3],
    ]);
    setLoading(true);
  };

  const [chosennum, setChosenNum] = useState(0);
  //Pass chosen number from leftside
  const chosennumHandler = value => {
    setChosenNum(value);
  }

  //Clicked choose again
  const changeChosen = newChosen => {
    setChosenNum(newChosen);
  }


  return (
    <Delayed waitBeforeShow={1500}>
      <div className={props.showHome ? "content" : "disappear"}>
        {/* Ternary to pick className, disappear has a styling to display:none*/}
        <Leftside
          inputdataHandler={inputdataHandler}
          chosennumHandler={chosennumHandler}
          changeChosen={changeChosen}
          inputdata={props.inputdata}
          resultsdata={resultsdata}
          origin={[loc[0], loc[1]]}
        ></Leftside>
        <Map resultsdata={resultsdata} chosennum={chosennum}></Map>
      </div>
    </Delayed>
  );
};

export default Content;
