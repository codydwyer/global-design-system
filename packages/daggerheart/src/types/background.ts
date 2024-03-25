import { IFeature } from '.';

export interface IBackground {
  name: string;
  description: string;
  characteristics: string;
  features: IFeature[];
}
