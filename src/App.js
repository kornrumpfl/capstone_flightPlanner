//import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import LiveFlights from "./components/live/LiveFlights";
import SavedFlightPlans from "./components/saved/SavedFlightPlans";
import FlightPlan from "./components/flightPlan/flightPlan";
import Error from "./pages/Error";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "../src/components/LocalStorage";
import initialData from "./components/initialData/initialData";

function App() {
  const [flightPlanData, setFlightPlanData] = useState();
  const [savedFlightPlanData, setSavedFlightPlanData] = useState(
    loadFromLocal("savedFlightPlanData") ?? initialData
  );

  useEffect(() => {
    saveToLocal("savedFlightPlanData", savedFlightPlanData);
  }, [savedFlightPlanData]);
  //function for the save the flight plans
  function savedFlightData(
    id,
    departureAirport,
    departureRunaway,
    arrivalAirport,
    arrivalRunaway,
    flightDate,
    flightTime,
    aircraft,
    numberOfPassengers
  ) {
    setSavedFlightPlanData([
      ...savedFlightPlanData,
      {
        id: id,
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
  //function to pass inputs value into the flight plan page
  function passFlightData(
    id,
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
      id: id,
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

  function deleteFlightPlan(flightPlanId) {
    setSavedFlightPlanData(
      savedFlightPlanData.filter(({ id }) => flightPlanId !== id)
    );
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
            element={
              <SavedFlightPlans
                savedFlightPlanData={savedFlightPlanData}
                onDelete={deleteFlightPlan}
              />
            }
          />
          <Route
            path="flightplan"
            element={
              <FlightPlan
                flightPlanData={flightPlanData}
                onSavePlan={savedFlightData}
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
