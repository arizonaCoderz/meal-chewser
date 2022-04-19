import React, { useState } from 'react';

import './Intro.css';
import IntroFilter from './Internals/IntroFilter';

const Intro = props => {
    const [address, setAddress] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    const onAddressChange = event => {
        setAddress(event.target.value);
    }

    const filterhandler = event => {
        if (showFilter == true) {
            setShowFilter(false);
        }
        else {
            setShowFilter(true);
        }
    }

    const chewshandler = event => {
        props.clickedChews();
    }

    const buildhandler = event => {
        
    }

    return (
        <div className="intro">
            <div className="verticalcenter">
                <img id="intrologo" src="/assets/Logos/MealChewser_Logo7.png" alt="this is a Meal Chewser Logo" /> 
                <div id="inputdiv">
                    <input id="introinput" onChange={onAddressChange} placeholder="STREET, CITY, or ZIP"></input>
                </div>
                <div id="filterdiv">
                    <button id="filterdropdown" onClick={filterhandler}>
                        <p>FILTERS</p>
                        <img id="caret" src="/assets/Logos/Caretdown.png" alt="this is a caret down icon" /> 
                    </button>
                </div>
                <IntroFilter showFilter={showFilter}></IntroFilter>
                <div className="otherbuttons">
                    <button className="nextbutton" onClick={chewshandler}>
                        <img src="/assets/Logos/mcbutton.png" alt="this is a Meal Chewser button" /> 
                    </button>
                    <button className="nextbutton" onClick={buildhandler}>
                        <img src="/assets/Logos/mcbutton.png" alt="this is a Build a Meal button" /> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Intro;