import clsx from "clsx";
import "./style.scss";
export interface IModalProps {
  showing?: boolean;
  className?: string;
}

const Modal = ({ showing = false, className }: IModalProps) => {
  const classes = clsx("modal", showing && "showing", className);

  return <div className={classes}>Modal</div>;
};

export default Modal;
