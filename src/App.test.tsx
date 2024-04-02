import * as axios from "axios";

import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("axios");

const mockHeader = jest.fn();
jest.mock("./components/header/header", () => () => {
  mockHeader();
  return <div data-testid="mockHeader" />;
});

const mockPodcastRoutes = jest.fn();
jest.mock("./router", () => () => {
  mockPodcastRoutes();
  return <div data-testid="mockPodcastRoutes" />;
});

describe("Test App", () => {
  test("should render Header component", () => {
    render(<App />);
    const mockHeader = screen.getByTestId("mockHeader");
    expect(mockHeader).toBeInTheDocument();
  });

  test("should render PodcastRoutes component", () => {
    render(<App />);
    const mockPodcastRoutes = screen.getByTestId("mockPodcastRoutes");
    expect(mockPodcastRoutes).toBeInTheDocument();
  });
});
