import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
  Popup,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DepartureLogo from "../components/logos/departurelogo";
import ArrivalLogo from "../components/logos/arrivallogo";
import DateandTimeLogo from "../components/logos/dateandtimelogo";
import PassengersLogo from "../components/logos/passengerslogo";
import HomeLogo from "../components/logos/homelogo";
import SavedLogo from "../components/logos/savedlogo";
import L from "leaflet";
import { useState } from "react";
import AirplaneLogo from "../components/logos/airplanelogo";

export default function FlightPlan({ flightPlanData, onSavePlan }) {
  const position = [53.633354, 9.999303];
  const navigate = useNavigate();
  const departureLocation = flightPlanData.departureLocation;
  const arrivalLocation = flightPlanData.arrivalLocation;
  const polyline = [departureLocation, arrivalLocation];
  const [flightDate, setFlightDate] = useState();
  const [flightTime, setFlightTime] = useState();
  const blackOptions = { color: "black" };
  console.log(arrivalLocation);
  console.log(departureLocation);
  function onHandleSavePlan(event) {
    event.preventDefault();
    onSavePlan(
      flightPlanData.id,
      flightPlanData.departureAirport,
      flightPlanData.departureRunway,
      flightPlanData.arrivalAirport,
      flightPlanData.arrivalRunway,
      flightDate ?? flightPlanData.flightDate,
      flightTime ?? flightPlanData.flightTime,
      flightPlanData.aircraft,
      flightPlanData.numberOfPassengers,
      flightPlanData.departureLocation,
      flightPlanData.arrivalLocation
    );
    navigate("/saved");
  }

  function GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require("../components/logos/airplane-flying.png"),
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
          <span>Flight Number: {flightPlanData.id}</span>
          <FligthPlanDetailsDeparture>
            <DepartureLogo />
            <div>
              <p>Departure Airport: {flightPlanData.departureAirport}</p>
              <p>from Runway:{flightPlanData.departureRunway}</p>
            </div>
          </FligthPlanDetailsDeparture>
          <FligthPlanDetailsArrival>
            <ArrivalLogo />
            <div>
              <p>Arrival Airport: {flightPlanData.arrivalAirport}</p>
              <p>at Runway: {flightPlanData.arrivalRunway}</p>
            </div>
          </FligthPlanDetailsArrival>
          <FligthPlanDetailsTime>
            <DateandTimeLogo />
            <div>
              <input
                id="flightDateFP"
                type="date"
                defaultValue={flightPlanData.flightDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(event) => setFlightDate(event.target.value)}
              />
              <br />
              <input
                id="flightTimeFP"
                type="time"
                aria-label="time"
                defaultValue={flightPlanData.flightTime}
                onChange={(event) => setFlightTime(event.target.value)}
              />
            </div>
          </FligthPlanDetailsTime>
          <FligthPlanDetailsPass>
            <PassengersLogo />
            <p>Number of Passenger: {flightPlanData.numberOfPassengers}</p>
          </FligthPlanDetailsPass>
          <FlightPlanDetailsAircraf>
            <AirplaneLogo />
            <p>Aircraft model: {flightPlanData.aircraft}</p>
          </FlightPlanDetailsAircraf>
        </FlightPlanInformation>
        <MapContainer
          className="plan-map leaflet-container leaflet-touch leaflet-safari leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
          center={position}
          zoom={10}
          style={{ height: 600, width: "100%" }}
          scrollWheelZoom={false}
        >
          {departureLocation && arrivalLocation ? (
            window.innerWidth < 800 ? (
              <ChangeView center={GetNewCenter()} zoom={getNewZoom() - 1} />
            ) : (
              <ChangeView center={GetNewCenter()} zoom={getNewZoom()} />
            )
          ) : null}
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_CUSTOM_MAP_KEY}`}
          />
          {departureLocation ? (
            <Marker
              position={[departureLocation.lat, departureLocation.lon]}
              icon={GetIcon(40)}
            >
              <Popup>
                {flightPlanData.departureAirport} <br />{" "}
                {departureLocation.lat + ", " + departureLocation.lon}
              </Popup>
            </Marker>
          ) : null}
          {arrivalLocation ? (
            <Marker
              position={[arrivalLocation.lat, arrivalLocation.lon]}
              icon={GetIcon(40)}
            >
              <Popup>
                {flightPlanData.arrivalAirport} <br />{" "}
                {arrivalLocation.lat + ", " + arrivalLocation.lon}
              </Popup>
            </Marker>
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

const FlightPlanPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    text-align: start;
  }
`;

const FligthPlanDetailsDeparture = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "svg info";
  align-items: center;
  padding: 0.5em;
  svg {
    grid-area: svg;
    justify-self: start;
    align-self: center;
  }
  div {
    grid-area: info;
    align-self: center;
    justify-self: start;
  }
`;

const FligthPlanDetailsArrival = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "svg info";
  align-items: center;
  padding: 0.5em;
  svg {
    grid-area: svg;
    justify-self: start;
    align-self: center;
  }
  div {
    grid-area: info;
    align-self: center;
    justify-self: start;
    justify-items: start;
  }
`;
const FligthPlanDetailsTime = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "svg info";
  align-items: center;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  svg {
    grid-area: svg;
    justify-self: start;
    align-self: center;
  }
  div {
    grid-area: info;
    align-self: center;
    justify-self: start;
  }
`;
const FlightPlanDetailsAircraf = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "svg info";
  align-items: center;
  padding: 0.5em;
  svg {
    grid-area: svg;
    justify-self: start;
    align-self: center;
  }
  p {
    grid-area: info;
    align-self: center;
    justify-self: start;
  }
`;
const FligthPlanDetailsPass = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "svg info";
  align-items: center;
  padding: 0.5em;
  svg {
    grid-area: svg;
  }
  p {
    grid-area: info;
    align-self: center;
    justify-self: center;
  }
`;

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;

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
