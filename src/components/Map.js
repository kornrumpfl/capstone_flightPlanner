import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

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
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {dataAirplanes.length !== 0
        ? dataAirplanes?.map((plane) => {
            return (
              <Marker position={[plane.lat, plane.lon]} icon={GetIcon(20)}>
                <Popup>
                  callsign: {plane.call} <br />
                  from: {plane.from} <br />
                  to: {plane.to} <br />
                  plane homeland: {plane.cou} <br />
                  model: {plane.type} <br />
                  altitute: {plane.alt}
                </Popup>
              </Marker>
            );
          })
        : null}
    </MapContainer>
  );
}
