import { clsx } from "clsx";
import "./style.scss";

export interface IDrawerProps {
  className?: string;
}

const Drawer = ({
  className,
  children,
}: React.PropsWithChildren<IDrawerProps>) => {
  const classes = clsx(className, "drawer");

  return <div className={classes}>{children}</div>;
};

export default Drawer;
