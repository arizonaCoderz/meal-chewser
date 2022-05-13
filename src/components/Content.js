import React, { useState, useEffect } from "react";
import axios from "axios";

import Leftside from "./Leftside";
import Map from "./Map";
import "./Content.css";
import Plate from "./Plate";

const Content = (props) => {
  //Initialize all variables-----------------------------------------------------------------------------------------------
  const [showContent, setShowContent] = useState(false); //show Home page or not (boolean)
  const [inputData, setInputData] = useState([
    props.inputdata[0].trim().replace(/ /g, "%20"),
    props.inputdata[1],
    props.inputdata[2] * 1609,
    props.inputdata[3],
  ]); //initial filter data
  const [loc, setloc] = useState([0, 0]); //Latitude and Longitude of input location
  const [wantSearch, setWantSearch] = useState(false); //makes sure the search goes through when location is changed
  const [searchdata, setSearchData] = useState([]); //Results from the API search

  //Delays the initial render by 1000 ms-----------------------------------------------------------------------------------
  useEffect(() => {
    setTimeout(() => {
      setShowContent(!showContent);
    }, 0);
  }, []);

  //Converts Address to Latitude and Longitude-----------------------------------------------------------------------------
  const locURL =
    "http://dhlproxyserver.herokuapp.com/?extension=findplacefromtext/json&input=" +
    inputData[0] +
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
  }, [inputData]);

  //Search Function----------------------------------------------------------------------------------------------------------
  var baseURL;
  if (wantSearch) {
    baseURL =
      "http://dhlproxyserver.herokuapp.com/?extension=nearbysearch/json&location=" +
      loc[0].toString() +
      "," +
      loc[1].toString() +
      "&radius=" +
      inputData[2] +
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

  //Connect Regular Filter to Results
  const inputdataHandler = (chewsdata) => {
    setSearchData([]);
    setInputData([
      chewsdata[0].trim().replace(/ /g, "%20"),
      chewsdata[1],
      chewsdata[2] * 1609,
      chewsdata[3],
    ]);
  };

  //Randomizer to choose random restaurant index------------------------------------------------------------------------------------
  const [refreshcount, setRefreshCount] = useState(0); //counts how many times choose again was pressed
  var chosennum = 0;
  if (searchdata.length !== 0) {
    chosennum = Math.floor(Math.random() * searchdata.length);
  }

  //Clicked choose again, rerandomizes restaurant index
  const changeChosen = (event) => {
    setRefreshCount(refreshcount + 1); //reloading the component is enough to pick a new chosennum
  };

  //Clicked Filter in plate, takes user back to Intro page
  const clickedPlateFilter = (event) => {
    props.clickedLogo();
  };

  return (
    <div>
      {showContent && (
        <div>
          <div className={props.showHome ? "home" : "disappear"}>
            <Leftside
              inputdataHandler={inputdataHandler}
              changeChosen={changeChosen}
              chosennum={chosennum}
              inputdata={props.inputdata}
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
          ></Plate>
        </div>
      )}
    </div>
  );
};

export default Content;
