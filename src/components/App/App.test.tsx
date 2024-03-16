import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App UT", () => {
  it("should render correctly ", () => {
    render(<App />);
    const headline = screen.getByText("Hi, I'm Duong Nguyen");
    expect(headline).toBeInTheDocument();
  });
});
