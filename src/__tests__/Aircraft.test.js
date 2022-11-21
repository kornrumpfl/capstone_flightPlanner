import { render, screen } from "@testing-library/react";
import Aircraft from "../components/features/Aircraft";

describe("Aircraft element test", () => {
  it("should render aircraft DC86", () => {
    render(<Aircraft />);
    const outputElement = screen.getByText(/DC86/i);
    expect(outputElement).toBeInTheDocument();
  });
  it("should render aircraft SF50  -  VISION JET", () => {
    render(<Aircraft />);
    const outputElement = screen.getByText(/VISION JET/i);
    expect(outputElement).toBeInTheDocument();
  });
  it("should render aircraft CESSNA 172R", () => {
    render(<Aircraft />);
    const outputElement = screen.getByText(/CESSNA 172R/i);
    expect(outputElement).toBeInTheDocument();
  });
});
