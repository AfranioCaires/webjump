import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button, buttonVariants } from "../button";
describe("Button Component", () => {
  it("should render with default variant, size, and shape", () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText("Default Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      buttonVariants({ variant: "default", size: "default", shape: "default" }),
    );
  });

  it("should render with teal variant", () => {
    render(<Button variant="teal">Teal Button</Button>);
    const button = screen.getByText("Teal Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      buttonVariants({ variant: "teal", size: "default", shape: "default" }),
    );
  });

  it("should render with large size", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByText("Large Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      buttonVariants({ variant: "default", size: "lg", shape: "default" }),
    );
  });

  it("should render with rounded shape", () => {
    render(<Button shape="rounded">Rounded Button</Button>);
    const button = screen.getByText("Rounded Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      buttonVariants({ variant: "default", size: "default", shape: "rounded" }),
    );
  });

  it("should combine variant, size, and shape classes correctly", () => {
    render(
      <Button variant="teal" size="lg" shape="rounded">
        Custom Button
      </Button>,
    );
    const button = screen.getByText("Custom Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      buttonVariants({ variant: "teal", size: "lg", shape: "rounded" }),
    );
  });
});
