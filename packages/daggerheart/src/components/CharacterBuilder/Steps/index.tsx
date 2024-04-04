import { Link } from 'react-router-dom';
import { ICharacter } from '~/types';
import { IBuilderStep } from '../schema';
import BuilderStep from './Step';
import './style.scss';

export interface IBuilderStepsProps {
  character: ICharacter;
  steps: IBuilderStep[];
  currentStep: IBuilderStep;
  setStep: React.Dispatch<React.SetStateAction<IBuilderStep>>;
}

const BuilderSteps = ({ character, steps, currentStep, setStep }: IBuilderStepsProps) => {
  return (
    <div className="steps-panel">
      <Link to={`/character/${character.id}`} className="view-btn">
        view sheet
      </Link>
      {steps.map((step) => (
        <BuilderStep
          key={`builder-step-${step.id}`}
          step={step}
          character={character}
          currentStep={currentStep}
          setStep={setStep}
        />
      ))}
    </div>
  );
};

export default BuilderSteps;
