import { ICharacter } from '~/types';
import { IBuilderStep, IBuilderAttribute } from '../schema';
import AttributeField from './AttributeField';
import './style.scss';

export interface ICharacterSelectionProps {
  character: ICharacter;
  currentStep: IBuilderStep;
  attributes: IBuilderAttribute[];
  setSelection: React.Dispatch<React.SetStateAction<IBuilderAttribute>>;
}

const CharacterSelection = ({ character, currentStep, attributes, setSelection }: ICharacterSelectionProps) => {
  const { title, attributes: stepAttributes } = currentStep;

  return (
    <div className="selection-panel">
      <h3>{title}</h3>
      {stepAttributes.map((attributeId) => {
        const attribute = attributes.find((attr) => attr.id === attributeId);

        return (
          <AttributeField
            key={`attribute-field-${attributeId}`}
            attribute={attribute!}
            setSelection={setSelection}
            character={character}
          />
        );
      })}
    </div>
  );
};

export default CharacterSelection;
