import { clsx } from "clsx";
import "./style.scss";

export interface IDataGridProps {
  className?: string;
}

const DataGrid = ({
  className,
  children,
}: React.PropsWithChildren<IDataGridProps>) => {
  const classes = clsx(className, "data-grid");

  return <div className={classes}>{children}</div>;
};

export default DataGrid;
