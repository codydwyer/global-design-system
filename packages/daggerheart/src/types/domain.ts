import { IFeature } from './feature';

export type TEffect = string | IFeature;

export interface IDomain {
  id: string;
  name: string;
  description: string;
}

export interface IDomainCard {
  id: string;
  name: string;
  domainId: string;
  domain?: IDomain;
  level: number;
  recallCost: number;
  type: string;
  effects: TEffect[];
  active?: boolean;
}
