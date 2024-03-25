import clsx from "clsx";
import "./style.scss";
export interface IHamburgerProps {
  open?: boolean;
  className?: string;
}

const Hamburger = ({ open = false, className }: IHamburgerProps) => {
  const classes = clsx("hamburger", open && "open", className);

  return <div className={classes}>Hamburger</div>;
};

export default Hamburger;
