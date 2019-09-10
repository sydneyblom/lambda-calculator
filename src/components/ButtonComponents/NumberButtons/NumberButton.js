import React from "react";


const NumberButton = props => {
  return (
    <div className="calcboxOne">
    <button className= "numberButtons">
        {props.numbers}
    </button>
    </div>
  );
};



export default NumberButton;
