import React from "react";
import "../../App"


const Display = (props) => {
  console.log("Display")
  return (
    <div className="display">
      {props.number}
    </div>
  );
};

export default Display;