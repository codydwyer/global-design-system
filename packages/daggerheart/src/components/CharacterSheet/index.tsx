import DomainCard from '~/components/DomainCard';
import { ICharacter } from '~/types';
import './style.scss';
import { Link } from 'react-router-dom';

export interface ICharacterSheetProps {
  character: ICharacter;
}

const CharacterSheet = ({ character }: ICharacterSheetProps) => {
  const {
    id,
    name,
    pronouns,
    characterClass,
    level,
    subclass,
    ancestry,
    community,
    traits,
    experiences,
    cards,
    inventory,
    description,
    backgroundResponses,
    connectionResponses,
  } = character;

  return (
    <div className="character-sheet">
      <Link to={`/builder/${id}`} className="edit">
        edit
      </Link>
      <div className="details">
        <div className="name">Name: {name}</div>
        <div className="class">{characterClass?.name}</div>
        <div className="subclass">{subclass?.name}</div>
        <div className="level">{level}</div>
        <div className="ancestry">{ancestry?.name}</div>
        <div className="community">{community?.name}</div>
      </div>
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
      <div className="description">
        <div className="pronouns">Pronouns: {pronouns}</div>
        <div className="eyes">Eyes like {description?.eyes}</div>
        <div className="body">Body that's {description?.body}</div>
        <div className="clothes">Clothes that are{description?.clothes}</div>
        <div className="color">The color of {description?.color}</div>
        <div className="attitude">Attitude like {description?.attitude}</div>
      </div>
      <div className="experiences">
        {experiences?.map((experience, index) => {
          return (
            <div key={`experience-${index}`} className="experience">
              <div className="description">{experience.description}</div>
              <div className="number">{experience.level}</div>
            </div>
          );
        })}
      </div>
      <div className="inventroy">
        {inventory?.map((item, index) => {
          return (
            <div key={`item-${index}`} className="item">
              {item}
            </div>
          );
        })}
      </div>
      <div className="domain-cards">
        {cards?.map((card) => {
          return <DomainCard key={card.id} card={card} character={character} />;
        })}
      </div>
      <div className="questions">
        <div className="background">
          {characterClass?.backgroundQuestions.map((question, index) => {
            return (
              <div key={`background-question-${index}`}>
                <div className="question">{question}</div>
                <div className="response">{backgroundResponses![index]}</div>
              </div>
            );
          })}
        </div>
        <div className="connection">
          {characterClass?.connectionQuestions.map((question, index) => {
            return (
              <div key={`connection-question-${index}`}>
                <div className="question">{question}</div>
                <div className="response">{connectionResponses![index]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
