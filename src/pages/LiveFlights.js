import styled from "styled-components";
import { useState, useEffect } from "react";
import MyMap from "../components/features/MyMap";
import Airports from "../components/initialData/Airports";
import AirportSelect from "../components/features/AirportsSelect";

export default function LiveFlights() {
  const [airportLocationCord, setAirportLocationCord] = useState();

  function onSelect(airport) {
    const airportLocation = Airports.find((item) => item.name === airport);
    const lat = airportLocation?.lat;
    const lon = airportLocation?.lon;
    setAirportLocationCord({ lat: lat, lon: lon });
  }
  return (
    <Block>
      <AirportSelect selectedAirport={onSelect} />
      <div>
        {airportLocationCord ? (
          airportLocationCord.lat !== 0 ? (
            <MyMap airportLocationCord={airportLocationCord} />
          ) : null
        ) : null}
      </div>
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
  div {
    z-index: 0;
  }
`;
