import React, { useState } from "react";

import "./Overlay.css";

const Overlay = (props) => {
  const clickedBackdrop = event => {
      props.onClickedBackdrop();
  }

  return (
    <div>
      <div className="backdrop" onClick={clickedBackdrop}></div>
      <div className="overlay">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Overlay;
