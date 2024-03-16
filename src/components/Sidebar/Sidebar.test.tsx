import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Sidebar from "./Sidebar";

describe("Sidebar UT", () => {
  it("should render correctly", () => {
    const { getByTestId, getAllByTestId } = render(<Sidebar />);
    const menuList = getByTestId("menu-list");
    const menuItems = getAllByTestId("menu-item");

    expect(menuList).toBeInTheDocument();
    expect(menuItems).toHaveLength(4);
  });
});
