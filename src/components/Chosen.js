import React from "react";

import "./Chosen.css";

const Chosen = (props) => {
  var chosenmeal = { name: "test", vicinity: "" };
  //console.log("chosen meal is" + chosenmeal.name)

  if (typeof props.adata !== "undefined") {
    const chosennum = Math.floor(Math.random() * props.adata.length);
    //console.log(props.adata);
    //console.log(chosennum);

    chosenmeal = props.adata[chosennum];
    //console.log(chosenmeal);
  }
  return (
    <div className="chosen">
      <p>{chosenmeal.name}</p>
      <p>{chosenmeal.vicinity}</p>
    </div>
  );
};

export default Chosen;
