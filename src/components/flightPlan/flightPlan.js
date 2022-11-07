import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DepartureLogo from "../logos/departurelogo";
import ArrivalLogo from "../logos/arrivallogo";
import DateandTimeLogo from "../logos/dateandtimelogo";
import PassengersLogo from "../logos/passengerslogo";
import HomeLogo from "../logos/homelogo";
import SavedLogo from "../logos/savedlogo";
import L from "leaflet";

export default function FlightPlan({ flightPlanData, onSavePlan }) {
  const position = [53.633354, 9.999303];
  const navigate = useNavigate();
  const departureLocation = flightPlanData.departureLocation;
  const arrivalLocation = flightPlanData.arrivalLocation;
  const polyline = [departureLocation, arrivalLocation];
  const blackOptions = { color: "black" };

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
      flightPlanData.numberOfPassengers,
      flightPlanData.departureLocation,
      flightPlanData.arrivalLocation
    );
    navigate("/saved");
  }

  function GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require("../logos/airplane-flying.png"),
      iconSize: [_iconSize],
      iconAnchor: [22, 17],
    });
  }
  //adjust view port with route distance
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  //center de map so that departure and arrival point can be seen in same view
  function GetNewCenter() {
    const newCenterLat = (departureLocation?.lat + arrivalLocation?.lat) / 2;
    const newCenterlon = (departureLocation?.lon + arrivalLocation?.lon) / 2;
    return [newCenterLat, newCenterlon];
  }
  //dinamic zoom in relation with the distance
  function getNewZoom() {
    const distance = getDistanceFromLatLonInKm(
      departureLocation?.lat,
      departureLocation?.lon,
      arrivalLocation?.lat,
      arrivalLocation?.lon
    );
    // using a aproximation based on natural logarithm
    const newzoom = 17 - 1.6 * 2.3 * Math.log10(distance);
    return newzoom;
  }
  // calculation of distance between to geo points
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
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
          style={{ height: 600, width: "100%" }}
          scrollWheelZoom={false}
        >
          {departureLocation && arrivalLocation ? (
            <ChangeView center={GetNewCenter()} zoom={getNewZoom()} />
          ) : null}
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_CUSTOM_MAP_KEY}`}
          />
          {departureLocation ? (
            <Marker position={departureLocation} icon={GetIcon(40)}></Marker>
          ) : null}
          {arrivalLocation ? (
            <Marker position={arrivalLocation} icon={GetIcon(40)}></Marker>
          ) : null}
          {departureLocation && arrivalLocation ? (
            <Polyline pathOptions={blackOptions} positions={polyline} />
          ) : null}
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
