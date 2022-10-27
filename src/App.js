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

function App() {
  const [flighPlanData, setFlightPlanData] = useState();

  function passFlighData(
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
    setFlightPlanData([
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

  return (
    <Container>
      <AppHeader>Flight Planner</AppHeader>
      <MainStyled>
        <Routes>
          <Route
            index
            path="/"
            element={<Main onHandleSubmit={passFlighData} />}
          />
          <Route path="live" element={<LiveFlights />} />
          <Route path="saved" element={<SavedFlightPlans />} />
          <Route
            path="flightplan"
            element={<FlightPlan flighPlanData={flighPlanData} />}
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
