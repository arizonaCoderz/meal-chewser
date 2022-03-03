import React from 'react';

import './Header.css' ;

const Header = props => {

    return (
        <div className='header'>
            <img></img>
            <p>Meal Chewser</p>
            <button>Home</button>
            <button>About</button>
        </div>
    );
}

export default Header;