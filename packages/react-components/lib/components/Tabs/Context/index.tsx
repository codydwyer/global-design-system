import { useState } from "react";
import { clsx } from "clsx";
import Tabs, { ITab } from "../";
import TabPanel, { ITabPanel } from "../Panel";
import "./style.scss";

export interface ITabsContextProps {
  id: string;
  tabs: ITab[];
  panels: ITabPanel[];
  defaultActive: string;
  className?: string;
}

const TabsContext = ({
  id,
  tabs,
  panels,
  defaultActive,
  className,
}: ITabsContextProps) => {
  const classes = clsx(className, "tab-context");
  const [activeTab, setActiveTab] = useState(defaultActive);
  const contextId = `tab-context-${id}`;

  return (
    <div id={contextId} className={classes}>
      <Tabs
        id={id}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {panels.map((panel) => (
        <TabPanel
          key={`${id}-${panel.id}`}
          {...panel}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};

export default TabsContext;
