import { render, screen } from "@testing-library/react";
import App from "./App";

test("should test the header of my app", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading");
  expect(linkElement).toBeInTheDocument();
});
