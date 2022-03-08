import React from 'react';

import './Header.css' ;

const Header = props => {

    return (
        <div className='header'>
            <img></img>
            <p className='name'>MEAL CHEWSER</p>
            <button className='button'>Home</button>
            <button className='button'>About</button>
        </div>
    );
}

export default Header;