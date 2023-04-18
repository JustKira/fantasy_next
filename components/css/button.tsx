import React, { ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  min_w?: number;
};
const Button: React.FC<ButtonProps> = ({ min_w, children, ...rest }) => {
  return (
    <button
      className={`bg-gray-900 text-white uppercase px-4 py-3 w-full`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
