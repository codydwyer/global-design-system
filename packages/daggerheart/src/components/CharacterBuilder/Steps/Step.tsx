import clsx from 'clsx';
import { ICharacter } from '~/types';
import { IBuilderStep } from '../schema';
import { checkPrerequisites } from '../utils';
import './style.scss';

export interface IBuilderStepProps {
  character: ICharacter;
  step: IBuilderStep;
  currentStep: IBuilderStep;
  setStep: React.Dispatch<React.SetStateAction<IBuilderStep>>;
}

const BuilderStep = ({ character, step, currentStep, setStep }: IBuilderStepProps) => {
  const stepSelectionHandler = () => {
    setStep(step);
  };

  const prerequisitesMet = () => {
    const met = step.prerequesites ? checkPrerequisites(step.prerequesites, character) : true;
    return met;
  };

  const getSubtitles = () => {
    return step.subtitle
      ? step.subtitle
          .map((title) => {
            const attribute = character[title as keyof ICharacter];
            // eslint-disable-next-line no-prototype-builtins
            return attribute && attribute.hasOwnProperty('name') ? attribute.name : attribute;
          })
          .join(' ')
      : '';
  };

  const subtitle = getSubtitles();

  const prereqsMet = prerequisitesMet();

  const classes = clsx('builder-step', currentStep === step && 'active', prereqsMet && 'prerequesites-met');

  return (
    <div className={classes}>
      <button className="builder-step-btn" onClick={stepSelectionHandler} disabled={!prereqsMet}>
        <span className="step-title">{step.title}</span>
        <span className="step-subtitle">{subtitle}</span>
      </button>
    </div>
  );
};

export default BuilderStep;
