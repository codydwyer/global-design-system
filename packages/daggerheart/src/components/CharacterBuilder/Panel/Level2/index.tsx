import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel2PanelProps extends IPanelProps {}

const Level2Panel = ({ character }: ILevel2PanelProps) => {
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
    <div className="level-2-panel">
      <h3>Make your level 2 selections</h3>
    </div>
  );
};

export default Level2Panel;
