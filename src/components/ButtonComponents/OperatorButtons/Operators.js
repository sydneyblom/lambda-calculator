import React, { useState } from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"



const Operators = (props) => {
  return (
    <div>
      {operators.map(operator => <OperatorButton operator={operator}
                                    addOperator={props.addOperator}/>)}
  </div>
    );
  };
  
  export default Operators; 