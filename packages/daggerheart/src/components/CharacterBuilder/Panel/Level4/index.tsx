import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface ILevel4PanelProps extends IPanelProps {}

const Level4Panel = ({ character }: ILevel4PanelProps) => {
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
    <div className="level-4-panel">
      <h3>Make your level 4 selections</h3>
    </div>
  );
};

export default Level4Panel;
