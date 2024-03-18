import clsx from 'clsx';
import { Link } from 'react-router-dom';
import './style.scss';

export interface IMenuProps {
  className?: string;
}

const Menu = ({ className }: IMenuProps) => {
  const classes = clsx(className);
  return (
    <menu className={classes}>
      <nav>
        <ul>
          <li>
            <a href="">Characters</a>
            <ul>
              <li>
                <a href="">My characters</a>
              </li>
              <li>
                <Link to="/character">Create new character</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Rules</a>
            <ul>
              <li>
                <a href="">Classes</a>
              </li>
              <li>
                <a href="">Heritage</a>
              </li>
              <li>
                <a href="">Items</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </menu>
  );
};

export default Menu;
