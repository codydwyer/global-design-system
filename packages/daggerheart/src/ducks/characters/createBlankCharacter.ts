import { ICharacter } from '~/types';

export const createBlankCharacter = (character: ICharacter) => {
  const retCharacter: ICharacter = {
    ...character,
    name: '',
    pronouns: '',
    description: {
      attitude: '',
      body: '',
      clothes: '',
      color: '',
      eyes: '',
    },
    traits: {
      agility: 0,
      strength: 0,
      finesse: 0,
      instinct: 0,
      presence: 0,
      knowledge: 0,
    },
    experiences: [
      {
        description: '',
      },
      {
        description: '',
      },
      {
        description: '',
      },
      {
        description: '',
      },
      {
        description: '',
      },
    ],
    backgroundResponses: ['', '', ''],
    connectionResponses: ['', '', ''],
  };

  return retCharacter;
};
