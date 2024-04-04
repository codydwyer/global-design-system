import { IDomain, ISubclass, IFeature, TTraits } from '.';

export interface IThresholds {
  minor: number;
  major: number;
  severe: number;
}

export interface IClass {
  id: string;
  name: string;
  description: string;
  domainIds: string[];
  evasion: number;
  thresholds: IThresholds;
  items: string[];
  features: IFeature[];
  backgroundQuestions: string[];
  connectionQuestions: string[];
  suggestedTraits: TTraits;
}

export interface IBuiltClass extends IClass {
  domains: IDomain[];
  subclasses: ISubclass[];
}
