//import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <AppHeader>Flight Planner</AppHeader>
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
  font-size: calc(10px + 2vmin);
  color: black;
  border-bottom: 1px solid black;
`;

export default App;
