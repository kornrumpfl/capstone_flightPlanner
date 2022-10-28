import styled from "styled-components";

export default function SavedFlightPlans({
  savedFlightPlanData,
  loadFlightPlan,
}) {
  return (
    <SavedFlightPlansDiv>
      <h1>Saved flight plans</h1>

      {savedFlightPlanData.map((item) => {
        console.log(item);
        return (
          <ListOfFlightPlans>
            <SavedItem onClick={loadFlightPlan}>
              <h3>{item.id}</h3>
              <p>
                {item.departureAirport}-{item.arrivalAirport}
              </p>
            </SavedItem>
          </ListOfFlightPlans>
        );
      })}
    </SavedFlightPlansDiv>
  );
}

const SavedFlightPlansDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListOfFlightPlans = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SavedItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightblue;
  border-radius: 10px;
  list-style-type: none;
  width: 20rem;
  padding: 0 1em 0 1em;
  h3 {
    text-align: start;
  }
  p {
    text-align: center;
  }
`;
