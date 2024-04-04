import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface IDescriptionPanelProps extends IPanelProps {}

const DescriptionPanel = ({ character }: IDescriptionPanelProps) => {
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
    <div className="description-panel">
      <h3>Describe your character</h3>
      <div className="description">
        <div className="pronouns">Pronouns: {pronouns}</div>
        <div className="eyes">Eyes like {description?.eyes}</div>
        <div className="body">Body that's {description?.body}</div>
        <div className="clothes">Clothes that are{description?.clothes}</div>
        <div className="color">The color of {description?.color}</div>
        <div className="attitude">Attitude like {description?.attitude}</div>
      </div>
    </div>
  );
};

export default DescriptionPanel;
