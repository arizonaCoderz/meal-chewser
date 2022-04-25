import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./Map.css";
const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = (props) => {
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
        center={{ lat: 39, lng: -97 }}
      />
    </div>
  );
};

export default Map;
