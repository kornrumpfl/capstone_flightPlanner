import { render, screen } from "@testing-library/react";
import AirportSelect from "../components/features/AirportsSelect";

describe("DateInput", () => {
  it("should check if there are option Cologne Bonn Airport", () => {
    render(<AirportSelect />);
    const outputElement = screen.getByText(/Cologne Bonn Airport/i);
    expect(outputElement).toBeInTheDocument();
  });
  it("should check if there are option Berlin Tempelhof Airport", () => {
    render(<AirportSelect />);
    const outputElement = screen.getByText(/Berlin Tempelhof Airport/i);
    expect(outputElement).toBeInTheDocument();
  });
  it("should check if there are option Congonhas Airport", () => {
    render(<AirportSelect />);
    const outputElement = screen.getByText(/Congonhas Airport/i);
    expect(outputElement).toBeInTheDocument();
  });
});
