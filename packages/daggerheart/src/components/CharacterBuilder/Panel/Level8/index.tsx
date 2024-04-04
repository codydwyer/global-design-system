import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel8PanelProps extends IPanelProps {}

const Level8Panel = ({ character }: ILevel8PanelProps) => {
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
    <div className="level-8-panel">
      <h3>Make your level 8 selections</h3>
    </div>
  );
};

export default Level8Panel;
