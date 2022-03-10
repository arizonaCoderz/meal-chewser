import React, { useState } from "react";

import "./PriceButton.css";

const PriceButton = (props) => {
  const [clicked, setClicked] = useState(0);
  const [bcolor, setBorderColor] = useState("transparent");

  const pbuttonClicked = event => {
    if (clicked == 0) {
        setClicked(1);
        setBorderColor("#5c7cbe");
    }
    else {
        setClicked(0);
        setBorderColor("transparent");
    }
  }
  
  return (
    <div className="priceButton">
      <button className="pbutton" style={{borderColor: bcolor}} onClick={pbuttonClicked}>{props.value}</button>
    </div>
  );
};

export default PriceButton;
