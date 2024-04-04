import { clsx } from "clsx";
import "./style.scss";

export interface IToastProps {
  className?: string;
}

const Toast = ({
  className,
  children,
}: React.PropsWithChildren<IToastProps>) => {
  const classes = clsx(className, "toast");

  return <div className={classes}>{children}</div>;
};

export default Toast;
