import { useState } from 'react';
import { getClass } from '~/data/classes';
import { useAppDispatch } from '~/hooks';
import { updateCharacter } from '~/ducks/characters';
import { TTraits } from '~/types';
import { blankTraits } from '~/types/trait';
import { IPanelProps } from '../';
import './style.scss';
import SuggestedTraits from './SuggestedTraits';
import BuilderTraits from './BuilderTraits';
import SelectTraits from './SelectTraits';

export interface ITraitsPanelProps extends IPanelProps {}

export type TTrait = 'agility' | 'strength' | 'finesse' | 'instinct' | 'presence' | 'knowledge';

export type TSelection =
  | {
      name: 'plus-2';
      value: 2;
    }
  | {
      name: 'plus-1-1';
      value: 1;
    }
  | {
      name: 'plus-1-2';
      value: 1;
    }
  | {
      name: 'minus-1';
      value: -1;
    };

export interface ISelection {
  trait: TTrait;
  selection: TSelection;
}

const defaultSelections: ISelection[] = [];

const TraitsPanel = ({ character }: ITraitsPanelProps) => {
  const dispatch = useAppDispatch();
  const [builderTraits, setTraits] = useState(blankTraits);
  const [selectionList, makeSelection] = useState(defaultSelections);

  const updateHandler = (traits: TTraits) => {
    const newCharacter = { ...character, traits };
    dispatch(updateCharacter(newCharacter));
  };

  const traitSelectHandler = (trait: TTrait, selection: TSelection) => {
    const newSelectionList = selectionList
      .filter((item) => item.selection !== selection && item.trait !== trait)
      .concat({ trait, selection });
    const newTraits = { ...blankTraits };

    makeSelection(newSelectionList);

    newSelectionList.forEach((item) => {
      newTraits[item.trait] = item.selection.value;
    });

    setTraits(newTraits);
  };

  const { characterClass } = character;
  const charClass = getClass(characterClass!.id);
  const { suggestedTraits } = charClass;

  return (
    <div className="traits-panel">
      <h3>Choose your starting traits</h3>
      <SuggestedTraits suggestedTraits={suggestedTraits} updateHandler={updateHandler} />
      <BuilderTraits builderTraits={builderTraits} />
      <SelectTraits
        builderTraits={builderTraits}
        traitSelectHandler={traitSelectHandler}
        selectionList={selectionList}
        updateHandler={updateHandler}
      />
    </div>
  );
};

export default TraitsPanel;
