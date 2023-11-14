import React from "react";
interface Props {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "white";
  onclick: () => void;
  children: React.ReactNode;
}
const Button = ({ color, onclick, children }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => onclick}
    >
      {children}
    </button>
  );
};

export default Button;
