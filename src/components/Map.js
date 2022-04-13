import React, { useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import axios from 'axios';

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

const baseURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc"

const Map = (props) => {
  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response.data)
  //   });
  // });


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
