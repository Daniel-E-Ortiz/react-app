// rafce

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  visable: boolean;
}
const Alert = ({ children, onClose, visable }: Props) => {
  return (
    <div
      className={
        "alert alert-primary alert-dismissible " + (visable ? "show" : "fade")
      }
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
