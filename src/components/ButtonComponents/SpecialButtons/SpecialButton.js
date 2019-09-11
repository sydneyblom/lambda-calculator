import React from "react";

const SpecialButton = (props) => {
  console.log("special")
  return (
    <button>
    {props.text}
    </button>
  );
};

export default SpecialButton; 