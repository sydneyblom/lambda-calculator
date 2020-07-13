import React, {useState } from "react";
import { numbers } from "../../../data"
import NumberButton from "./NumberButton"


const Numbers = (props) => {
  const [buttonNumbers, setButtonNumber] = useState(numbers);
  console.log("numbers", props);

  return (
    <div>
       {buttonNumbers.map(number => {
                     return <NumberButton key={number} 
                                          text={number} 
                                          addNumber={props.addNumber}/>;
  })}
 </div>
  );

}

export default Numbers;