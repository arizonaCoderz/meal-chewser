import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(["", 0, 0, ""]);
  const clickedChews = (idata) => {
    if (idata[0] != "") {
      setPage(1);
      setData([idata[0], idata[1], idata[2], idata[3]]);
    }
  };

  const clickedHome = event => {
    setPage(1);
  }

  const clickedPlate = event => {
    setPage(2);
  }

  const clickedAbout = event => {
    setPage(3);
  }

  if (page == 0) {
    return (
      <div className="App">
        <Intro clickedChews={clickedChews}></Intro>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer>
      </div>
    );
  } else if (page == 1) {
    return (
      <div className="App">
        <Header clickedHome={clickedHome} clickedPlate={clickedPlate}></Header>
        <Content data={data}></Content>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer>
      </div>
    );
  } else if (page == 2) {
    return (
      <div className="App">
        <Header clickedHome={clickedHome} clickedPlate={clickedPlate}></Header>
        <p>Plate</p>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header clickedHome={clickedHome} clickedPlate={clickedPlate}></Header>
        <p>About</p>
        <Footer clickedHome={clickedHome} clickedAbout={clickedAbout}></Footer>
      </div>
    );
  }
}

export default App;
