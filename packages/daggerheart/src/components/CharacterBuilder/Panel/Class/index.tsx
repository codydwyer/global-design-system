import TabsContext from '@global-design-system/react-components/dist/components/Tabs/Context/';
import schema from './schema';
import { IPanelProps } from '../';
import './style.scss';

export interface IClassPanelProps extends IPanelProps {}

const ClassPanel = () => {
  return (
    <div className="class-panel">
      <TabsContext {...schema} />
    </div>
  );
};

export default ClassPanel;
