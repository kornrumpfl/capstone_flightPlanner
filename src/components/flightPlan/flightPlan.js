import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";

export default function FlightPlan() {
  const position = [53.633354, 9.999303];
  return (
    <div>
      <h1>Flight Plan</h1>
      <MapContainer
        className="plan-map leaflet-container leaflet-touch leaflet-safari leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        center={position}
        zoom={10}
        style={{ height: 500, width: "100%" }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <button>Back to Home</button>
    </div>
  );
}
