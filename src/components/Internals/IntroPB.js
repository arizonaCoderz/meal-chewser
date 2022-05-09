import React, { useState } from 'react';

import './IntroPB.css';

const IntroPB = props => {
  //VERY SIMILAR TO PRICE BUTTON: maybe merge in future version
  //Intialize clicked state: which price button is clicked
  const [clicked, setClicked] = useState(0);

  //All button is clicked
  const allclicked = event => {
    setClicked(0);
    props.bstatus([0,4]);
  }

  //1 dollar sign is clicked
  const p1clicked = event => {
    setClicked(1);
    props.bstatus([1,1]);
  }

  //2 dollar sign is clicked
  const p2clicked = event => {
    setClicked(2);
    props.bstatus([2,2]);
  }

  //3 dollar sign is clicked
  const p3clicked = event => {
    setClicked(3);
    props.bstatus([3,3]);
  }

  //4 dollar sign is clicked
  const p4clicked = event => {
    setClicked(4);
    props.bstatus([4,4]);
  }

  //Can make this more efficient in future versions
  
  if (clicked === 0) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="ipressedallbutton" onClick={allclicked}>ALL</p>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    ) 
  } else if (clicked === 1) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="iallbutton" onClick={allclicked}>ALL</p>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  } else if (clicked === 2) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="iallbutton" onClick={allclicked}>ALL</p>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  } else if (clicked === 3) {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="iallbutton" onClick={allclicked}>ALL</p>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="ipbutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  }
  else {
    return (
      <div className="pricebuttons">
        <button className="pricebutton">
          <p className="iallbutton" onClick={allclicked}>ALL</p>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p1clicked}/>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p2clicked}/>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p3clicked}/>
          <img className="whitebutton" src="/assets/Logos/dollarsign.svg" alt="this is a dollarsign icon" onClick={p4clicked}/>
        </button>
      </div>
    );
  }
};

export default IntroPB;