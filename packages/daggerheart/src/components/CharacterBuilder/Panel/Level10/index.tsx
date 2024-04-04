import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel10PanelProps extends IPanelProps {}

const Level10Panel = ({ character }: ILevel10PanelProps) => {
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
    <div className="level-10-panel">
      <h3>Make your level 10 selections</h3>
    </div>
  );
};

export default Level10Panel;
