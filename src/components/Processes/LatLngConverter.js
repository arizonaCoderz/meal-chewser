import React, { useState, useEffect } from "react";

import axios from "axios";

const LatLngConverter = (props) => {
  //Converts Address to Latitude and Longitude---------------------------------------------------------------
  const address = props.address.trim().replace(/ /g, "%20"); //convert to processable address version

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

  props.getLatLng([lat, lng]);

  // console.log("the latitude is " + lat);
  // console.log("the longitude is " + lng);

  return <div></div>;
};

export default LatLngConverter;
