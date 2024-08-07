import {
  forwardRef,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { cn } from "../../utils/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  className?: string;
}

const Option = ({ children, className, ...props }: OptionProps) => {
  return (
    <option className={cn("px-4 py-2 hover:bg-gray-100", className)} {...props}>
      {children}
    </option>
  );
};

interface SelectComponent
  extends ForwardRefExoticComponent<
    SelectProps & RefAttributes<HTMLSelectElement>
  > {
  Option: typeof Option;
}

const Select: SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className="relative inline-block w-full">
        <select
          ref={ref}
          className={cn(
            "w-full min-w-52 appearance-none rounded-md border border-gray1 bg-white px-3 py-0.5 pr-8 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none focus:ring focus:ring-red-100",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0.5 flex items-center px-2 text-gray-700">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );
  },
) as SelectComponent;

Select.displayName = "Select";
Select.Option = Option;

export default Select;
