import { IFeature } from '.';

export interface ICommunity {
  id: string;
  name: string;
  description: string;
  characteristics: string;
  features: IFeature[];
}
