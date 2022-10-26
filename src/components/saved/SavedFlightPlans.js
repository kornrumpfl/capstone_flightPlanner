import styled from "styled-components";
import Icon from "../logos/underconstruction";

export default function SavedFlightPlans() {
  return (
    <SavedFlightPlansDiv>
      <h1>Saved flight plans</h1>
      <Icon />
    </SavedFlightPlansDiv>
  );
}

const SavedFlightPlansDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  svg {
    scale: 0.5;
  }
  @media only screen and (max-width: 500px) {
    svg {
      scale: 0.2;
    }
  }
`;
