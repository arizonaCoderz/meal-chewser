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
        if (showFilter === false) {
            setShowFilter(true);
        }
        else {
            setShowFilter(false);
        }
    }

    var idata = [address, [0,0], 0, ""]
    const chewsenhandler = ichewsdata => {
        idata[1] = ichewsdata[0];
        idata[2] = ichewsdata[1];
        idata[3] = ichewsdata[2];
    }

    const chewshandler = event => {
        props.clickedChews(idata);
    }

    const buildhandler = event => {
        props.clickedBuild(idata);
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
                <IntroFilter showFilter={showFilter} chews={chewsenhandler}></IntroFilter>
                <div className="otherbuttons">
                    <button className="nextbutton" onClick={chewshandler}>
                        <img className="ibuttons" src="/assets/Logos/chewsmymeal.png" alt="this is a Meal Chewser button" /> 
                    </button>
                    <p id="ortext">OR</p>
                    <button className="nextbutton" onClick={buildhandler}>
                        <img className="ibuttons" src="/assets/Logos/buildmyplate.png" alt="this is a Build a Meal button" /> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Intro;