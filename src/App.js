import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./App.css";
import Header from "./components/Header";
import Leftside from "./components/Leftside";
import Map from "./components/Map";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 39.656456,
  lng: -99.534784,
};

function App() {
  const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: "AIzaSyA9oUuwu2IcJiytz70UxvzQIAtIWD_Pskc",
      libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  
  return (
    <div className="App">
      <Header></Header>
      <div id="content">
        <Leftside></Leftside>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
        />
      </div>
    </div>
  );
}

export default App;
