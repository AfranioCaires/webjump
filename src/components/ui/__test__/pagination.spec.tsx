// __tests__/Pagination.test.tsx
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Pagination from "../pagination";

describe("Pagination Component", () => {
  it("renders correctly", () => {
    const { getByAltText, getByText } = render(
      <Pagination
        total={50}
        perPage={10}
        currentPage={1}
        onPageChange={() => {}}
      />,
    );

    expect(getByAltText("voltar")).not.toBeNull();
    expect(getByAltText("avançar")).not.toBeNull();
    expect(getByText("1")).not.toBeNull();
    expect(getByText("2")).not.toBeNull();
    expect(getByText("3")).not.toBeNull();
    expect(getByText("4")).not.toBeNull();
    expect(getByText("5")).not.toBeNull();
  });

  it("calls onPageChange when page number is clicked", () => {
    const onPageChange = vi.fn();
    const { getByText } = render(
      <Pagination
        total={50}
        perPage={10}
        currentPage={1}
        onPageChange={onPageChange}
      />,
    );

    fireEvent.click(getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
