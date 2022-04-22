import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import LatLngConverter from "./Processes/LatLngConverter";

import "./Map.css";
const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = (props) => {
  //Initialize Filters--------------------------------------------------------------------------------------
  const address = props.inputdata[0].trim().replace(/ /g, "%20"); //convert to processable address version
  const tempprice = props.inputdata[1]; //price
  const tempdist = props.inputdata[2] * 1609.34; //converts input distance (miles) to meters
  const tempkeyword = props.inputdata[3]; //keyword(s)

  // console.log("address is: " + props.address);
  // console.log("distance is: " + tempdist);
  // console.log("price is: " + tempprice[0] + " to " + tempprice[1]);
  // console.log("keyword is: " + tempkeyword);

  //Converts Address to Latitude and Longitude---------------------------------------------------------------
  const locURL =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
    address +
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

  console.log(lat);

  //Search Function-----------------------------------------------------------------------------------------

  const baseURL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat.toString() +
    "," +
    lng.toString() +
    "&radius=" +
    tempdist +
    "&type=food" +
    "&keyword=food," +
    tempkeyword +
    "&opennow=true" +
    "&minprice=" +
    tempprice[0] +
    "&maxprice=" +
    tempprice[1] +
    "&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

  // console.log("baseURL is: " + baseURL);

  const [searchdata, setSearchData] = useState("");
  const [page2token, setPage2] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSearchData(response.data.results);
      if (typeof response.data.next_page_token !== "undefined") {
        setPage2(response.data.next_page_token.toString());
      }
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
  var allData = searchdata;
  props.adataHandler(allData);

  //Load in the Map-----------------------------------------------------------------------------------------
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{lat: lat,lng: lng}}
      />
    </div>
  );
};

export default Map;
