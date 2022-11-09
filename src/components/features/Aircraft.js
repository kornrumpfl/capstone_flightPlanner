import React from "react";
import aircraftData from "../initialData/aircraftData";

function Aircraft({ onSelectAircraft }) {
  return (
    <select onChange={(plane) => onSelectAircraft(plane.target.value)}>
      <option value="--" aria-label="initial state"></option>
      {aircraftData?.map((item) => {
        return <option>{item.name}</option>;
      })}
    </select>
  );
}

export default Aircraft;
