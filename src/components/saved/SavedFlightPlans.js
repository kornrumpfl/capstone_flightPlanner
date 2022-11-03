import styled from "styled-components";
import DeleteLogo from "../logos/deletelogo";
import LoadLogo from "../logos/loadlogo";

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
            <SavedItem>
              <h3>{item.id}</h3>
              <p>
                {item.departureAirport}-{item.arrivalAirport}
              </p>
              <LoadFlightPlanLogo onClick={() => loadFlightPlan(item.id)}>
                <LoadLogo />
              </LoadFlightPlanLogo>
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

const LoadFlightPlanLogo = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  svg {
    width: 2.2em;
    height: 2.2em;
  }
  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
    border-radius: 55%;
    padding: 2px;
  }
`;

const DeleteLogoStyled = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  svg {
    width: 2.2em;
    height: 2.2em;
  }
  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
    border-radius: 55%;
    padding: 2px;
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
