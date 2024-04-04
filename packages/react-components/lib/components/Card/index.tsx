import { clsx } from "clsx";
import "./style.scss";

export interface ICardProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const Card = ({
  onClick,
  className,
  children,
}: React.PropsWithChildren<ICardProps>) => {
  const classes = clsx(className, onClick && "interactive", "card");
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
