import styled from "styled-components";

export default function SavedFlightPlans({ saveFlightData }) {
  return (
    <SavedFlightPlansDiv>
      <h1>Saved flight plans</h1>
      {saveFlightData.map((item) => {
        console.log(item);
        return (
          <SavedItem>
            <h2>{item.id}</h2>
            <p>
              {item.departureAirport}-{item.arrivelAirport}
            </p>
          </SavedItem>
        );
      })}
    </SavedFlightPlansDiv>
  );
}

const SavedFlightPlansDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SavedItem = styled.li`
  background-color: lightblue;
  border-radius: 20px;
  h2 {
    text-align: start;
  }
  p {
    text-align: center;
  }
`;
