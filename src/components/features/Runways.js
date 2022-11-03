import useFetch from "../../hooks/useFetch";

export default function Runways({ icao, selectedRunway }) {
  const URL = `https://api.flightplandatabase.com/nav/airport/${icao}`;
  const [dataFetched, setDataFetched] = useFetch(URL);

  function onSelect(event) {
    selectedRunway(event.target.value);
  }

  return (
    <select onChange={onSelect}>
      <option value="--" aria-label="initial state"></option>
      {dataFetched.map((item) => {
        return <option>{item.ident}</option>;
      })}
    </select>
  );
}
