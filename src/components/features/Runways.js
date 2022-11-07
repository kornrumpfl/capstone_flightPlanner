import useFetch from "../../hooks/useFetch";

export default function Runways({ icao, selectedRunwayPlusLocation }) {
  const URL = `https://api.flightplandatabase.com/nav/airport/${icao}`;
  const [dataFetched, setDataFetched] = useFetch(URL);

  function onSelect(event) {
    const airportLocationLat = dataFetched.lat;
    const airportLocationLon = dataFetched.lon;
    selectedRunwayPlusLocation(
      event.target.value,
      airportLocationLat,
      airportLocationLon
    );
  }

  return (
    <select onChange={onSelect}>
      <option value="--" aria-label="initial state"></option>
      {dataFetched?.runways?.map((item) => {
        return <option>{item.ident}</option>;
      })}
    </select>
  );
}
