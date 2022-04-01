import React from "react";

import "./App.css";
import Header from "./components/Header";
import Leftside from "./components/Leftside";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="content">
        <Leftside></Leftside>
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
