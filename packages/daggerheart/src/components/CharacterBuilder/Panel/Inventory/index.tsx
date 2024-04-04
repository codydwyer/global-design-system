import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface IInventoryPanelProps extends IPanelProps {}

const InventoryPanel = ({ character }: IInventoryPanelProps) => {
  const {
    name,
    pronouns,
    characterClass,
    level,
    subclass,
    ancestry,
    community,
    traits,
    experiences,
    cards,
    inventory,
    description,
    backgroundResponses,
    connectionResponses,
  } = character;

  return (
    <div className="inventory-panel">
      <h3>Choose your starting equipment</h3>
    </div>
  );
};

export default InventoryPanel;
