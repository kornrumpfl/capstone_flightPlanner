import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/Main";
import Navigation from "./components/navigation/Navigation";
import SavedFlightPlans from "./components/saved/SavedFlightPlans";
import LiveFlights from "./components/live/LiveFlights";
import Error from "./pages/Error";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "../src/components/LocalStorage";
import initialData from "./src/components/initialData/initialData";

export default function UiRouter() {
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

  return (
    <Container>
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
              <SavedFlightPlans savedFlightPlanData={savedFlightPlanData} />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainStyled>
      <Navigation />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const MainStyled = styled.main`
  margin-bottom: 120px;
`;
