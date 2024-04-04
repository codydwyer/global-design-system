import { clsx } from "clsx";
import "./style.scss";

export interface IAsideProps {
  className?: string;
}

const Aside = ({
  className,
  children,
}: React.PropsWithChildren<IAsideProps>) => {
  const classes = clsx(className, "aside");

  return <div className={classes}>{children}</div>;
};

export default Aside;
