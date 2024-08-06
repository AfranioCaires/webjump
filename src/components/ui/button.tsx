import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "font-bold inline-flex items-center justify-center hover:bg-opacity-75",
  {
    variants: {
      variant: {
        default: "bg-red1 text-white",
        teal: "bg-teal1 text-white",
      },
      size: {
        default: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-lg",
      },
      shape: {
        default: "rounded-none",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, shape, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, shape, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
