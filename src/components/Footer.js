import React from 'react';

import './Footer.css';

const Footer = props => {
    //Shows home page when HOME is clicked
    const clickedHome = event => {
        props.clickedHome();
    }

    //Shows about page when ABOUT US is clicked
    const clickedAbout = event => {
        props.clickedAbout();
    }

    return (
        <div className="footer">
            <div className="links">
                <button className="fbutton"  onClick={clickedHome}>HOME</button>
                <p>|</p>
                <button className="fbutton"  onClick={clickedAbout}>ABOUT US</button>
            </div>
            <p className="copyright">Copyright 2022 Meal Chewser v1.1</p>
        </div>
    );
};

export default Footer;