import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel5PanelProps extends IPanelProps {}

const Level5Panel = ({ character }: ILevel5PanelProps) => {
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
    <div className="level-5-panel">
      <h3>Make your level 5 selections</h3>
    </div>
  );
};

export default Level5Panel;
