import React from "react";

import "./Plate.css";
import Item from './Internals/Item';

const Plate = (props) => {
  console.log(props.resultsdata);
  const itemname = "Test Restaurant";
  const itemprice = 3;
  const itemrating = 4.2;
  return (
    <div className={props.showPlate ? "plate" : "disappear"}>{/* Ternary to pick className, disappear has a styling to display:none*/}
      <p className="platetitle">ADD TO PLATE</p>
      <button id="platebutton">
        <img
          src="/assets/Logos/forkandknife.png"
          alt="this is fork and knife icon"
        />
      </button>
      <div className="resultslist">
        <Item name={itemname} price={itemprice} rating={itemrating}></Item>
        <Item name={itemname} price={itemprice} rating={itemrating}></Item>
        <Item name={itemname} price={itemprice} rating={itemrating}></Item>
        <Item name={itemname} price={itemprice} rating={itemrating}></Item>
      </div>
    </div>
  );
};

export default Plate;
