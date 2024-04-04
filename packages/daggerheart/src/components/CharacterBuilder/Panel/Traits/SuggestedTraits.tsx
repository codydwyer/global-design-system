import { TTraits } from '~/types';
import './style.scss';

export interface ISuggestedTraitsProps {
  suggestedTraits: TTraits;
  updateHandler: (traits: TTraits) => void;
}

const SuggestedTraits = ({ suggestedTraits, updateHandler }: ISuggestedTraitsProps) => {
  return (
    <>
      <h4>Suggested starting traits</h4>
      <div className="recommended-traits">
        <div className="trait agility">
          <span className="label">Agility</span>
          <span className="value">
            {suggestedTraits.agility > 0 && '+'}
            {suggestedTraits.agility}
          </span>
        </div>
        <div className="trait strength">
          <span className="label">Strength</span>
          <span className="value">
            {suggestedTraits.strength > 0 && '+'}
            {suggestedTraits.strength}
          </span>
        </div>
        <div className="trait finesse">
          <span className="label">Finesse</span>
          <span className="value">
            {suggestedTraits.finesse > 0 && '+'}
            {suggestedTraits.finesse}
          </span>
        </div>
        <div className="trait instinct">
          <span className="label">Instinct</span>
          <span className="value">
            {suggestedTraits.instinct > 0 && '+'}
            {suggestedTraits.instinct}
          </span>
        </div>
        <div className="trait presence">
          <span className="label">Presence</span>
          <span className="value">
            {suggestedTraits.presence > 0 && '+'}
            {suggestedTraits.presence}
          </span>
        </div>
        <div className="trait knowledge">
          <span className="label">Knowledge</span>
          <span className="value">
            {suggestedTraits.knowledge > 0 && '+'}
            {suggestedTraits.knowledge}
          </span>
        </div>
      </div>
      <button className={'use-selected-traits-btn'} onClick={() => updateHandler(suggestedTraits)}>
        Use suggested traits
      </button>
    </>
  );
};

export default SuggestedTraits;
