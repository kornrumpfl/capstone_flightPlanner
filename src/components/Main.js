import styled from "styled-components";

export default function Main() {
  return (
    <InputFlightData>
      <SectionFlightInfo>
        <h2>Flight number</h2>
        <input
          type="text"
          name="flightNumber"
          placeholder="Flight Number"
        ></input>
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
        <h2>Flight Departure Date/Time</h2>
        <div>
          <input name="flightDate" type="date" />
          <input name="flightTime" type="time" />
        </div>
      </Time>
      <Aircraft>
        <h2>Aircraft Model</h2>
        <select>
          <option value="C172">CESSNA 172R</option>
          <option value="B738">B737-800</option>
          <option value="B74F">B747-400F</option>
          <option value="B77L">B777-200LR</option>
          <option value="SF50">VISION JET</option>
        </select>
      </Aircraft>
      <NumberOfPassengers>
        <h2>N° of Passengers</h2>
        <input type="number" name="numberOfPassengers" placeholder="0"></input>
      </NumberOfPassengers>
    </InputFlightData>
  );
}

const SectionFlightInfo = styled.section`
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
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
  justify-content: space-evenly;

  input {
    max-width: 40vw;
  }
  select {
    margin-top: 3vw;
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
  select {
    margin-top: 3vw;
  }
`;

const Time = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
  }
`;

const InputFlightData = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Aircraft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vw;
  select {
    max-width: 70%;
    min-width: 50%;
  }
`;
const NumberOfPassengers = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  input {
    max-width: 20%;
  }
`;
