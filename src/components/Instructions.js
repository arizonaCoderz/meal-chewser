import React from 'react';

import './Instructions.css';

const Instructions = props => {
    //Make instructions disappear when backdrop is clicked
    const clickedBackdrop = (event) => {
        props.onClickedBackdrop();
      };

    return (
        <div className={props.showInstructions? "instructions" : "disappear"}>
            <div className="backdrop" onClick={clickedBackdrop}></div>
            <div className="instructioncontent">
                <p>Hello!</p>
            </div>
        </div>
    );
};

export default Instructions;