//import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DepartureLogo from "../logos/departurelogo";
import ArrivalLogo from "../logos/arrivallogo";
import DateandTimeLogo from "../logos/dateandtimelogo";
import PassengersLogo from "../logos/passengerslogo";
import HomeLogo from "../logos/homelogo";
import SavedLogo from "../logos/savedlogo";

export default function FlightPlan({ flightPlanData, onSavePlan }) {
  const position = [53.633354, 9.999303];
  const navigate = useNavigate();
  console.log(flightPlanData);
  function onHandleSavePlan(event) {
    event.preventDefault();
    onSavePlan(
      flightPlanData.id,
      flightPlanData.departureAirport,
      flightPlanData.departureRunway,
      flightPlanData.arrivalAirport,
      flightPlanData.arrivalRunway,
      flightPlanData.flightDate,
      flightPlanData.flightTime,
      flightPlanData.aircraft,
      flightPlanData.numberOfPassengers
    );
    navigate("/saved");
  }

  return (
    <div>
      <FlightPlanPage>
        <FlightPlanInformation>
          <h2>Flight Plan Information</h2>
          <p>Flight Number: {flightPlanData.id}</p>

          <FligthPlanDetails>
            <DepartureLogo />
            <p>
              Departure Airport: {flightPlanData.departureAirport} from Runway{" "}
              {flightPlanData.departureRunway}
            </p>
          </FligthPlanDetails>
          <FligthPlanDetails>
            <ArrivalLogo />
            <p>
              Arrival Airport: {flightPlanData.arrivalAirport} at Runway:{" "}
              {flightPlanData.arrivalRunway}
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
          style={{ height: 400, width: "85%" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </FlightPlanPage>
      <ButtonStyled>
        <button onClick={() => navigate("/")}>
          <HomeLogo />
        </button>
        <button onClick={onHandleSavePlan}>
          <SavedLogo />
        </button>
      </ButtonStyled>
    </div>
  );
}
//navlink on this buttons above
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

const FlightPlanPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;

  button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }
  svg {
    height: 3em;
    width: 3em;
  }
`;
