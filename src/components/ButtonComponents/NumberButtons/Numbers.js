import React, {useState } from "react";
import { numbers } from "../../../data"
import NumberButton from "./NumberButton"


export default function Numbers() {
  const [numbersState, setNumbersState] = useState(numbers);

  return (
    <div>
    {numbersState.map((number, index) => (
      <NumberButton key={index} numbers={number} />
    ))}
    </div>
  );
}
