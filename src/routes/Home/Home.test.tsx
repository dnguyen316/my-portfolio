import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("Homepage UT", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Home />);
    const headline = getByTestId("hero-headline");
    const subheadline = getByTestId("hero-sub-headline");
    const icon = getByTestId("hero-icons");

    expect(headline).toBeInTheDocument();
    expect(subheadline).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
