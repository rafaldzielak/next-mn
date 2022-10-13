import React, { FC, PropsWithChildren } from "react";
import Input from "./Input";

type FieldProps = PropsWithChildren & {
  label: string;
};

const Field: FC<FieldProps> = ({ label, children }) => {
  return (
    <label className='block'>
      <span className='block text-sm'>{label}</span>
      {children}
    </label>
  );
};

export default Field;
