import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel9PanelProps extends IPanelProps {}

const Level9Panel = ({ character }: ILevel9PanelProps) => {
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
    <div className="level-9-panel">
      <h3>Make your level 9 selections</h3>
    </div>
  );
};

export default Level9Panel;
