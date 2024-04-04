import clsx from 'clsx';
import { Card } from '@global-design-system/react-components';

import { useAppDispatch } from '~/hooks';
import { updateCharacter } from '~/ducks/characters';
import { ICharacter, IDomainCard } from '~/types';
import Effect from '../Effect';
import './style.scss';

export interface IDomainCardProps {
  className?: string;
  card: IDomainCard;
  character: ICharacter;
  selectable?: boolean;
}

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const DomainCard = ({ card, selectable, character, className }: IDomainCardProps) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line no-prototype-builtins
  const characterCards = character.hasOwnProperty('cards') ? character.cards! : [];
  const selected = characterCards!.find((characterCard) => characterCard.id === card.id);

  const { id, name, domainId, level, recallCost, type, effects } = card;

  const updateHandler = () => {
    const newCards = selected ? characterCards.filter((item) => item.id !== card.id) : characterCards.concat(card);
    const newCharacter = { ...character, cards: newCards };

    dispatch(updateCharacter(newCharacter));
  };

  const classes = clsx('domain-card', selected && 'selected', className);
  return (
    <Card className={classes}>
      <div className="title-bar">
        <h4>{name}</h4>
        {selectable && (
          <button className={'use-selected-traits-btn'} onClick={() => updateHandler()}>
            {selected ? 'Remove' : 'Select'} card
          </button>
        )}
      </div>
      <div className="domain-level">
        {capitalize(domainId)} {level}
      </div>
      <div className="recall">{recallCost}</div>
      <div className="type">{type}</div>
      {effects.map((effect, index) => (
        <Effect key={`${id}-effect-${index}`} effect={effect} />
      ))}
    </Card>
  );
};

export default DomainCard;
