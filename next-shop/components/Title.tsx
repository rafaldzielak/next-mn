import React, { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className='text-3xl font-bold pb-4'>{children}</h1>;
};

export default Title;
