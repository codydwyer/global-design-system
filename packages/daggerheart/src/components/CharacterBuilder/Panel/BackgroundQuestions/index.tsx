import { IPanelProps } from '../';
import Effect from '../../../Effect';
import './style.scss';

export interface IBackgroundQuestionsPanelProps extends IPanelProps {}

const BackgroundQuestionsPanel = ({ character }: IBackgroundQuestionsPanelProps) => {
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
    <div className="background-questions-panel">
      <h3>Answer these background questions</h3>
    </div>
  );
};

export default BackgroundQuestionsPanel;
