import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";

export default function Map({ dataAirplanes, airportLocationCord }) {
  // const position = [dataFetched.lat, dataFetched.lon];
  const position = [53.633354, 9.999303];
  console.log(dataAirplanes);

  function GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require("../components/logos/triangle.png"),
      iconSize: [_iconSize],
      iconAnchor: [22, 17],
    });
  }
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer
      className="plan-map leaflet-container leaflet-touch leaflet-safari leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
      center={position}
      zoom={8}
      style={{ height: 600, width: "100%" }}
      scrollWheelZoom={false}
    >
      {airportLocationCord.length !== 0 ? (
        <ChangeView
          center={[airportLocationCord.lat, airportLocationCord.lon]}
          zoom={8}
        />
      ) : null}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_CUSTOM_MAP_KEY}`}
      />

      {dataAirplanes.length !== 0
        ? dataAirplanes?.map((plane) => {
            return (
              <Marker position={[plane.lat, plane.lon]} icon={GetIcon(20)}>
                <Popup>
                  Callsign: {plane.call} <br />
                  From: {plane.from} <br />
                  To: {plane.to} <br />
                  Plane homeland: {plane.cou} <br />
                  Model: {plane.type} <br />
                  Altitute: {plane.alt} ft
                  <br />
                  Direction: {plane.trak} ° <br />
                  Speed: {plane.spd} kts
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
}
