import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const page = 1;

  if (page == 0) {
    return (
      <div className="App">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Intro></Intro>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
