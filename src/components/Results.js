import React, { useState } from 'react';

import './Results.css';
import Result from './Result.js';

const Results = props => {

    if (props.resultsdata.length != 0) {
        return (
            <div className={props.showResults ? "results": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
                <p>{props.resultsdata[props.chosennum].name}</p>
                <p>{props.resultsdata[props.chosennum].vicinity}</p>
            </div>
        );
    } else {
        return (
            <div>No Results</div>
        );
    }
}

export default Results;