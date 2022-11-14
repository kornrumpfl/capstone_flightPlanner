import useFetch from "../../hooks/useFetch";

export default function Runways({ icao, selectedRunwayPlusLocation }) {
  const URL = `https://api.flightplandatabase.com/nav/airport/${icao}`;
  const [dataFetched, setDataFetched] = useFetch(URL);

  function onSelect(event) {
    event.preventDefault();
    const runway = event.target.value;
    const airportLocationLat = dataFetched.lat;
    const airportLocationLon = dataFetched.lon;
    selectedRunwayPlusLocation(runway, airportLocationLat, airportLocationLon);
  }

  return (
    <select onChange={onSelect}>
      <option value="--" aria-label="initial state"></option>
      {dataFetched?.runways?.map((item) => {
        return <option value={item.ident}>{item.ident}</option>;
      })}
    </select>
  );
}
