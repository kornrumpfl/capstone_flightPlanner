import Airports from "../initialData/Airports";

export default function AirportSelect({ selectedAirport }) {
  function onSelect(event) {
    event.preventDefault();
    const airport = event.target.value;
    selectedAirport(airport);
  }

  return (
    <select onChange={onSelect}>
      <option value="--" aria-label="initial state"></option>
      {Airports.map((item) => {
        return <option key={item.icao}> {item.name} </option>;
      })}
    </select>
  );
}
