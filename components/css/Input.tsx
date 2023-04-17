import React, { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};
const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <input
      className="drop-shadow-md border placeholder:text-gray-400 border-gray-400 px-4 py-3 outline-none min-w-[20rem]"
      ref={ref}
      {...rest}
    />
  );
});
export default Input;
