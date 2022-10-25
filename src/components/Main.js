import styled from "styled-components";

export default function Main() {
  return (
    <InputFlightData>
      <SectionFlightInfo>
        <h2>Flight number</h2>
        <input type="text" name="flightNumber"></input>
      </SectionFlightInfo>
      <AirportSelection>
        <Departure>
          <h2>Departure</h2>
          <input
            type="text"
            name="departureAirport"
            placeholder="Departure airport"
          ></input>
          <select>
            <option value="RW5">RW 5</option>
            <option value="RW15">RW 15</option>
            <option value="RW23">RW 23</option>
            <option value="RW33">RW 33</option>
          </select>
        </Departure>
        <Arrival>
          <h2>Arrival</h2>
          <input
            type="text"
            name="arrivalAirport"
            placeholder="Arrival airport"
          ></input>
          <select>
            <option value="RW8">RW 8</option>
            <option value="RW23">RW 26</option>
          </select>
        </Arrival>
      </AirportSelection>
      <Time>
        <input name="flightDate" type="date" />
        <input name="flightTime" type="time" />
      </Time>
    </InputFlightData>
  );
}

const SectionFlightInfo = styled.section`
  margin-top: 2vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  input {
    max-height: 5em;
  }
`;

const AirportSelection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const Departure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  input {
    max-width: 40vw;
  }
`;

const Arrival = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  input {
    max-width: 40vw;
  }
`;

const Time = styled.section`
  display: flex;
  justify-content: space-around;
`;

const InputFlightData = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
