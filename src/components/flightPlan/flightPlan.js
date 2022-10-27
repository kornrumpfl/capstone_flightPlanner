//import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DepartureLogo from "../logos/departurelogo";
import ArrivalLogo from "../logos/arrivallogo";
import DateandTimeLogo from "../logos/dateandtimelogo";
import PassengersLogo from "../logos/passengerslogo";

export default function FlightPlan({ flightPlanData, onSavePlan }) {
  const position = [53.633354, 9.999303];
  const navigate = useNavigate();
  console.log(flightPlanData);

  function onHandleSavePlan(event) {
    event.preventDefault();
    onSavePlan(
      flightPlanData.id,
      flightPlanData.departureAirport,
      flightPlanData.departureRunaway,
      flightPlanData.arrivalAirport,
      flightPlanData.arrivalRunaway,
      flightPlanData.flightDate,
      flightPlanData.flightTime,
      flightPlanData.aircraft,
      flightPlanData.numberOfPassengers
    );
    navigate("/saved");
  }

  return (
    <div>
      <FlightPlanInformation>
        <h2>Flight Plan Information</h2>
        <p>Flight Number: {flightPlanData.id}</p>

        <FligthPlanDetails>
          <DepartureLogo />
          <p>
            Departure Airport: {flightPlanData.departureAirport} from Runaway{" "}
            {flightPlanData.departureRunaway}
          </p>
        </FligthPlanDetails>
        <FligthPlanDetails>
          <ArrivalLogo />
          <p>
            Arrival Airport: {flightPlanData.arrivalAirport} at Runaway:{" "}
            {flightPlanData.arrivalRunaway}
          </p>
        </FligthPlanDetails>

        <FligthPlanDetails>
          <DateandTimeLogo />
          <p>
            Flight Date: {flightPlanData.flightDate} Takeoff Booked Time:{" "}
            {flightPlanData.flightTime}
          </p>
        </FligthPlanDetails>

        <p>Aircraft model: {flightPlanData.aircraft}</p>

        <FligthPlanDetails>
          <PassengersLogo />
          <p>Number of Passenger: {flightPlanData.numberOfPassengers}</p>
        </FligthPlanDetails>
      </FlightPlanInformation>
      <MapContainer
        className="plan-map leaflet-container leaflet-touch leaflet-safari leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        center={position}
        zoom={10}
        style={{ height: 400, width: "100%" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <button onClick={onHandleSavePlan}>Save Flight Plan</button>
    </div>
  );
}

const FlightPlanInformation = styled.section`
  display: flex;
  flex-direction: column;
  svg {
    height: 3em;
    width: 3em;
  }
`;

const FligthPlanDetails = styled.div`
  align-items: center;
`;
