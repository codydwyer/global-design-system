import { IFeature } from './feature';
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
}
