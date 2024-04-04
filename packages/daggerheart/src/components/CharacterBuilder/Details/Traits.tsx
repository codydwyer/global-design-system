import { ICharacter } from '~/types';
import './style.scss';

export interface ITraitsSectionProps {
  character: ICharacter;
}

const TraitsSection = ({ character }: ITraitsSectionProps) => {
  const { traits } = character;

  return (
    <div className="traits">
      <div className="trait agility">
        <div className="title">Agility</div>
        <div className="modifier">{traits?.agility}</div>
      </div>
      <div className="trait strength">
        <div className="title">Strength</div>
        <div className="modifier">{traits?.strength}</div>
      </div>
      <div className="trait finesse">
        <div className="title">Finesse</div>
        <div className="modifier">{traits?.finesse}</div>
      </div>
      <div className="trait instinct">
        <div className="title">Instinct</div>
        <div className="modifier">{traits?.instinct}</div>
      </div>
      <div className="trait presence">
        <div className="title">Presence</div>
        <div className="modifier">{traits?.presence}</div>
      </div>
      <div className="trait knowledge">
        <div className="title">Knowledge</div>
        <div className="modifier">{traits?.knowledge}</div>
      </div>
    </div>
  );
};

export default TraitsSection;
