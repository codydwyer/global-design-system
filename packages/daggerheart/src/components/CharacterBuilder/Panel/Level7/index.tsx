import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel7PanelProps extends IPanelProps {}

const Level7Panel = ({ character }: ILevel7PanelProps) => {
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
    <div className="level-7-panel">
      <h3>Make your level 7 selections</h3>
    </div>
  );
};

export default Level7Panel;
