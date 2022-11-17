import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Runways from "../components/features/Runways";
import Aircraft from "../components/features/Aircraft";

export default function Main({ onHandleSubmit }) {
  const navigate = useNavigate();
  const [departureRunway, setDepartureRunway] = useState();
  const [arrivalRunway, setArrivalRunway] = useState();
  const [aircraft, setAircraft] = useState();
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureLocation, setDepartureLocation] = useState();
  const [arrivalLocation, setArrivalLocation] = useState();
  const [id, setId] = useState();

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { flightDate } = form.elements;
    const { flightTime } = form.elements;
    const { numberOfPassengers } = form.elements;
    if (departureRunway === undefined && "--") {
      alert("please select departure runway");
      return null;
    }
    if (arrivalRunway === undefined && "--") {
      alert("please select arrival runway");
      return null;
    }
    if (aircraft === undefined && "--") {
      alert("please select aircraft");
      return null;
    }
    onHandleSubmit(
      id,
      departureAirport,
      departureRunway,
      arrivalAirport,
      arrivalRunway,
      flightDate.value,
      flightTime.value,
      aircraft,
      numberOfPassengers.value,
      departureLocation,
      arrivalLocation
    );
    navigate("/flightplan");
  }

  function handleDepartureAirportChange(event) {
    if (event.target.value.match("^[A-Z0-9]*$")) {
      setDepartureAirport(event.target.value);
    }
  }
  function handleArrivalAirportChange(event) {
    if (event.target.value.match("^[A-Z0-9]*$")) {
      setArrivalAirport(event.target.value);
    }
  }
  function handleFlightNumberChange(event) {
    if (event.target.value.match("^[A-Z0-9]*$")) {
      setId(event.target.value);
    }
  }

  function selectDepartureRunway(runway, lat, lon) {
    setDepartureRunway(runway);
    setDepartureLocation({ lat, lon });
  }
  function selectArrivalRunway(runway, lat, lon) {
    setArrivalRunway(runway);
    setArrivalLocation({ lat, lon });
  }

  return (
    <InputFlightData onSubmit={onSubmit}>
      <SectionFlightInfo>
        <h2>Flight number</h2>
        <input
          type="text"
          id="id"
          placeholder="Only A-Z and 0-9 ex. LK1234"
          aria-label="flight Number"
          maxLength={6}
          required={true}
          value={id}
          onChange={handleFlightNumberChange}
        ></input>
      </SectionFlightInfo>
      <AirportSelection>
        <Departure>
          <h2>Departure</h2>
          <input
            type="text"
            id="departureAirport"
            placeholder="Only A-Z and 0-9 ex. EDDH"
            aria-label="departure airport"
            maxLength={4}
            required={true}
            value={departureAirport}
            onChange={handleDepartureAirportChange}
          ></input>
          <p>Runway</p>
          {departureAirport.length > 3 ? (
            <Runways
              icao={departureAirport}
              selectedRunwayPlusLocation={selectDepartureRunway}
              required
            />
          ) : null}
        </Departure>
        <Arrival>
          <h2>Arrival</h2>
          <input
            type="text"
            id="arrivalAirport"
            placeholder="Only A-Z and 0-9 ex. EDDB"
            aria-label="arrival airport"
            maxLength={4}
            required={true}
            onChange={handleArrivalAirportChange}
          ></input>
          <p>Runway</p>
          {arrivalAirport.length > 3 ? (
            <Runways
              icao={arrivalAirport}
              selectedRunwayPlusLocation={selectArrivalRunway}
              required
            />
          ) : null}
        </Arrival>
      </AirportSelection>
      <Time>
        <h2>Flight Departure Date/Time</h2>
        <div>
          <input
            id="flightDate"
            type="date"
            aria-label="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
          <input id="flightTime" type="time" aria-label="time" required />
        </div>
      </Time>
      <AircraftStyle>
        <h2>Aircraft Model</h2>
        <Aircraft onSelectAircraft={(airplane) => setAircraft(airplane)} />
      </AircraftStyle>
      <NumberOfPassengers>
        <h2>N° of Passengers</h2>
        <input
          type="number"
          id="numberOfPassengers"
          placeholder="0"
          min="0"
          aria-label="number of passengers"
          required
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
    margin-top: 1vw;
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
    margin-top: 1vw;
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

const AircraftStyle = styled.fieldset`
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
