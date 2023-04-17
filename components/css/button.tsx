import React, { ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="bg-gray-900 text-white uppercase px-4 py-3 min-w-[20rem]"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
