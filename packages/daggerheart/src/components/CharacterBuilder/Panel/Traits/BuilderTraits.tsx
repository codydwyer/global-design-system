import { TTraits } from '~/types';
import './style.scss';

export interface IBuilderTraitsProps {
  builderTraits: TTraits;
}

const BuilderTraits = ({ builderTraits }: IBuilderTraitsProps) => {
  return (
    <>
      <h4>Choose starting traits</h4>
      <div className="selected-traits">
        <div className="trait agility">
          <span className="label">Agility</span>
          <span className="value">
            {builderTraits.agility > 0 && '+'}
            {builderTraits.agility}
          </span>
        </div>
        <div className="trait strength">
          <span className="label">Strength</span>
          <span className="value">
            {builderTraits.strength > 0 && '+'}
            {builderTraits.strength}
          </span>
        </div>
        <div className="trait finesse">
          <span className="label">Finesse</span>
          <span className="value">
            {builderTraits.finesse > 0 && '+'}
            {builderTraits.finesse}
          </span>
        </div>
        <div className="trait instinct">
          <span className="label">Instinct</span>
          <span className="value">
            {builderTraits.instinct > 0 && '+'}
            {builderTraits.instinct}
          </span>
        </div>
        <div className="trait presence">
          <span className="label">Presence</span>
          <span className="value">
            {builderTraits.presence > 0 && '+'}
            {builderTraits.presence}
          </span>
        </div>
        <div className="trait knowledge">
          <span className="label">Knowledge</span>
          <span className="value">
            {builderTraits.knowledge > 0 && '+'}
            {builderTraits.knowledge}
          </span>
        </div>
      </div>
    </>
  );
};

export default BuilderTraits;
