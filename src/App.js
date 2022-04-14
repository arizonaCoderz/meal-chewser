import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./App.css";
import Header from "./components/Header";
import Leftside from "./components/Leftside";
import Map from "./components/Map";




function App() {
  const [data, setData] = useState(["", [0,0], 0, "0"]);

  const pdataHandler = value => {
    setData(value);
  }

  return (
    <div className="App">
      <Header></Header>
      <div id="content">
        <Leftside cdataHandler={pdataHandler}></Leftside>
        <Map address={data[0]} price={data[1]} distance={data[2]} keyword={data[3]}></Map>
      </div>
    </div>
  );
}

export default App;
