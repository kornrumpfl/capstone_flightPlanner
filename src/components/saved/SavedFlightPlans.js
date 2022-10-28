import styled from "styled-components";
import DeleteLogo from "../logos/deletelogo";

export default function SavedFlightPlans({
  savedFlightPlanData,
  loadFlightPlan,
  onDelete,
}) {
  return (
    <SavedFlightPlansSection>
      <h1>Saved flight plans</h1>

      {savedFlightPlanData.map((item) => {
        return (
          <ListOfFlightPlans>
            <SavedItem onClick={loadFlightPlan}>
              <h3>{item.id}</h3>
              <p>
                {item.departureAirport}-{item.arrivalAirport}
              </p>
              <DeleteLogoStyled onClick={() => onDelete(item.id)}>
                <DeleteLogo />
              </DeleteLogoStyled>
            </SavedItem>
          </ListOfFlightPlans>
        );
      })}
    </SavedFlightPlansSection>
  );
}

const DeleteLogoStyled = styled.button`
  display: flex;
  position: relative;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  svg {
    width: 2.2em;
    height: 2.2em;
  }
`;

const SavedFlightPlansSection = styled.section`
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

  h3 {
    text-align: start;
  }
  p {
    text-align: center;
  }
`;
