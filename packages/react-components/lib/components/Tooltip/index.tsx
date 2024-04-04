import { clsx } from "clsx";
import "./style.scss";

export interface ITooltipProps {
  className?: string;
}

const Tooltip = ({
  className,
  children,
}: React.PropsWithChildren<ITooltipProps>) => {
  const classes = clsx(className, "tooltip");

  return <div className={classes}>{children}</div>;
};

export default Tooltip;
