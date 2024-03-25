import React from "react";
import { clsx } from "clsx";
import "./style.scss";

export interface ITabPanel {
  id: string;
  content: React.ReactElement;
  className?: string;
}

export interface ITabPanelProps extends ITabPanel {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabPanel = ({
  id,
  activeTab,
  setActiveTab,
  className,
  content,
}: ITabPanelProps) => {
  const isActive = activeTab === id;
  const classes = clsx(className, isActive && "active", "tab-panel");
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
