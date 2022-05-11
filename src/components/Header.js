import React from "react";

import "./Header.css";

const Header = (props) => {
  //Shows home when back is clicked
  const clickedHome = (event) => {
    props.clickedHome();
  };

  //Shows plate when plate button is clicked
  const clickedPlate = (event) => {
    props.clickedPlate();
  };

  //Goes back to intro page when logo is clicked
  const clickedLogo = event => {
    props.clickedLogo();
  }

  return (
    <div className="header">
      <div id="headertitle">
        <button className="headerlogobutton" onClick={clickedLogo}>
          <img
            id="headerlogo"
            src="/assets/Logos/MealChewser_Logo6.png"
            alt="this is a egg shaped like a location pin with Meal Chewser"
          />
        </button>
      </div>
      {/* <button className="headerplatebutton" onClick={clickedPlate}>
        <img
          src="/assets/Logos/iforkandknife.png"
          alt="this is inverted fork and knife icon"
        />
      </button> */}
      <div id="headermenu">
        <button className='headerbutton' onClick={clickedHome}> HOME </button>
        <button className='headerbutton' onClick={clickedPlate}> PLATE </button>
      </div>
    </div>
  );
};

export default Header;
