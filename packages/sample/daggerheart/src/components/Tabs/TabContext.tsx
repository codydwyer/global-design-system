import { useState } from 'react';
import { clsx } from 'clsx';
import Tabs from '.';
import { ITab } from './Tab';
import TabPanel, { ITabPanelProps } from './TabPanel';
import './style.scss';

export interface ITabContextProps {
  id: string;
  tabs: ITab[];
  panels: ITabPanelProps[];
  defaultActive: string;
  className?: string;
}

const TabContext = ({ id, tabs, panels, defaultActive, className }: ITabContextProps) => {
  const classes = clsx(className, 'tabs');
  const [activeTab, setActiveTab] = useState(defaultActive);
  const contextId = `tab-context-${id}`;
  const tabId = `tab-tab-${id}`;

  return (
    <div id={contextId} className={classes}>
      <Tabs id={tabId} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {panels.map((panel) => (
        <TabPanel key={`${id}-${panel.id}`} {...panel} setActiveTab={setActiveTab} activeTab={activeTab} />
      ))}
    </div>
  );
};

export default TabContext;
