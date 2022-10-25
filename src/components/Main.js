import styled from "styled-components";

export default function Main() {
  return (
    <section>
      <SectionFlightInfo>
        <p>Flight number</p>
        <input type="text" name="flightNumber"></input>
      </SectionFlightInfo>
      <AirportSelection>
        <Departure></Departure>
        <Arrival></Arrival>
      </AirportSelection>
    </section>
  );
}

const SectionFlightInfo = styled.section`
  margin-top: 2vw;
  display: flex;
  justify-content: space-evenly;
`;

const AirportSelection = styled.section`
  display: flex;
`;
const Departure = styled.div``;
