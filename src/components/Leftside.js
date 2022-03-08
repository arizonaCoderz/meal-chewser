import React from 'react';

import './Leftside.css';
import Filter from './Filter.js';
import Results from './Results.js';

const Leftside = props => {

    


    return (
        <div className="leftside">

            <Results></Results>
            <Filter></Filter>
        
        </div>
    );
}

export default Leftside;