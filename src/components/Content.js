import React, { useState, useEffect } from "react";
import axios from "axios";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";

const Content = (props) => {
  //Initialize Filters--------------------------------------------------------------------------------------
  const [inputData, setInputData] = useState([
    props.inputdata[0].trim().replace(/ /g, "%20"),
    props.inputdata[1],
    props.inputdata[2] * 1609.34,
    props.inputdata[3]
  ]);

  // const address = props.inputdata[0].trim().replace(/ /g, "%20"); //convert to processable address version
  // const tempprice = props.inputdata[1]; //price
  // const tempdist = props.inputdata[2] * 1609.34; //converts input distance (miles) to meters
  // const tempkeyword = props.inputdata[3]; //keyword(s)

  // console.log("address is: " + props.address);
  // console.log("distance is: " + tempdist);
  // console.log("price is: " + tempprice[0] + " to " + tempprice[1]);
  // console.log("keyword is: " + tempkeyword);


  //Converts Address to Latitude and Longitude---------------------------------------------------------------
  const locURL =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
    inputData[0] +
    "&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

  const [lat, setlat] = useState(39);
  const [lng, setlng] = useState(-97);

  useEffect(() => {
    axios.get(locURL).then((response) => {
      const temploc = response.data.candidates[0].geometry.location;
      setlat(temploc.lat);
      setlng(temploc.lng);
    });
  }, []);


  //Search Function-----------------------------------------------------------------------------------------
  const baseURL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat.toString() +
    "," +
    lng.toString() +
    "&radius=" +
    inputData[2] +
    "&type=food" +
    "&keyword=food," +
    inputData[3] +
    "&opennow=true" +
    "&minprice=" +
    inputData[1,0] +
    "&maxprice=" +
    // "&rankby=distance" + //if you use this, radius is disallowed
    inputData[1,1] +
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
  var resultsdata = searchdata;
  console.log(resultsdata);

  //Randomized Option
  const chosennum = Math.floor(Math.random() * resultsdata.length);


  //Connect Regular Filter to Results
  const inputdataHandler = chewsdata => {
    setInputData([
      chewsdata[0].trim().replace(/ /g, "%20"),
      chewsdata[1],
      chewsdata[2] * 1609.34,
      chewsdata[3]
    ]);
  };

  return (
    <div className={props.showHome ? "content" : "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
      <Leftside
        inputdataHandler={inputdataHandler}
        inputdata={props.inputdata}
        resultsdata={resultsdata}
        chosennum={chosennum}
        origin={[lat,lng]}
      ></Leftside>
      <Map resultsdata={resultsdata} chosennum={chosennum}></Map>
    </div>
  );
};

export default Content;
