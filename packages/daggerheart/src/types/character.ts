import { IAncestry, IBuiltClass, ICommunity, IDomainCard, IExperience, ISubclass } from '.';
import { TTraits } from './trait';

export interface IDescription {
  attitude?: string;
  body?: string;
  clothes?: string;
  color?: string;
  eyes?: string;
}
export interface ICharacter {
  id: string;
  name?: string;
  pronouns?: string;
  characterClass?: IBuiltClass;
  level?: number;
  subclass?: ISubclass;
  ancestry?: IAncestry;
  community?: ICommunity;
  traits?: TTraits;
  experiences?: IExperience[];
  cards?: IDomainCard[];
  inventory?: string[];
  description?: IDescription;
  backgroundResponses?: string[];
  connectionResponses?: string[];
}
