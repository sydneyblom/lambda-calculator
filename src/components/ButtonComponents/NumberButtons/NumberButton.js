import React from "react";


const NumberButton = props => {
  console.log('NumberButton', props)
  return (
    <div className="calcboxOne">
    <button onClick={() => props.addNumber(props.text)}>
     {props.text}
   </button>
    </div>
  );
};



export default NumberButton;
