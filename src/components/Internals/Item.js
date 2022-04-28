import React, { useState } from "react";

import "./Item.css";

const Item = (props) => {
  //"On state"
  const [selected, setSelected] = useState(props.status);

  //assigns correct amount of stars based on price value
  var stars = [];
  for (var i = 0; i < props.price; i++) {
    stars.push(
      <img
        id="dollar"
        src="/assets/Logos/dollar.png"
        alt="this is a star icon"
        key={i}
      />
    );
  }

  //Tells parent component to add item to list
  const clickedAddToList = (event) => {
    props.clickedaddlist(props.index);
    setSelected(!selected);
  };

  //if on then invert colors
  var itembutton = [];
  if (selected == false) {
    itembutton.push(<img src="/assets/Logos/addbutton.png" alt="this is an add button icon" key="1"/>);
  } else {
    itembutton.push(<img src="/assets/Logos/iaddbutton.png" className="invertedadd" alt="this is an add button icon" key="1"/>);
  }

  return (
    <div className="item">
      <button id="itembutton" onClick={clickedAddToList}>
        {itembutton}
      </button>
      <div className="iteminfo">
        <p className="itemname">{props.name}</p>
        <p className="itemrating">{props.rating}</p>
        <img id="star" src="/assets/Logos/star.png" alt="this is a star icon" />
      </div>
      <div className="iteminfo2">
        <div className="allstars">{stars}</div>
        {/* <p className="itemaddress">{props.address}</p> */}
      </div>
    </div>
  );
};

export default Item;
