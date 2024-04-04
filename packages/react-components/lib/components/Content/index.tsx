import { clsx } from "clsx";
import "./style.scss";

export interface IContentProps {
  className?: string;
}

const Content = ({
  className,
  children,
}: React.PropsWithChildren<IContentProps>) => {
  const classes = clsx(className, "content");
  return (
    <div className={classes}>
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Content;
