import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  onClick: (value: boolean) => void;
  children?: ReactNode;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ onClick, children, color }: Props) => {
  return (
    <>
      <div id="liveAlertPlaceholder">{children}</div>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        id="liveAlertBtn"
        onClick={() => onClick(true)}
      >
        Show live alert
      </button>
    </>
  );
};

export default Button;
