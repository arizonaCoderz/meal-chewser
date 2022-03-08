import React from 'react';

import './Header.css';

const Header = props => {

    return (
        <div className='header'>
            <div id="title">
                <p className='name' > MEAL </p>
                <img id="logo" src="/assets/Logos/MealChewser_Logo1.png" alt="this is a egg shaped like a location pin" />
                <p className='name' id="chewser" > CHEWSER </p>
            </div>
            <div id="menu">
                <button className='button' > Home </button>
                <button className='button' > About </button>
            </div>
        </div>
    );
}

export default Header;