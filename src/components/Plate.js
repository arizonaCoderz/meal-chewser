import React from 'react';

import './Plate.css';

const Plate = props => {
    return (
        <div className={props.showPlate ? "plate": "disappear"}> {/* Ternary to pick className, disappear has a styling to display:none*/}
            <p>Plate</p>
        </div>
    );
};

export default Plate;