import React from 'react';

import './Footer.css';

const Footer = props => {
    return (
        <div className="footer">
            <div className="links">
                <button className="fbutton">HOME</button>
                <p id="divider"> | </p>
                <button className="fbutton">ABOUT US</button>
            </div>
            <p className="copyright">Copyright 2022 Meal Chewser</p>
        </div>
    );
};

export default Footer;