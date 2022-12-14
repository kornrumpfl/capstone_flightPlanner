import MapLive from "./MapLive";
import { useState, useEffect } from "react";

export default function MyMap({ airportLocationCord }) {
  const [dataAirplanes, setDataAirplanes] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_LIVE_API_KEY,
    },
    "X-RapidAPI-Host": "adsbx-flight-sim-traffic.p.rapidapi.com",
  };
  useEffect(() => {
    getDataPlanes();
  }, [airportLocationCord]);

  async function getDataPlanes() {
    try {
      const response = await fetch(
        `https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/${airportLocationCord.lat}/lon/${airportLocationCord.lon}/dist/25/`,
        options
      );
      const newData = await response.json();
      setDataAirplanes(newData.ac);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {dataAirplanes ? (
        dataAirplanes.lat !== 0 ? (
          <MapLive
            dataAirplanes={dataAirplanes}
            airportLocationCord={airportLocationCord}
          />
        ) : null
      ) : null}
    </div>
  );
}
