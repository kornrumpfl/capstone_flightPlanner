import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Main({ onHandleSubmit }) {
  const navigate = useNavigate();
  const [departureRunaway, setDepartureRunaway] = useState();
  const [arrivalRunaway, setArrivalRunaway] = useState();
  const [aircraft, setAircraft] = useState();

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { id } = form.elements;
    const { departureAirport } = form.elements;
    const { arrivalAirport } = form.elements;
    const { flightDate } = form.elements;
    const { flightTime } = form.elements;
    const { numberOfPassengers } = form.elements;
    onHandleSubmit(
      id.value,
      departureAirport.value,
      departureRunaway,
      arrivalAirport.value,
      arrivalRunaway,
      flightDate.value,
      flightTime.value,
      aircraft,
      numberOfPassengers.value
    );
    navigate("/flightplan");
  }

  return (
    <InputFlightData onSubmit={onSubmit}>
      <SectionFlightInfo>
        <h2>Flight number</h2>
        <input
          type="text"
          id="id"
          placeholder="Flight Number"
          aria-label="flight Number"
        ></input>
      </SectionFlightInfo>
      <AirportSelection>
        <Departure>
          <h2>Departure</h2>
          <input
            type="text"
            id="departureAirport"
            placeholder="Departure airport ICAO"
            aria-label="departure airport"
          ></input>
          <select
            aria-label="select a runaway for departure"
            id="departureRunaway"
            onChange={(e) => setDepartureRunaway(e.target.value)}
          >
            <option value="--" aria-label="initial state"></option>
            <option value="RW05" aria-label="runaway five">
              RW 5
            </option>
            <option value="RW15" aria-label="runaway fifteen">
              RW 15
            </option>
            <option value="RW23" aria-label="runaway twenty three">
              RW 23
            </option>
            <option value="RW33" aria-label="runaway thirty three">
              RW 33
            </option>
          </select>
        </Departure>
        <Arrival>
          <h2>Arrival</h2>
          <input
            type="text"
            id="arrivalAirport"
            placeholder="Arrival airport ICAO"
            aria-label="arrival airport"
          ></input>
          <select
            aria-label="select a runaway for arrival"
            id="arrivalRunaway"
            onChange={(e) => setArrivalRunaway(e.target.value)}
          >
            <option value="--" aria-label="initial state"></option>
            <option value="RW07L" aria-label="runaway seven left">
              RW 7L
            </option>
            <option value="RW25R" aria-label="runaway twenty five right">
              RW 25R
            </option>
            <option value="RW07R" aria-label="runaway seven right">
              RW 7R
            </option>
            <option value="RW25L" aria-label="runaway twenty five left">
              RW 25L
            </option>
          </select>
        </Arrival>
      </AirportSelection>
      <Time>
        <h2>Flight Departure Date/Time</h2>
        <div>
          <input id="flightDate" type="date" aria-label="date" />
          <input id="flightTime" type="time" aria-label="time" />
        </div>
      </Time>
      <Aircraft>
        <h2>Aircraft Model</h2>
        <select
          aria-label="select a aircraft model"
          id="Aircraft"
          onChange={(e) => setAircraft(e.target.value)}
        >
          <option value="--" aria-label="initial state"></option>
          <option value="C172" aria-label="cessna 172R">
            CESSNA 172R
          </option>
          <option value="B738" aria-label="boing 737">
            B737-800
          </option>
          <option value="B74F" aria-label="boing 747">
            B747-400F
          </option>
          <option value="B77L" aria-label="boing 777">
            B777-200LR
          </option>
          <option value="SF50" aria-label="vision jet">
            VISION JET
          </option>
        </select>
      </Aircraft>
      <NumberOfPassengers>
        <h2>N° of Passengers</h2>
        <input
          type="number"
          id="numberOfPassengers"
          placeholder="0"
          min="0"
          aria-label="number of passengers"
        ></input>
      </NumberOfPassengers>
      <MainButtons>
        <Button aria-label="Create Flight Plan" type="submit">
          Create Flight Plan
        </Button>
        <Button type="reset" aria-label="reset data">
          Clear Data
        </Button>
      </MainButtons>
    </InputFlightData>
  );
}

const InputFlightData = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SectionFlightInfo = styled.fieldset`
  border: none;
  margin-top: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  input {
    max-height: 5em;
  }
`;

const AirportSelection = styled.fieldset`
  border: none;
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

const Time = styled.fieldset`
  border: none;
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

const Aircraft = styled.fieldset`
  border: none;
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
const NumberOfPassengers = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  input {
    max-width: 20%;
  }
`;

const MainButtons = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Button = styled.button`
  max-width: 40vw;
  transition-duration: 0.4s;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
