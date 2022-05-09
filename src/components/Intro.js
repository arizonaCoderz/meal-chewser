import React, { useState } from 'react';

import './Intro.css';
import IntroFilter from './Internals/IntroFilter';

const Intro = props => {
    //Initialize address and show filter state
    const [address, setAddress] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    //Executes when address is input (two way binding)
    const onAddressChange = event => {
        setAddress(event.target.value);
    }

    //Controls whether additional filters are shown or not
    const filterhandler = event => {
        if (showFilter === false) {
            setShowFilter(true);
        }
        else {
            setShowFilter(false);
        }
    }

    //Initialize intro filter variables
    var idata = [address, [0,0], 0, ""]
    const chewsenhandler = ichewsdata => {
        idata[1] = ichewsdata[0];
        idata[2] = ichewsdata[1];
        idata[3] = ichewsdata[2];
    }

    //Executes when Chews My Meal button is clicked
    const chewshandler = event => {
        props.clickedChews(idata);
    }

    //Executes when Build My Plate button is clicked
    const buildhandler = event => {
        props.clickedBuild(idata);
    }

    return (
        <div className="intro">
            <div className="verticalcenter">
                <img id="intrologo" src="/assets/Logos/MealChewser_Logo7.png" alt="this is a big MealChewser Logo" /> 
                <div id="inputdiv">
                    <input id="introinput" onChange={onAddressChange} placeholder="LOCATION"></input>
                </div>
                <div id="filterdiv">
                    <button id="filterdropdown" onClick={filterhandler}>
                        <p>FILTERS</p>
                        <img id="caret" src="/assets/Logos/Caretdown.png" alt="this is a caret down icon" /> 
                    </button>
                </div>
                <IntroFilter showFilter={showFilter} chews={chewsenhandler}></IntroFilter>
                <div className="introbuttons">
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