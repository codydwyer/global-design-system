import { TTrait } from '.';

export interface IWeapon {
  tier: number;
  type: string;
  name: string;
  trait: TTrait;
  range: string;
  damage: string;
  burden: string;
  feature?: string;
}

export interface IArmor {
  tier: number;
  type: string;
  name: string;
  score: number;
  feature?: string;
}

export interface ILoot {
  roll: number;
  name: string;
  effect: string;
  type: string;
}
