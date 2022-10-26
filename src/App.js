//import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import LiveFlights from "./components/live/LiveFlights";
import SavedFlightPlans from "./components/saved/SavedFlightPlans";
import FlightPlan from "./components/flightPlan/flightPlan";
import Error from "./pages/Error";

function App() {
  return (
    <Container>
      <AppHeader>Flight Planner</AppHeader>
      <main>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="live" element={<LiveFlights />} />
          <Route path="saved" element={<SavedFlightPlans />} />
          <Route path="flightplan" element={<FlightPlan />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Navigation />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  top: 0;
  padding: 0.5rem;
  background-color: white;
  font-size: calc(20px + 2vmin);
  color: black;
  border-bottom: 1px solid black;
`;

export default App;
