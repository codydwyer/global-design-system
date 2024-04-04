import { useContext } from 'react';
import DetailContext from '~/context/detail';
import './style.scss';
import clsx from 'clsx';

const DetailPanel = ({ children }: React.PropsWithChildren) => {
  const { detail, isShowing, setShowing } = useContext(DetailContext);

  const classes = clsx('detail-panel', isShowing && 'showing');

  const closePanel = () => setShowing!(false);

  return (
    <div className="detail-context-container">
      <div className="main-content">{children}</div>
      <div className={classes}>
        <button className="close-detail-panel-btn" onClick={closePanel}>
          &#10005;
        </button>
        <div className="detail-panel-overlay">
          <div className="detail-panel-content">{detail}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
