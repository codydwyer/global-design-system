import { ReactElement } from "react";
import clsx from "clsx";
import "./style.scss";

export interface ILink {
  to: string;
  text: string;
  subnav?: ILink[];
  element?: ReactElement;
}

export interface NavItemProps extends ILink {
  id: string;
}

export interface IMenuProps {
  id: string;
  schema: ILink[];
  className?: string;
}

const NavItem = ({ id, to, text, subnav, element }: NavItemProps) => {
  return (
    <li>
      {element !== undefined ? element : <a href={to}>{text}</a>}
      {subnav && (
        <ul>
          {subnav.map((link, index) => (
            <NavItem key={`${id}-${index}`} {...link} id={`${id}-${index}`} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu = ({
  id,
  schema,
  className,
  children,
}: React.PropsWithChildren<IMenuProps>) => {
  const classes = clsx(className);
  return (
    <menu className={classes}>
      {children}
      <nav>
        <ul>
          {schema.map((link, index) => (
            <NavItem key={`${id}-${index}`} {...link} id={`${id}-${index}`} />
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default Menu;
