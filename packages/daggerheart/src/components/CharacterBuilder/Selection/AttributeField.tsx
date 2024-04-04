import clsx from 'clsx';
import { ICharacter } from '~/types';
import { useAppDispatch } from '~/hooks';
import { updateCharacter } from '~/ducks/characters';
import { IBuilderAttribute } from '../schema';
import { checkPrerequisites, checkPrereq } from '../utils';

import './style.scss';

export interface IAttributeFieldProps {
  character: ICharacter;
  attribute: IBuilderAttribute;
  setSelection: React.Dispatch<React.SetStateAction<IBuilderAttribute>>;
}

const AttributeField = ({ character, attribute, setSelection }: IAttributeFieldProps) => {
  const dispatch = useAppDispatch();

  const completed = checkPrereq(attribute.id, character);

  const prerequisitesMet = () => {
    const met = attribute.prerequesites ? checkPrerequisites(attribute.prerequesites, character) : true;
    return met;
  };

  const classes = clsx(
    // eslint-disable-next-line no-prototype-builtins
    attribute.hasOwnProperty('field') && attribute.field == 'selection'
      ? 'attribute-selection-btn'
      : 'attribute-selection-fieldset',
    completed && `completed`,
    attribute.className,
  );

  const selectionHandler = () => {
    setSelection(attribute);
  };

  const updateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newCharacter = { ...character };

    const property = attribute.id as keyof ICharacter;

    newCharacter[property] = value;

    dispatch(updateCharacter(newCharacter));
  };

  const prereqsMet = prerequisitesMet();

  return attribute.field == 'selection' ? (
    <button className={classes} onClick={selectionHandler} disabled={!prereqsMet}>
      {attribute.label}
    </button>
  ) : (
    <fieldset className={classes}>
      <label htmlFor={attribute.id}>{attribute.label}</label>
      <input
        id={attribute.id}
        name={attribute.id}
        type={attribute.field}
        value={character[attribute.id]}
        onChange={(event) => updateHandler(event)}
      ></input>
    </fieldset>
  );
};

export default AttributeField;
