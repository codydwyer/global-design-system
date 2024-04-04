import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel6PanelProps extends IPanelProps {}

const Level6Panel = ({ character }: ILevel6PanelProps) => {
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
    <div className="level-6-panel">
      <h3>Make your level 6 selections</h3>
    </div>
  );
};

export default Level6Panel;
