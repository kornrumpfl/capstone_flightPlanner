import styled from "styled-components";
import Main from "./pages/Main";
import Navigation from "./components/features/Navigation";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LiveFlights from "./pages/LiveFlights";
import SavedFlightPlans from "./pages/SavedFlightPlans";
import FlightPlan from "./pages/flightPlan";
import Error from "./pages/Error";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "./components/features/LocalStorage";
import initialData from "./components/initialData/initialData";

function App() {
  const navigate = useNavigate();
  const [flightPlanData, setFlightPlanData] = useState();
  const [savedFlightPlanData, setSavedFlightPlanData] = useState(
    loadFromLocal("savedFlightPlanData") ?? initialData
  );
  const location = useLocation();
  useEffect(() => {
    saveToLocal("savedFlightPlanData", savedFlightPlanData);
  }, [savedFlightPlanData]);

  //function for the save the flight plans
  function savedFlightData(
    id,
    departureAirport,
    departureRunway,
    arrivalAirport,
    arrivalRunway,
    flightDate,
    flightTime,
    aircraft,
    numberOfPassengers,
    departureLocation,
    arrivalLocation
  ) {
    if (savedFlightPlanData.find((item) => id === item.id)) {
      const myId = savedFlightPlanData.findIndex((item) => item.id === id);
      savedFlightPlanData[myId].flightDate = flightDate;
      savedFlightPlanData[myId].flightTime = flightTime;
      setSavedFlightPlanData([...savedFlightPlanData]);
    } else {
      setSavedFlightPlanData([
        ...savedFlightPlanData,
        {
          id,
          departureAirport,
          departureRunway,
          arrivalAirport,
          arrivalRunway,
          flightDate,
          flightTime,
          aircraft,
          numberOfPassengers,
          departureLocation,
          arrivalLocation,
        },
      ]);
    }
  }
  //function to pass inputs value into the flight plan page
  function passFlightData(
    id,
    departureAirport,
    departureRunway,
    arrivalAirport,
    arrivalRunway,
    flightDate,
    flightTime,
    aircraft,
    numberOfPassengers,
    departureLocation,
    arrivalLocation
  ) {
    setFlightPlanData({
      id,
      departureAirport,
      departureRunway,
      arrivalAirport,
      arrivalRunway,
      flightDate,
      flightTime,
      aircraft,
      numberOfPassengers,
      departureLocation,
      arrivalLocation,
    });
  }

  function deleteFlightPlan(flightPlanId) {
    setSavedFlightPlanData(
      savedFlightPlanData.filter(({ id }) => flightPlanId !== id)
    );
  }

  function loadFlightPlan(flightPlanId) {
    console.log(flightPlanId);
    setFlightPlanData(
      savedFlightPlanData.find(({ id }) => {
        return flightPlanId === id;
      })
    );
    navigate("/flightplan");
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
                loadFlightPlan={loadFlightPlan}
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
      {location.pathname !== "/flightplan" ? <Navigation /> : null}
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
