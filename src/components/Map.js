import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "./Map.css";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const Map = (props) => {
  //Location Setting---------------------------------------------------------------------------------------
  var temploc = [39,-97]; //Initialize default location (middle of United States)

  //Sets map location to resultant restaurant location (sets zoom value to 15)
  if (props.resultsdata.length !== 0) {
    temploc = [props.resultsdata[props.chosennum].geometry.location.lat, props.resultsdata[props.chosennum].geometry.location.lng, 15]; //temploc is [lat,lng,zoom]
  }

  var location = { lat: temploc[0], lng: temploc[1] }; //used for Map center as well as marker placement
  
  //Load in the Map-----------------------------------------------------------------------------------------
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_API_KEY
  // });

  //Displays when there is an error or while it is loading
  // if (loadError) return "Error loading maps";
  // if (!isLoaded) return "Loading Maps";

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={temploc[2]}
        center={location}
      >
        <Marker position={location}></Marker>
      </GoogleMap>
    </div>
  );
};

export default Map;
