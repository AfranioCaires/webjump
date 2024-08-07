// src/components/ui/__test__/select.spec.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Select from "../select";

test("should render the select component with options", () => {
  render(
    <Select id="test-select" data-testid="select">
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
    </Select>,
  );

  // Check if the select element is in the document
  const selectElement = screen.getByTestId("select");
  expect(selectElement).not.toBeNull();

  // Check if the options are in the document
  const option1 = screen.getByText("Option 1");
  const option2 = screen.getByText("Option 2");
  expect(option1).not.toBeNull();
  expect(option2).not.toBeNull();
});

test("should handle option selection", () => {
  render(
    <Select id="test-select" data-testid="select">
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
    </Select>,
  );

  // Get the select element and simulate a change
  const selectElement = screen.getByTestId("select") as HTMLSelectElement;
  fireEvent.change(selectElement, { target: { value: "option2" } });

  // Verify that the selected option has the correct value
  expect(selectElement.value).toBe("option2");
});

test("should apply custom class names", () => {
  render(
    <Select id="test-select" data-testid="select" className="custom-class">
      <Select.Option value="option1" className="custom-option">
        Option 1
      </Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
    </Select>,
  );

  // Check if the custom class names are applied
  const selectElement = screen.getByTestId("select");
  expect(selectElement.className).toContain("custom-class");

  const optionElement = screen.getByText("Option 1");
  expect(optionElement.className).toContain("custom-option");
});
