import React, { type PropsWithChildren } from "react";

export type InputProp = {
  type: "text" | "number";
};

const Input = ({ children, type }: PropsWithChildren<InputProp>) => {
  return <input type={type}>{children}</input>;
};

export default Input;
