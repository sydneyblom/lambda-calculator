import React, { useState } from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

function Operators() {
  const [operator, setOperators] = useState(operators);
  return (
    <div>
    {operator.map((operators, index) => (
      <OperatorButton key={index} operators={operators.char} />
    ))}
    </div>
  );
}
export default Operators;