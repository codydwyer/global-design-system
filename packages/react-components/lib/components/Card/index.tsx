import "./style.scss";
import { clsx } from "clsx";
import "./style.scss";

export interface ICardProps {
  className?: string;
}

const Card = ({ className, children }: React.PropsWithChildren<ICardProps>) => {
  const classes = clsx(className, "card");
  return <div className={classes}>{children}</div>;
};

export default Card;
