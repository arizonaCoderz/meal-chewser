import React from 'react';

import './Footer.css';

const Footer = props => {
    const clickedHome = event => {
        props.clickedHome();
    }

    const clickedAbout = event => {
        props.clickedAbout();
    }

    return (
        <div className="footer">
            <div className="links">
                <button className="fbutton"  onClick={clickedHome}>HOME</button>
                <p id="divider"> | </p>
                <button className="fbutton"  onClick={clickedAbout}>ABOUT US</button>
            </div>
            <p className="copyright">Copyright 2022 Meal Chewser</p>
        </div>
    );
};

export default Footer;