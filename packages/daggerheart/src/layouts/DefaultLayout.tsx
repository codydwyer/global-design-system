import { useContext } from 'react';
import { Modal, Menu, ILink } from '@global-design-system/react-components';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '~/components/ThemeSwitcher';
import ThemeContext from '~/context/theme';
import './style.scss';

const schema: ILink[] = [
  {
    to: '',
    text: 'Characters',
    subnav: [
      { to: '', text: 'My characters', element: <Link to={'/characters'}>My characters</Link> },
      { to: '', text: 'Create a new Character', element: <Link to={'/builder'}>Create a new character</Link> },
    ],
  },
  {
    to: '',
    text: 'Rules',
    subnav: [
      { to: '/editor', text: 'Classes' },
      { to: '', text: 'Heritages' },
      { to: '', text: 'Domains', element: <Link to={'/domains'}>Domains</Link> },
      { to: '', text: 'Items' },
    ],
  },
];

export interface ILayoutProps {}

const DefaultLayout = ({ children }: React.PropsWithChildren<ILayoutProps>) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme} layout`}>
      <Menu id="main-menu" schema={schema} className="main-menu">
        <ThemeSwitcher />
      </Menu>
      <Modal />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
