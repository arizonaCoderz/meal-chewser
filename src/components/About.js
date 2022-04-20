import React from "react";

import "./About.css";

const About = (props) => {
  return (
    <div className={props.showAbout ? "about" : "disappear"}>
      {" "}
      {/* Ternary to pick className, disappear has a styling to display:none*/}
      <div className="aboutcontainer">
        <img
          id="abouticon"
          src="/assets/Logos/MealChewser_Logo1.png"
          alt="this is the meal chewser logo"
        />
        <p id="aboutustitle">ABOUT US</p>
        <p className="abouttext" style={{ height: "150px" }}>
          Hi! We are a group of three people, two developers and one designer,
          based in Phoenix, Arizona. We decided to create this fun little
          project after having a reccuring issue of not being able to choose
          where to eat. Meal Chewser is what we came up with! Whenever you feel
          indecisive or are looking for a some randomness in your life, come
          back here! We hope to see you again!
        </p>
        <div className="icons">
          <img
            className="abouticon"
            src="/assets/Logos/fast.png"
            alt="this is a fast icon"
          />
          <img
            className="abouticon"
            src="/assets/Logos/convenient.png"
            alt="this is a convenient icon"
          />
          <img
            className="abouticon"
            src="/assets/Logos/fun.png"
            alt="this is a fun icon"
          />
        </div>
        <p className="abouttext" style={{ height: "90px" }}>
          This website was built using React and was founded on March 7, 2022.
          For more information about us, contact as at our email! In addition,
          check out this GitHub link for the code for this website.
        </p>
        <div className="githublink">
          <a href="https://github.com/arizonaCoderz/meal-chewser">
            github.com/arizonaCoderz/meal-chewser
          </a>
        </div>
        <p className="contact">Contact us at mealchewser@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
