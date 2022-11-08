import React from "react";
import aircraftData from "../initialData/aircraftData";

function Aircraft({ selectedAircraft }) {
  function onSelect(event) {
    selectedAircraft(event.target.value);
  }

  return (
    <select onChange={onSelect}>
      <option value="--" aria-label="initial state"></option>
      {aircraftData?.map((item) => {
        return <option>{item.name}</option>;
      })}
    </select>
  );
}

export default Aircraft;
