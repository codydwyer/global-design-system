import { clsx } from 'clsx';
import Tab, { ITab } from './Tab';
import './style.scss';

export interface ITabsProps {
  id: string;
  tabs: ITab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const Tabs = ({ id, tabs, activeTab, setActiveTab, className }: ITabsProps) => {
  const classes = clsx(className, 'tabs');

  return (
    <div id={id} className={classes}>
      {tabs.map((tab) => (
        <Tab key={`${id}-${tab.id}`} {...tab} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
    </div>
  );
};

export default Tabs;
