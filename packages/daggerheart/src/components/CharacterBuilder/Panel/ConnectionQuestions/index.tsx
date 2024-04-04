import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface IConnectionQuestionsPanelProps extends IPanelProps {}

const ConnectionQuestionsPanel = ({ character }: IConnectionQuestionsPanelProps) => {
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
    <div className="connection-questions-panel">
      <h3>Answer these connection questions</h3>
    </div>
  );
};

export default ConnectionQuestionsPanel;
