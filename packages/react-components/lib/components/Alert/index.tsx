import { clsx } from "clsx";
import "./style.scss";

export interface IAlertProps {
  className?: string;
}

const Alert = ({
  className,
  children,
}: React.PropsWithChildren<IAlertProps>) => {
  const classes = clsx(className, "alert");

  return <div className={classes}>{children}</div>;
};

export default Alert;
