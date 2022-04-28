import React from "react";

import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <button id="itembutton">
        <img
          src="/assets/Logos/addbutton.png"
          alt="this is an add button icon"
        />
      </button>
      <p className="itemname">{props.name}</p>
      <div className="iteminfo">
        <p className="itemrating">{props.rating}</p>
        <img
          id="star"
          src="/assets/Logos/star.png"
          alt="this is a star icon"
        />
        <img id="dollar" src="/assets/Logos/dollar.png" alt="this is a star icon"/>
      </div>
    </div>
  );
};

export default Item;
