import React from "react";

import "./Instructions.css";

const Instructions = (props) => {
  //Make instructions disappear when backdrop is clicked
  const clickedBackdrop = (event) => {
    props.onClickedBackdrop();
  };

  return (
    <div className={props.showInstructions ? "instructions" : "disappear"}>
      <div className="backdrop" onClick={clickedBackdrop}></div>
      <div className="instruction">
        <p className="instructionheader">WHAT IS MEAL CHEWSER?</p>
        <p className="instructioncontent">
          Meal Chewser is a random restaurant generator designed to make
          deciding where to eat run and stress free. All you have to do is
          simply type in your address, city, or zip code, and it will
          automatically choose a restaurant for you. Don’t like the restaurant
          that it chose? No problem! Just press choose again! You can also go to
          “Plate” and build a custom list of restaurants for the randomizer to
          choose from!
        </p>
        <p className="instructionheader">INSTRUCTIONS</p>
        <p className="instructioncontent">
          1. Type in address, city or zip code <br></br>
          2. Edit “FILTERS” to help narrow down the choses to best match your
          needs <br></br>
          3. Click “CHEWS MY MEAL” to choose a random restaurant, or click
          “BUILD MY PLATE” to select a few restaurants for the website to choose
          from
        </p>
        <img
          className="infoimg"
          src="/assets/Logos/infoimg1.png"
          alt="this is instruction img 1"
        />
        <p className="instructioncontent">
          4. Click “GO” to get directions to the restaurant! Or click “CHOOSE
          AGAIN” to choose another restaurant
        </p>
        <img
          className="infoimg"
          src="/assets/Logos/infoimg2.png"
          alt="this is instruction img 2"
        />
        <p className="instructioncontent">
          If you decide to “BUILD YOUR PLATE”: <br></br>
          1. Add the restaurants that interest you <br></br>
        </p>
        <img
          className="infoimg"
          src="/assets/Logos/infoimg3.png"
          alt="this is instruction img 3"
        />
        <p className="instructioncontent">
          2. Click “GO TO PLATE” <br></br>
          3. Click either “CHEWS MY MEAL” to choose your restaurant OR
          “ELIMINATE AN OPTION” to remove a random option from the list!
        </p>
        <p className="instructionheader">ENJOY YOUR MEAL!</p>
        <button className="xbutton" onClick={clickedBackdrop}>
          <img src="/assets/Logos/xbutton.png" alt="this is an x button" />
        </button>
      </div>
    </div>
  );
};

export default Instructions;
