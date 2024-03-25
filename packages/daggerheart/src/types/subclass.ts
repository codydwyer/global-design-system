import { TTrait } from './trait';
import { IFeature } from './feature';

export type TSubclassFeature = string | IFeature;

export interface ISubclassFeatures {
  foundation: TSubclassFeature[];
  specialization: TSubclassFeature[];
  mastery: TSubclassFeature[];
}

export interface ISubclass {
  id: string;
  name: string;
  classId: string;
  description: string;
  spellcastingTrait?: TTrait;
  features: ISubclassFeatures;
}
