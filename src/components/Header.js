import React from "react";

import "./Header.css";

const Header = (props) => {
  //Shows home when logo is clicked
  const clickedHome = (event) => {
    props.clickedHome();
  };

  //Shows plate when plate button is clicked
  const clickedPlate = (event) => {
    props.clickedPlate();
  };

  return (
    <div className="header">
      <div id="headertitle">
        <button className="headerlogobutton" onClick={clickedHome}>
          <img
            id="headerlogo"
            src="/assets/Logos/MealChewser_Logo6.png"
            alt="this is a egg shaped like a location pin with Meal Chewser"
          />
        </button>
      </div>
      <button className="headerplatebutton" onClick={clickedPlate}>
        <img
          src="/assets/Logos/iforkandknife.png"
          alt="this is inverted fork and knife icon"
        />
      </button>
    </div>
  );
};

export default Header;
