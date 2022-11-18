import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeLogo from "../logos/homelogo";
import LiveLogo from "../logos/livelogo";
import SavedLogo from "../logos/savedlogo";

export default function Navigation() {
  return (
    <Nav>
      <StyledNavlink to="/" end>
        <HomeLogo />
      </StyledNavlink>
      <StyledNavlink to="/live">
        <LiveLogo />
      </StyledNavlink>
      <StyledNavlink to="/saved">
        <SavedLogo />
      </StyledNavlink>
    </Nav>
  );
}

const StyledNavlink = styled(NavLink)`
  padding: 1.5em 0.5em;
  width: 100%;

  svg {
    height: 3em;
    width: 3em;
  }

  &:hover {
    background-color: lightgreen;
    opacity: 0.5;
    cursor: pointer;
  }
  &.active {
    background-color: lightblue;
    opacity: 60%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background: #ffffff;
  border-top: 1px solid #0b8189;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;
