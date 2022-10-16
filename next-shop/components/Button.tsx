import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className='bg-green-800 text-gray-100 rounded px-4 py-2 hover:bg-green-700 my-2' {...props}>
      {children}
    </button>
  );
};

export default Button;
