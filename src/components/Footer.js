import React from "react";

import "./Footer.css";

const Footer = (props) => {

  //Shows about page when ABOUT US is clicked
  const clickedAbout = (event) => {
    props.clickedAbout();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  //Shows Home when HOME is clicked
  const clickedHome = (event) => {
    props.clickedHome();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  //Shows Instructions when INSTRUCTIONS is clicked
  const clickedInstructions = (event) => {
    props.clickedInstructions();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="footer">
      <div className="links">
        <button className="fbutton" onClick={clickedHome}>
          HOME
        </button>
        <p>|</p>
        <button className="fbutton" onClick={clickedInstructions}>
          INFO
        </button>
        <p>|</p>
        <button className="fbutton" onClick={clickedAbout}>
          ABOUT US
        </button>
      </div>
      <p className="copyright">Copyright 2022 Meal Chewser v1.1</p>
    </div>
  );
};

export default Footer;
