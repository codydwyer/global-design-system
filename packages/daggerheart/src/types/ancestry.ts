import { IFeature } from '.';

export interface IAncestry {
  id: string;
  name: string;
  description: string;
  features: IFeature[];
}
