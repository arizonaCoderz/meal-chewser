import React from 'react';

import './Tab.css';

const Tab = props => {
    const clicked = (event) => {
        props.onClick();
    }

    return (
        <div className="tab">
            <button className="buttontab" style={{backgroundColor: props.coloring}} onClick={clicked}>{props.title}</button>
        </div>
    );
}

export default Tab;