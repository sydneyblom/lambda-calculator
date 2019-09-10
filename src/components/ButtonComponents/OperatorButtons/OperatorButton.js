import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <button>
        {props.operators}
    </button>
  );
};



export default OperatorButton;
