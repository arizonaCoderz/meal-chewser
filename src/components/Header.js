import React from 'react';

import './Header.css';

const Header = props => {
    const clickedHome = event => {
        props.clickedHome();
    }

    const clickedPlate = event => {
        props.clickedPlate();
    }

    return (
        <div className='header'>
            <div id="title">
                <img id="logo" src="/assets/Logos/MealChewser_Logo6.png" alt="this is a egg shaped like a location pin with Meal Chewser" />        
            </div>
            <div id="menu">
                <button className='button' onClick={clickedHome}> HOME </button>
                <button className='button' onClick={clickedPlate}> PLATE </button>
            </div>
        </div>
    );
}

export default Header;