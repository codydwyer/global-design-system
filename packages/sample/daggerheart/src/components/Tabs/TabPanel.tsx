import React from 'react';
import { clsx } from 'clsx';
import './style.scss';

export interface ITabPanelProps {
  id: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  content: React.ReactElement;
  className?: string;
}

const TabPanel = ({ id, activeTab, setActiveTab, className, content }: ITabPanelProps) => {
  const isActive = activeTab === id;
  const classes = clsx(className, isActive && 'active', 'tab-panel');
  const renderContent = () => {
    return React.cloneElement(content, {
      setActiveTab: setActiveTab,
    });
  };

  return (
    <div id={id} className={classes}>
      {renderContent()}
    </div>
  );
};

export default TabPanel;
