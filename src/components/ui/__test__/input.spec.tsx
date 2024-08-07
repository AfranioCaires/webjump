import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { Input } from "../input";

test("should render input element with label and helper text", () => {
  render(<Input id="password" label="Password" helperText="Helper text" />);
  const inputElement = screen.getByLabelText("Password");
  expect(inputElement).not.toBeNull();
  const helperTextElement = screen.getByText("Helper text");
  expect(helperTextElement).not.toBeNull();
});

test("should render input element without label and helper text", () => {
  render(<Input id="password" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).not.toBeNull();
});

test("should render input element with only label", () => {
  render(<Input id="password" label="Password" />);
  const inputElement = screen.getByLabelText("Password");
  expect(inputElement).not.toBeNull();
});

test("should render input element with only helper text", () => {
  render(<Input id="password" helperText="Helper text" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).not.toBeNull();
  const helperTextElement = screen.getByText("Helper text");
  expect(helperTextElement).not.toBeNull();
});
