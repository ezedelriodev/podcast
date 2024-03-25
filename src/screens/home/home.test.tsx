import { render, screen } from "@testing-library/react";
import Home from "./home";

describe("Test Home", () => {
  test("should render correctly", () => {
    render(<Home />);
    expect(screen.getByTestId("home_container")).toBeInTheDocument();
  });
});
