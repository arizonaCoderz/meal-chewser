import React, { useEffect, useState } from "react";
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
  if (props.address != "") {
    const address = props.address.trim().replace(/ /g, "%20");
    // const address = "5617 Carson Rd ".trim().replace(/ /g, '%20');
    // console.log("Address is: " + address);

    const locURL =
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
      address +
      "&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

    const tempdist = props.distance * 1609.34; //converts input distance (miles) to meters
    const tempprice = props.price; //input price
    const tempkeyword = props.keyword; //keyword (for now can only be one)

    console.log("distance is: " + tempdist);
    console.log("price is: " + tempprice[0] + " to " + tempprice[1]);
    console.log("keyword is: " + tempkeyword);

    // This function runs twice for some reason
    axios.get(locURL).then((response) => {
      // converts address to lat/long
      const temploc = response.data.candidates[0].geometry.location;
      const templat = temploc.lat.toString();
      const templng = temploc.lng.toString();

      // console.log("lat is: " + templat);

      // Search query
      const baseURL =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        templat +
        "," +
        templng +
        "&radius=" +
        tempdist +
        "&type=food&" +
        "keyword=" +
        tempkeyword +
        "&openNow=true" +
        "&minPriceLevel=" +
        tempprice[0] +
        "&maxPriceLevel=" +
        tempprice[1] +
        "&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc";

      // console.log("baseURL is: " + baseURL);
      axios.get(baseURL).then((response) => {
        console.log(response.data);
      });
    });
  }
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
