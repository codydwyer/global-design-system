import clsx from 'clsx';
import { ICharacter } from '~/types';
import { IBuilderAttribute } from '../schema';
import Panel from '../Panel';
import TraitsSection from './Traits';
import './style.scss';

export interface ICharacterDetailsProps {
  character: ICharacter;
  currentSelection: IBuilderAttribute;
  setSelection: React.Dispatch<React.SetStateAction<IBuilderAttribute>>;
}

const CharacterDetails = ({ character, currentSelection, setSelection }: ICharacterDetailsProps) => {
  const classes = clsx('details-panel', currentSelection.id === 'characterClass' && 'class-details-panel');

  return (
    <div className={classes}>
      <TraitsSection character={character} />
      <Panel character={character} currentSelection={currentSelection} setSelection={setSelection} />
    </div>
  );
};

export default CharacterDetails;
