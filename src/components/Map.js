import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./Map.css";
const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = (props) => {
  //Location Setting---------------------------------------------------------------------------------------
  var temploc = [39,-97,5];

  if (props.resultsdata.length != 0) {
    temploc = [props.resultsdata[props.chosennum].geometry.location.lat, props.resultsdata[props.chosennum].geometry.location.lng, 15];
  }
  
  //Load in the Map-----------------------------------------------------------------------------------------
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  //Add in a marker----------------------------------------------------------------------------------------



  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={temploc[2]}
        center={{ lat: temploc[0], lng: temploc[1] }}
      />
    </div>
  );
};

export default Map;
