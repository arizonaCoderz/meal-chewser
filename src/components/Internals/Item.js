import React, { useState } from "react";

import "./Item.css";

const Item = (props) => {
  //"On state": selected for the plate or not
  const [selected, setSelected] = useState(props.status);

  //assigns correct amount of stars based on price value
  var dollars = [];
  for (var i = 0; i < props.price; i++) {
    dollars.push(
      <img
        id="dollar"
        src="/assets/Logos/dollar.png"
        alt="this is a dollar icon"
        key={i}
      />
    );
  }

  //Tells parent component to add item to list
  const clickedAddToList = (event) => {
    props.clickedaddlist(props.index);
    setSelected(!selected);
  };

  //if selected then invert colors for + button
  var itembutton = [];
  if (selected === false) {
    itembutton.push(<img src="/assets/Logos/addbutton.png" alt="this is an add button icon" key="1"/>);
  } else {
    itembutton.push(<img src="/assets/Logos/iaddbutton.png" className="invertedadd" alt="this is an add button icon" key="1"/>);
  }

  return (
    <div className="item">
      <button className="itembutton" onClick={clickedAddToList}>
        {itembutton}
      </button>
      <div className="iteminfo">
        <p className="itemname">{props.name}</p>
        <p className="itemrating">{props.rating}</p>
        <img id="star" src="/assets/Logos/star.png" alt="this is a star icon" />
      </div>
      <div>{props.address}</div>
      <div className="alldollars">{dollars}</div>
      <div className="resultnumber">{props.number}</div>
    </div>
  );
};

export default Item;
