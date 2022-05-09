import React from 'react';

import './Header.css';

const Header = props => {
    //Shows home when home button is clicked
    const clickedHome = event => {
        props.clickedHome();
    }

    //Shows plate when plate button is clicked
    const clickedPlate = event => {
        props.clickedPlate();
    }

    //Goes back to Intro page when logo is clicked
    const clickedLogo = event => {
        props.clickedLogo();
    }

    return (
        <div className='header'>
            <div id="headertitle">
                <button className="headerlogobutton" onClick={clickedLogo}>
                    <img id="headerlogo" src="/assets/Logos/MealChewser_Logo6.png" alt="this is a egg shaped like a location pin with Meal Chewser"/>  
                </button>      
            </div>
            <div id="headermenu">
                <button className='headerbutton' onClick={clickedHome}> HOME </button>
                <button className='headerbutton' onClick={clickedPlate}> PLATE </button>
            </div>
        </div>
    );
}

export default Header;