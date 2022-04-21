import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import axios from "axios";

import "./Map.css";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 39,
  lng: -97,
};

const Map = (props) => {

  //Initialize Filters--------------------------------------------------------------------------------------
  const address = props.address.trim().replace(/ /g, "%20"); //convert to processable address version
  const tempdist = props.distance * 1609.34; //converts input distance (miles) to meters
  const tempprice = props.price; //price
  const tempkeyword = props.keyword; //keyword(s)

  console.log("address is: " + props.address);
  console.log("distance is: " + tempdist);
  console.log("price is: " + tempprice[0] + " to " + tempprice[1]);
  console.log("keyword is: " + tempkeyword);

  //Converts Address to Latitude and Longitude---------------------------------------------------------------

  const locURL =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
    address +
    "&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

  const [lat, setlat] = useState("");
  const [lng, setlng] = useState("");

  useEffect(() => {
    axios.get(locURL).then((response) => {
      const temploc = response.data.candidates[0].geometry.location;
      setlat(temploc.lat.toString());
      setlng(temploc.lng.toString());
    });
  }, []);

  // console.log("the latitude is " + lat);
  // console.log("the longitude is " + lng);

  //Search Function-----------------------------------------------------------------------------------------

  const baseURL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    lng +
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
  const [searchdata, setSearchData] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSearchData(response.data);
    });
  }, []);

  console.log(searchdata.next_page_token);


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
        zoom={5}
        center={center}
      />
    </div>
  );
};

export default Map;
