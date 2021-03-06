import React, { useState, useEffect } from "react";

import "./HomePB.css";

const HomePB = (props) => {
  //VERY SIMILAR TO PRICE BUTTON: maybe merge in future version
  //Intialize clicked state: which price buttons are toggled
  const [price1, setPrice1] = useState(false);
  const [price2, setPrice2] = useState(false);
  const [price3, setPrice3] = useState(false);
  const [reload, setReload] = useState(false);

  //Button Status Logic----------------------------------------------------------------------------------------------------------------------------
  //Execute when Price 1 is clicked
  const onPrice1Clicked = (event) => {
    if (!price1) { //Handles when price1 is off
      if ((!price2 && !price3) || (price2 && price3) || (price2 && !price3)) { //Everything is off or everything is on or only price 2 is on
        setPrice1(true); //Only price 1 is on
      } else { //only price 3 is on
        setPrice1(true);
        setPrice2(true);
      }
    } else { //Handles when price 1 is on
      setPrice1(false);
    }

    setReload(true);
  };

  //Execute when Price 2 is clicked
  const onPrice2Clicked = (event) => {
    if (!price2) { //Handles when price 2 is off
      setPrice2(true);
    } else { //Handles when price 2 is on
      if ((!price1 && !price3)||(price1 && !price3)||(!price1 && price3)) { //if 1 and 3 are on, then dont do anything
        setPrice2(false);
      }
    }

    setReload(true);
  };

  //Execute when Price 3 is clicked
  const onPrice3Clicked = (event) => {
    if (!price3) { //Handles when price3 is off
      if ((!price2 && !price1) || (price2 && price1) || (price2 && !price1)) { //Everything is off or everything is on or only price 2 is on
        setPrice3(true); //Only price 3 is on
      } else { //only price 1 is on
        setPrice3(true);
        setPrice2(true);
      }
    } else { //Handles when price3 is on
      setPrice3(false);
    }

    setReload(true);
  };

  //Send data to parent component---------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (!price1 && !price2 && !price3) { //All off
      props.bstatus([0,4]);
    } else if (price1 && !price2 && !price3) { //Only 1 is on
      props.bstatus([1,1]);
    } else if (!price1 && price2 && !price3) { //Only 2 is on
      props.bstatus([2,2]);
    } else if (!price1 && !price2 && price3) { //Only 3 is on
      props.bstatus([3,4]);
    } else if (price1 && price2 && !price3) { //1 and 2 are on
      props.bstatus([1,2]);
    } else if (!price1 && price2 && price3) { //2 and 3 are on
      props.bstatus([2,4]);
    } else { //All on
      props.bstatus([0,4]);
    }
    setReload(false);
  }, [reload]);

  return (
    <div className="homepricebuttons">
      <button id={!price1 ? "homepbutton1" : "homepbutton1on"} onClick={onPrice1Clicked}>
        <div className={!price1 ? "hpbuttondollarholder1" : "hpbuttondollarholder1on"}>
          <img
            className="hpbuttondollar"
            src="./assets/Logos/dollar.png"
           alt="this is a dollar icon"
          />
        </div>
      </button>
      <button id={!price2 ? "homepbutton2" : "homepbutton2on"} onClick={onPrice2Clicked}>
        <div className={!price2 ? "hpbuttondollarholder2" : "hpbuttondollarholder2on"}>
          <img
            className="hpbuttondollar"
            src="./assets/Logos/dollar.png"
           alt="this is a dollar icon"
          />
          <img
            className="hpbuttondollar"
            src="./assets/Logos/dollar.png"
            alt="this is a dollar icon"
          />
        </div>
      </button>
      <button id={!price3 ? "homepbutton3" : "homepbutton3on"} onClick={onPrice3Clicked}>
        <div className={!price3 ? "hpbuttondollarholder3" : "hpbuttondollarholder3on"}>
          <img
            className="hpbuttondollar"
            src="./assets/Logos/dollar.png"
           alt="this is a dollar icon"
          />
          <img
            className="hpbuttondollar"
            src="./assets/Logos/dollar.png"
            alt="this is a dollar icon"
          />
          <img
            className="hpbuttondollar"
            src="./assets/Logos/dollar.png"
            alt="this is a dollar icon"
          />
        </div>
      </button>
    </div>
  );
};

export default HomePB;
