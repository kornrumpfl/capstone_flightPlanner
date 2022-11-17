import styled from "styled-components";
import { useState, useEffect } from "react";
import MyMap from "../MyMap";
import Airports from "../initialData/Airports";
import AirportSelect from "../features/AirportsSelect";

export default function LiveFlights() {
  const [airportLocationCord, setAirportLocationCord] = useState();

  function onSelect(airport) {
    const airportLocation = Airports.find((item) => item.name === airport);
    const lat = airportLocation?.lat;
    const lon = airportLocation?.lon;
    setAirportLocationCord({ lat: lat, lon: lon });
  }
  useEffect(() => {
    console.log(airportLocationCord);
  }, [airportLocationCord]);
  return (
    <Block>
      <AirportSelect selectedAirport={onSelect} />
      {airportLocationCord ? (
        airportLocationCord.lat !== 0 ? (
          <MyMap airportLocationCord={airportLocationCord} />
        ) : null
      ) : null}
    </Block>
  );
}

const Block = styled.section`
  display: flex;
  flex-direction: column;

  select {
    width: 60vw;
    margin: 20px;
    align-self: center;
  }
`;
