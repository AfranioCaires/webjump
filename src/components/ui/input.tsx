import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../utils/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label className="text-sm" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "border border-gray2 px-2 py-3 text-base text-gray5",
            className,
          )}
          {...props}
        />
        {helperText && (
          <span className="text-xs text-gray-500">{helperText}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
