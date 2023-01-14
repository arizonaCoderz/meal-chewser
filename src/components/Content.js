import React, { useState, useEffect } from "react";
import axios from "axios";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";
import Plate from "./Plate";

const Content = (props) => {
  //Initialize all variables-----------------------------------------------------------------------------------------------
  const [showContent, setShowContent] = useState(false); //show Content or not (boolean)
  const [inputData, setInputData] = useState([
    props.inputdata[0],
    props.inputdata[1],
    props.inputdata[2],
    props.inputdata[3],
  ]); //initial filter data
  const [loc, setloc] = useState([0, 0]); //Latitude and Longitude of input location
  const [wantSearch, setWantSearch] = useState(false); //makes sure the search goes through when location is changed
  const [searchdata, setSearchData] = useState([]); //Results from the API search
  const [loading, setLoading] = useState(true); //tells if data is loaded or loading
  const [chosennum, setChosenNum] = useState(0);

  //Converts Address to Latitude and Longitude-----------------------------------------------------------------------------
  const locURL =
    "https://meal-chewser-proxy.onrender.com/?extension=findplacefromtext/json&input=" +
    inputData[0].trim().replace(/ /g, "%20") +
    "&inputtype=textquery&fields=formatted_address,geometry"; //Uses a proxy server which then calls the API

  
  useEffect(() => {
    axios.get(locURL).then((response) => {
      setloc([
        response.data.candidates[0].geometry.location.lat,
        response.data.candidates[0].geometry.location.lng,
      ]);
      console.log("Places API Call LatLng");
      setWantSearch(true);
    });
    setLoading(true);
    setShowContent(false);
  }, [inputData]);

  //Search Function----------------------------------------------------------------------------------------------------------
  var baseURL;
  if (wantSearch) {
    baseURL =
      "https://meal-chewser-proxy.onrender.com/?extension=nearbysearch/json&location=" +
      loc[0].toString() +
      "," +
      loc[1].toString() +
      "&radius=" +
      inputData[2] * 1609 +
      "&type=restaurant" +
      "&keyword=food,restaurant" +
      inputData[3] +
      "&opennow=true" +
      "&minprice=" +
      inputData[1][0] +
      "&maxprice=" +
      inputData[1][1]; //Uses a proxy server which then calls the API
  }

  useEffect(() => {
    if (wantSearch) {
      axios.get(baseURL).then((response) => {
        setSearchData(response.data.results);
        console.log("Places API Call Search");
        setWantSearch(false);
        setLoading(false);
        setShowContent(true);
      });
    }
  }, [baseURL]);

  //Page 2 Results------------------------------------------------------------------------------------------------------------------
  //Currently only capable of returning 20 results
  //For more results use the next page token (will be implemented in future versions)

  //const [page2token, setPage2] = useState("");
  // const [searchdata2, setSearchData2] = useState([]);
  // const [page3token, setPage3] = useState("");

  // useEffect(() => {
  //   if (wantSearch) {
  //     axios.get(baseURL).then((response) => {
  //       setSearchData(response.data.results);
  //       if (typeof response.data.next_page_token !== "undefined") {
  //         setPage2(response.data.next_page_token.toString());
  //       }
  //       console.log("Places API Call Search");
  //       setWantSearch(false);
  //     });
  //   }
  // }, [baseURL]);

  // const baseURL2 =
  //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
  //   lat +
  //   "," +
  //   lng +
  //   "&pagetoken=" +
  //   page2token +
  //   "&key=" + process.env.REACT_APP_API_KEY;

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

  //Connect Regular Filter to Chosen
  const inputdataHandler = (chewsdata) => {
    setSearchData([]);
    setInputData([chewsdata[0], chewsdata[1], chewsdata[2], chewsdata[3]]);
    setChosenNum(0);
    setShowContent(false);
    setLoading(true);
  };

  //Randomizer to choose random restaurant index------------------------------------------------------------------------------------
  useEffect(() => {
    setChosenNum(Math.floor(Math.random() * searchdata.length));
  }, [searchdata]);

  //Clicked choose again, rerandomizes restaurant index
  const changeChosen = (event) => {
    if (searchdata.length > 1) {
      var tempchosen = Math.floor(Math.random() * searchdata.length);
      while (tempchosen === chosennum) {
        tempchosen = Math.floor(Math.random() * searchdata.length);
      }
      setChosenNum(tempchosen);
    }
  };

  //Clicked Filter in plate, takes user back to Intro page
  const clickedPlateFilter = (event) => {
    props.clickedLogo();
  };


  if (showContent) {
    return (
      <div>
        {showContent && (
          <div>
            <div className={props.showResults ? "results" : "disappear"}>
              <Leftside
                inputdataHandler={inputdataHandler}
                changeChosen={changeChosen}
                chosennum={chosennum}
                inputdata={inputData}
                resultsdata={searchdata}
                origin={[loc[0], loc[1], inputData[0]]}
              ></Leftside>
              <Map resultsdata={searchdata} chosennum={chosennum}></Map>
            </div>
            <Plate
              showPlate={props.showPlate}
              resultsdata={searchdata}
              clickedPlateFilter={clickedPlateFilter}
              origin={inputData[0]}
              inputdata={inputData}
              inputdataHandler={inputdataHandler}
            ></Plate>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="results">
        <p className="loading">Loading...</p>
      </div>
    );
  }
};

export default Content;
