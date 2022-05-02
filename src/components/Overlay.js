import React from "react";

import "./Overlay.css";

const Overlay = (props) => {
  const clickedBackdrop = (event) => {
    props.onClickedBackdrop();
  };

  var placelink = "https://www.google.com/maps/dir/?api=1&origin=";
  placelink = placelink + props.origin + "&destination=";
  placelink =
    placelink +
    props.overlaydata[2].trim().replace(/ /g, "+").toString() +
    "&destination_place_id=";
  placelink = placelink + props.overlaydata[4];
  console.log(placelink);

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
            <div className="overlayprice">{overlayprice}</div>
          </div>
          <div className="overlaylocation">
            <p id="overlayaddress">{props.overlaydata[2]}</p>
          </div>
          <div className="overlaybuttons">
            <a href={placelink} className="overlaylink" target="_blank">
              GO
            </a>
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
