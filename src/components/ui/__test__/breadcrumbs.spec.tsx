import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { Link } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs";

vi.mock("react-router-dom", () => ({
  useMatches: () => [
    {
      handle: {
        crumb: () => <Link to="/home">Home</Link>,
      },
      data: {},
    },
    {
      handle: {
        crumb: () => <Link to="/section">Section</Link>,
      },
      data: {},
    },
    {
      handle: {
        crumb: () => <Link to="/item">Item</Link>,
      },
      data: {},
    },
  ],
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("Breadcrumbs", () => {
  it("renders breadcrumbs correctly", () => {
    render(<Breadcrumbs />);

    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("Section")).toBeDefined();
    expect(screen.getByText("Item")).toBeDefined();

    const separators = screen.getAllByText(">");
    expect(separators.length).toBe(2);
  });

  it("applies correct styles to breadcrumbs", () => {
    render(<Breadcrumbs />);

    const crumbs = screen.getAllByRole("listitem");
    expect(crumbs[crumbs.length - 1].className).toContain("text-red1");
  });
});
