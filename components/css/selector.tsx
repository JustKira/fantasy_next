import React, {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  forwardRef,
} from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {};
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...rest }, ref) => {
    return (
      <select
        className="drop-shadow-md border placeholder:text-gray-400 border-gray-400 px-4 py-3 outline-none min-w-[20rem]"
        ref={ref}
        {...rest}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Input";
export default Select;
