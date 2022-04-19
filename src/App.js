import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showPlate, setShowPlate] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const [page, setPage] = useState(0);
  const [data, setData] = useState(["", 0, 0, ""]);
  const clickedChews = (idata) => {
    if (idata[0] != "") {
      setPage(1);
      setData([idata[0], idata[1], idata[2], idata[3]]);
    }
  };

  const clickedHome = event => {
    setShowHome(true);
    setShowPlate(false);
    setShowAbout(false);
  }

  const clickedPlate = event => {
    setShowHome(false);
    setShowPlate(true);
    setShowAbout(false);
  }

  const clickedAbout = event => {
    setShowHome(false);
    setShowPlate(false);
    setShowAbout(true);
  }

  if (page == 0) {
    return (
      <div className="App">
        <Intro clickedChews={clickedChews}></Intro>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header clickedHome={clickedHome} clickedPlate={clickedPlate}></Header>
        <Content showHome={showHome} data={data}></Content>
        <p>Plate</p>
        <p>About</p>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer>
      </div>
    );
  }
}

export default App;
