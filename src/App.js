//import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import LiveFlights from "./components/live/LiveFlights";
import SavedFlightPlans from "./components/saved/SavedFlightPlans";
import FlightPlan from "./components/flightPlan/flightPlan";
import Error from "./pages/Error";
import { useState } from "react";

const savedInitial = [
  {
    id: "LK1234",
    departureAirport: "EDDH",
    departureRunaway: "RW33",
    arrivalAirport: "EDDB",
    arrivalRunaway: "RW07L",
    flightDate: "2022-10-28",
    flightTime: "01:00",
    aircraft: "SF50",
    numberOfPassengers: 4,
  },
];
function App() {
  const [flightPlanData, setFlightPlanData] = useState();
  const [saveFlightPlanData, setSaveFlightPlanData] = useState(savedInitial);

  function saveFlightData(
    flightNumber,
    departureAirport,
    departureRunaway,
    arrivalAirport,
    arrivalRunaway,
    flightDate,
    flightTime,
    aircraft,
    numberOfPassengers
  ) {
    setSaveFlightPlanData([
      ...saveFlightPlanData,
      {
        id: flightNumber,
        departureAirport: departureAirport,
        departureRunaway: departureRunaway,
        arrivalAirport: arrivalAirport,
        arrivalRunaway: arrivalRunaway,
        flightDate: flightDate,
        flightTime: flightTime,
        aircraft: aircraft,
        numberOfPassengers: numberOfPassengers,
      },
    ]);
  }

  function passFlightData(
    flightNumber,
    departureAirport,
    departureRunaway,
    arrivalAirport,
    arrivalRunaway,
    flightDate,
    flightTime,
    aircraft,
    numberOfPassengers
  ) {
    setFlightPlanData({
      id: flightNumber,
      departureAirport: departureAirport,
      departureRunaway: departureRunaway,
      arrivalAirport: arrivalAirport,
      arrivalRunaway: arrivalRunaway,
      flightDate: flightDate,
      flightTime: flightTime,
      aircraft: aircraft,
      numberOfPassengers: numberOfPassengers,
    });
  }

  return (
    <Container>
      <AppHeader>Flight Planner</AppHeader>
      <MainStyled>
        <Routes>
          <Route
            index
            path="/"
            element={<Main onHandleSubmit={passFlightData} />}
          />
          <Route path="live" element={<LiveFlights />} />
          <Route
            path="saved"
            element={<SavedFlightPlans saveFlightData={saveFlightData} />}
          />
          <Route
            path="flightplan"
            element={
              <FlightPlan
                flightPlanData={flightPlanData}
                onSavePlan={saveFlightData}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainStyled>
      <Navigation />
    </Container>
  );
}
export default App;

const Container = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  top: 0;
  padding: 0.5rem;
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  font-size: calc(20px + 2vmin);
  color: black;
  border-bottom: 1px solid black;
`;

const MainStyled = styled.main`
  margin-bottom: 120px;
`;
