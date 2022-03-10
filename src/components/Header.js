import React from 'react';

import './Header.css';

const Header = props => {

    return (
        <div className='header'>
            <div id="title">
                <img id="logo" src="/assets/Logos/MealChewser_Logo6.png" alt="this is a egg shaped like a location pin with Meal Chewser" />        
            </div>
            <div id="menu">
                <button className='button' > Home </button>
                <button className='button' > About </button>
            </div>
        </div>
    );
}

export default Header;