import React from 'react';

import './Result.css';

const Result = props => {
    return (
        <div id="outer">
            <div>
                <h3>Mcdonald's</h3>
            </div>
            <div id="tags">
                <div className="tag">
                    <p>Tags</p>
                </div>
                <div className="tag">
                    <p>Tags</p>
                </div>
                <div className="tag">
                    <p>Tags</p>
                </div>
                <div className="tag">
                    <p>Tags</p>
                </div>
            </div>
            <div id="location">
                <p id="addy">5617 West Carson Road, Phoenix, AZ 85339</p>
                <p id="distance">(10 mi)</p>
            </div>

        </div>
    );

}

export default Result;