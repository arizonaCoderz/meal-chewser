import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  //Initialization
  const [showHome, setShowHome] = useState(true); //Initial states of the Home, Plate, and About pages
  const [showPlate, setShowPlate] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [page, setPage] = useState(0); //2 Possible Pages, Intro Page [0] and the Results Page [1]
  const [inputdata, setInputData] = useState(["", 0, 0, ""]); //Initialize input data

  //Executes when the user clicks Chews My Meal button
  const clickedChews = (idata) => {
    if (idata[0] !== "") {
      setPage(1);
      setInputData([idata[0], idata[1], idata[2], idata[3]]);
    }
  };

  //Executes when the user clicks Build My Plate button
  const clickedBuild = (idata) => {
    if (idata[0] !== "") {
      setPage(1);
      setInputData([idata[0], idata[1], idata[2], idata[3]]);
    }
    setShowHome(false);
    setShowPlate(true);
    setShowAbout(false);
  };

  //Shows Home component (also known as content)
  const clickedHome = event => {
    setShowHome(true);
    setShowPlate(false);
    setShowAbout(false);
  }

  //Shows Plate component
  const clickedPlate = event => {
    setShowHome(false);
    setShowPlate(true);
    setShowAbout(false);
  }

  //Shows About Component
  const clickedAbout = event => {
    setShowHome(false);
    setShowPlate(false);
    setShowAbout(true);
  }

  //Changes back to Intro Page when logo is clicked
  const clickedLogo = event => {
    setPage(0);
  }

  if (page === 0) {
    return (
      <div className="App">
        <Intro clickedChews={clickedChews} clickedBuild={clickedBuild}></Intro>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header clickedHome={clickedHome} clickedPlate={clickedPlate}></Header>
        <Content showHome={showHome} showPlate={showPlate} inputdata={inputdata} clickedLogo={clickedLogo}></Content>
        <About showAbout={showAbout}></About>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout} clickedLogo={clickedLogo}></Footer>
      </div>
    );
  }
}

export default App;
