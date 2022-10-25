//import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "./components/Main";

function App() {
  return (
    <Container>
      <AppHeader>Flight Planner</AppHeader>
      <Main />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  top: 0;
  padding: 0.5rem;
  background-color: white;
  font-size: calc(20px + 2vmin);
  color: black;
  border-bottom: 1px solid black;
`;

export default App;
