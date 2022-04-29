import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showPlate, setShowPlate] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const [page, setPage] = useState(0);
  const [inputdata, setInputData] = useState(["", 0, 0, ""]);
  const clickedChews = (idata) => {
    if (idata[0] !== "") {
      setPage(1);
      setInputData([idata[0], idata[1], idata[2], idata[3]]);
    }
  };

  const clickedBuild = (idata) => {
    if (idata[0] !== "") {
      setPage(1);
      setInputData([idata[0], idata[1], idata[2], idata[3]]);
    }
    setShowHome(false);
    setShowPlate(true);
    setShowAbout(false);
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

  const clickedLogo = event => {
    setPage(0);
  }

  // var resultsdata = [];
  // const resultsDataHandler = value => {
  //   resultsdata = value;
  // }

  if (page === 0) {
    return (
      <div className="App">
        <Intro clickedChews={clickedChews} clickedBuild={clickedBuild}></Intro>
        {/* <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer> */}
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header clickedHome={clickedHome} clickedPlate={clickedPlate} clickedLogo={clickedLogo}></Header>
        <Content showHome={showHome} showPlate={showPlate} inputdata={inputdata}></Content>
        <About showAbout={showAbout}></About>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout} clickedLogo={clickedLogo}></Footer>
      </div>
    );
  }
}

export default App;
