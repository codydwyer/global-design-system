import { IFeature } from './feature';

export type TEffect = string | IFeature;

export interface IDomain {
  id: string;
  name: string;
  description: string;
}

export interface IDomainCard {
  name: string;
  domainId: string;
  level: number;
  recallCost: number;
  type: string;
  effect: TEffect | TEffect[];
}
