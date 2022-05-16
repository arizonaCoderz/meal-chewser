import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Instructions from "./components/Instructions";

function App() {
  //Initialization
  const [showResults, setShowResults] = useState(false); //Initial states of the Results, Plate, and About pages
  const [showPlate, setShowPlate] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [page, setPage] = useState(0); //2 Possible Pages, Home Page [0] and the Results Page [1]
  const [inputdata, setInputData] = useState(["", 0, 0, ""]); //Initialize input data
  const [showInstructions, setShowInstructions] = useState(false);
  const [showHome, setShowHome] = useState(true); //Show intro page or not
  // const [coordinates, setCoordinates] = useState([]);

  //Executes when the user clicks Chews My Meal button
  const clickedChews = (idata) => {
    if (idata[0] !== "") {
      setPage(1);
      setInputData([idata[0], idata[1], idata[2], idata[3]]);
    }
    setShowResults(true);
    setShowPlate(false);
    setShowAbout(false);
  };

  //Executes when the user clicks Build My Plate button
  const clickedBuild = (idata) => {
    if (idata[0] !== "") {
      setPage(1);
      setInputData([idata[0], idata[1], idata[2], idata[3]]);
    }
    setShowResults(false);
    setShowPlate(true);
    setShowAbout(false);
  };

  //Shows Results component (also known as content)
  const clickedResults = event => {
    setShowResults(true);
    setShowPlate(false);
    setShowAbout(false);
  }

  //Shows Plate component
  const clickedPlate = event => {
    setShowResults(false);
    setShowPlate(true);
    setShowAbout(false);
  }

  //Shows About Component
  const clickedAbout = event => {
    setShowResults(false);
    setShowPlate(false);
    setShowAbout(true);
    setShowHome(false);
  }

  //Shows Instructions
  const clickedInstructions = event => {
    setShowInstructions(true);
  }

  //Changes back to Home Page
  const clickedHome = event => {
    setShowHome(true);
    setShowAbout(false);
    setPage(0);
  }

  //Make instructions disappear when backdrop is clicked
  const onClickedBackdrop = event => {
    setShowInstructions(false);
  }

  //Get Coordinates from Home page
  // const getCoordinates = coordinates => {
  //   setCoordinates(coordinates);
  // }

  // console.log(coordinates);


  if (page === 0) {
    return (
      <div className="App">
        <Home clickedChews={clickedChews} clickedBuild={clickedBuild} showHome={showHome}></Home>
        <About showAbout={showAbout}></About>
        <Footer clickedAbout={clickedAbout} clickedHome={clickedHome} clickedInstructions={clickedInstructions} page={page}></Footer>
        <Instructions showInstructions={showInstructions} onClickedBackdrop={onClickedBackdrop}></Instructions>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header clickedResults={clickedResults} clickedPlate={clickedPlate} clickedHome={clickedHome}></Header>
        <Content showResults={showResults} showPlate={showPlate} inputdata={inputdata} clickedHome={clickedHome}></Content>
        <About showAbout={showAbout}></About>
        <Footer clickedResults={clickedResults} clickedAbout={clickedAbout} clickedHome={clickedHome} clickedPlate={clickedPlate} clickedInstructions={clickedInstructions} page={page}></Footer>
        <Instructions showInstructions={showInstructions} onClickedBackdrop={onClickedBackdrop}></Instructions>
      </div>
    );
  }
}

export default App;
