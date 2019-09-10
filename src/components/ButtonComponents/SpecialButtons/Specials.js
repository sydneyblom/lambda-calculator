import React, { useState } from "react";
import { specials } from "../../../data"
import SpecialButton from "./SpecialButton"

//import any components needed

//Import your array data to from the provided data file


export default function Specials() {
  const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div>
    <div className="button_container">
    {specialsState.map((specials, index) => (
      <SpecialButton key={index} specials={specials} />
    ))}
    </div>
    </div>
  );
}

