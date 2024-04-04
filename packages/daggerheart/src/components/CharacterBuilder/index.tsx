import { ICharacter } from '~/types';
import CharacterDetails from './Details';
import BuilderSteps from './Steps';
import CharacterSelection from './Selection';
import schema from './schema';
import './style.scss';
import { useState } from 'react';

export interface ICharacterBuilderProps {
  character: ICharacter;
}

const CharacterBuilder = ({ character }: ICharacterBuilderProps) => {
  const [currentStep, setStep] = useState(schema.steps[0]);
  const [currentSelection, setSelection] = useState(schema.attributes[0]);

  return (
    <div className="character-builder">
      <div className="panel-container">
        <BuilderSteps character={character} steps={schema.steps} currentStep={currentStep} setStep={setStep} />
        <CharacterSelection
          character={character}
          currentStep={currentStep}
          attributes={schema.attributes}
          setSelection={setSelection}
        />
        <CharacterDetails character={character} currentSelection={currentSelection} setSelection={setSelection} />
      </div>
    </div>
  );
};

export default CharacterBuilder;
