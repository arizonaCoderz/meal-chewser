import React, { useState } from 'react';

import './IntroFilter.css';
import IntroPB from './IntroPB';

const IntroFilter = props => {

    return (
        <div className="introfilter">
            <p className="introtitles">PRICE</p>
            <IntroPB></IntroPB>
        </div>
    );
};

export default IntroFilter;