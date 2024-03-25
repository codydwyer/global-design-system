import { clsx } from "clsx";
export { default as TabsContext } from "./Context/";
import "./style.scss";

export interface ITab {
  id: string;
  label: string;
  className?: string;
}

export interface ITabProps extends ITab {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITabsProps {
  id: string;
  tabs: ITab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export const Tab = ({
  id,
  label,
  activeTab,
  setActiveTab,
  className,
}: ITabProps) => {
  const isActive = activeTab === id;
  const classes = clsx(className, isActive && "active", "tab");

  return (
    <button id={id} className={classes} onClick={() => setActiveTab(id)}>
      {label}
    </button>
  );
};

const Tabs = ({ id, tabs, activeTab, setActiveTab, className }: ITabsProps) => {
  const classes = clsx(className, "tabs");

  return (
    <div id={`tabs-${id}`} className={classes}>
      {tabs.map((tab) => (
        <Tab
          key={`${id}-${tab.id}`}
          {...tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
