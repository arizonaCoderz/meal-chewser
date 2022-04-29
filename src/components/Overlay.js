import React from "react";

import "./Overlay.css";

const Overlay = (props) => {
  const clickedBackdrop = (event) => {
    props.onClickedBackdrop();
  };

  const clickedDirections = (event) => {
    //execute when clicked on get directions
  };

  const clickedChooseAgain = (event) => {
    props.clickedRandomSelect();
  };


  //Overlay price
  var overlayprice = [];
  for (var i = 0; i < props.overlaydata[1]; i++) {
    overlayprice.push(
      <img
        id="dollar"
        src="/assets/Logos/dollar.png"
        alt="this is a star icon"
        key={i}
      />
    );
  }

  if (props.overlaydata !== []) {
    return (
      <div className={props.showOverlay ? "plateoverlay" : "disappear"}>
        <div className="backdrop" onClick={clickedBackdrop}></div>
        <div className="overlay">
          <p id="overlayname">{props.overlaydata[0]}</p>
          <div id="overlayinfo">
            <div className="overlayrating">
              {props.overlaydata[3]}
              <img
                className="overlaystar"
                src="/assets/Logos/star.png"
                alt="this is a star icon"
              />
            </div>
            <div className="overlayprice">
              {overlayprice}
            </div>
          </div>
          <div className="overlaylocation">
            <p id="overlayaddress">{props.overlaydata[2]}</p>
          </div>
          <div className="overlaybuttons">
            <button className="overlaybutton" onClick={clickedDirections}>
              GO
            </button>
            <button className="overlaybutton" onClick={clickedChooseAgain}>
              Choose Again
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Overlay;
