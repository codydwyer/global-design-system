import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel3PanelProps extends IPanelProps {}

const Level3Panel = ({ character }: ILevel3PanelProps) => {
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
    <div className="level-3-panel">
      <h3>Make your level 3 selections</h3>
    </div>
  );
};

export default Level3Panel;
