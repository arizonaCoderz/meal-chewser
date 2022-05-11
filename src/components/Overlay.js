import React from "react";

import "./Overlay.css";

const Overlay = (props) => {
  //Unrenders overlay when the backdrop is clicked
  const clickedBackdrop = (event) => {
    props.onClickedBackdrop();
  };

  //Rerandomizes restaurant choice in parent component
  const clickedChooseAgain = (event) => {
    props.clickedRandomSelect();
  };

  //Creates link to google directions from input location to chosen restaurant
  if (props.renderOverlay) {
    var placelink = "https://www.google.com/maps/dir/?api=1&origin=";
    placelink = placelink + props.origin + "&destination=";
    placelink =
      placelink +
      props.overlaydata[2].trim().replace(/ /g, "+").toString() +
      "&destination_place_id=";
    placelink = placelink + props.overlaydata[4];

    //Creates dollar pngs depending on what the price of the chosen restaurant is
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
  }

  if (props.renderOverlay) {
    return (
      <div className={props.showOverlay ? "plateoverlay" : "disappear"}>
        <div className="backdrop" onClick={clickedBackdrop}></div>
        <div className="overlay">
          <p className="overlayletseat">LETS EAT!</p>
          <p className="overlayname">{props.overlaydata[0]}</p>
          <div className="overlayrating">
            {props.overlaydata[3]}
            <img
              className="overlaystar"
              src="/assets/Logos/star.png"
              alt="this is a star icon"
            />
          </div>
          <div className="overlaylocation">
            <p className="overlayaddress">{props.overlaydata[2]}</p>
          </div>
          <div className="overlaybuttons">
            <a className="golink" href={placelink} target="_blank" rel="noreferrer">GO</a>
            <button className="chooseagain" onClick={clickedChooseAgain}>CHOOSE AGAIN</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Overlay;
