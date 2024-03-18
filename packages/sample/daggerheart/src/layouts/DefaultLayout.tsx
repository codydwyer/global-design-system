import Hamburger from '../components/Hamburger';
import Menu from '../components/Menu';
import Modal from '../components/Modal';
import './style.scss';

export interface ILayoutProps {}

const DefaultLayout = ({ children }: React.PropsWithChildren<ILayoutProps>) => {
  return (
    <div>
      <Menu />
      <Modal />
      <div className="container">
        <div className="content">{children}</div>
        <Hamburger />
      </div>
    </div>
  );
};

export default DefaultLayout;
