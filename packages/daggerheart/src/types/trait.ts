export type TTrait = 'Agility' | 'Strength' | 'Finesse' | 'Instinct' | 'Presence' | 'Knowledge';

export interface TTraits {
  agility: number;
  strength: number;
  finesse: number;
  instinct: number;
  presence: number;
  knowledge: number;
}

export const blankTraits: TTraits = {
  agility: 0,
  strength: 0,
  finesse: 0,
  instinct: 0,
  presence: 0,
  knowledge: 0,
};
