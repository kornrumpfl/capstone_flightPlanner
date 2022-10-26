import styled from "styled-components";
import Icon from "../logos/underconstruction";

export default function LiveFlights() {
  return (
    <LiveFlightsDiv>
      <h1>live information of real flights</h1>
      <Icon />
    </LiveFlightsDiv>
  );
}

const LiveFlightsDiv = styled.div`
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
