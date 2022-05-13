import React from "react";

import "./Footer.css";

const Footer = (props) => {
  //Shows Results page when RESULTS is clicked
  const clickedResults = (event) => {
    props.clickedResults();
  };

  //Shows about page when ABOUT US is clicked
  const clickedAbout = (event) => {
    props.clickedAbout();
  };

  //Shows Home when HOME is clicked
  const clickedHome = (event) => {
    props.clickedHome();
  };

  return (
    <div className="footer">
      <div className="links">
        <button className="fbutton" onClick={clickedHome}>
          HOME
        </button>
        <p>|</p>
        <button className="fbutton" onClick={clickedResults}>
          RESULTS
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
