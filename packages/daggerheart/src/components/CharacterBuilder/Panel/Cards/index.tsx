import { getDomainCardsByLevel } from '~/data/domain-cards';
import DomainCard from '~/components/DomainCard';
import { IPanelProps } from '../';
import './style.scss';

export interface ICardsPanelProps extends IPanelProps {}

const CardsPanel = ({ character }: ICardsPanelProps) => {
  const { characterClass } = character;

  const { domainIds } = characterClass!;
  const domainCards = getDomainCardsByLevel(domainIds, 1);

  return (
    <div className="cards-panel">
      <h3>Choose your domain cards</h3>
      <div className="domain-cards-container">
        {domainCards.map((card) => (
          <DomainCard key={card.id} card={card} character={character} selectable />
        ))}
      </div>
    </div>
  );
};

export default CardsPanel;
