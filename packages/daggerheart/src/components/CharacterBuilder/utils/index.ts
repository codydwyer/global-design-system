import { ICharacter } from '~/types';
import { blankTraits } from '~/types/trait';

export const checkPrereq = (attribute: string, character: ICharacter) => {
  // eslint-disable-next-line no-prototype-builtins
  const value = character.hasOwnProperty(attribute) && character[attribute as keyof ICharacter];
  const met = value != false && value != undefined && value != '' && value != blankTraits;
  return met;
};

export const checkPrerequisites = (prerequesites: string[], character: ICharacter) => {
  const checked = prerequesites.map((attribute) => checkPrereq(attribute, character));
  const met = checked.indexOf(false) == -1;
  return met;
};
