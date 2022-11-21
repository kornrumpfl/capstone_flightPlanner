import { render, screen } from "@testing-library/react";
import Runways from "../components/features/Runways";

describe("DateInput", () => {
  it("should render the runways options", () => {
    render(<Runways />);
    const outputElement = screen.getByRole("option");
    expect(outputElement).toBeInTheDocument();
  });
});
