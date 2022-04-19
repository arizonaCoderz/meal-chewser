import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const [page, setPage] = useState(1);

  const clickedChews = event => {
    setPage(0);
  }

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
        <Intro clickedChews={clickedChews}></Intro>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
