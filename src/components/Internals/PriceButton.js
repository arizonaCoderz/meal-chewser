import React, { useState } from "react";

import "./PriceButton.css";

const PriceButton = (props) => {

  const [clicked, setClicked] = useState(props.value[0]);

  const allclicked = event => {
    setClicked(0);
    props.bstatus([0,4]);
  }

  const p1clicked = event => {
    setClicked(1);
    props.bstatus([1,1]);
  }

  const p2clicked = event => {
    setClicked(2);
    props.bstatus([2,2]);
  }

  const p3clicked = event => {
    setClicked(3);
    props.bstatus([3,3]);
  }

  const p4clicked = event => {
    setClicked(4);
    props.bstatus([4,4]);
  }

  // const p5clicked = event => {
  //   setClicked(5);
  //   props.bstatus([4,4]);
  // }
  
  if (clicked == 0) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="pressedallbutton" onClick={allclicked}>ALL</p>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    ) 
  } else if (clicked == 1) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="allbutton" onClick={allclicked}>ALL</p>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  } else if (clicked == 2) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="allbutton" onClick={allclicked}>ALL</p>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  } else if (clicked == 3) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="allbutton" onClick={allclicked}>ALL</p>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="pbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  }
  else {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="allbutton" onClick={allclicked}>ALL</p>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="bluebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  }
};

export default PriceButton;
