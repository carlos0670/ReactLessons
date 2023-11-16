import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClose: (value: boolean) => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-success alert-dismissible" role="alert">
      <div>children</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => onClose(false)}
      ></button>
    </div>
  );
};

export default Alert;
