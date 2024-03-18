import { clsx } from 'clsx';
import './style.scss';

export interface ITab {
  id: string;
  label: string;
  className?: string;
}

export interface ITabProps extends ITab {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tab = ({ id, label, activeTab, setActiveTab, className }: ITabProps) => {
  const isActive = activeTab === id;
  const classes = clsx(className, isActive && 'active', 'tab');

  return (
    <button id={id} className={classes} onClick={() => setActiveTab(id)}>
      {label}
    </button>
  );
};

export default Tab;
