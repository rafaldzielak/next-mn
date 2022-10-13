import React, { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  return <input className='border rounded px-3 py-1 w-80' {...props} />;
};

export default Input;
