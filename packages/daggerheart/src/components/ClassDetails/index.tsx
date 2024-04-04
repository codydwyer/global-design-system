import ReactHtmlParser from 'react-html-parser';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { updateCharacter, selectActiveCharacter } from '~/ducks/characters';
import { buildClass } from '~/data/classes';
import './style.scss';

export interface IClassDetailsProps {
  classId: string;
}

const ClassDetails = ({ classId }: IClassDetailsProps) => {
  const characterClass = buildClass(classId);
  const { id, name, description, evasion, thresholds, items, features, domains, subclasses } = characterClass;
  const dispatch = useAppDispatch();

  const updateHandler = () => {
    const newCharacter = { ...character, characterClass };
    dispatch(updateCharacter(newCharacter));
  };

  const character = useAppSelector(selectActiveCharacter);

  return (
    <div className="class-details-panel">
      <div className="title-bar">
        <h3>{name}</h3>
        <button className={'select-class'} onClick={() => updateHandler()}>
          Select {name}
        </button>
      </div>
      <p className="class-description">{description}</p>
      <div className="class-highlights">
        <div className="class-domains">
          <h4>Domains</h4>
          <br />
          {domains[0].name} & {domains[1].name}
        </div>
        <div className="class-evasion">
          <h4>
            Starting
            <br />
            Evasion Score
          </h4>
          {evasion}
        </div>
        <div className="class-thresholds">
          <h4>
            Damage
            <br />
            Thresholds
          </h4>
          Minor {thresholds.minor}, Major {thresholds.major},<br />
          Severe {thresholds.severe}
        </div>
      </div>
      <div className="class-items">
        <strong>Class Items:</strong> {items[0]} or {items[1]}
      </div>
      <h3>Features</h3>
      <div className="class-features">
        {features.map((feature, index) => (
          <div key={`${id}-feature-${index}`}>
            <h4>{feature.name}</h4>
            {ReactHtmlParser(feature.description)}
          </div>
        ))}
      </div>
      <hr />
      <div className="class-subclasses">
        <h3>Subclasses</h3>
        <p>As a {name.toLowerCase()}, choose between the following subclasses:</p>
        <div className="card-container">
          {subclasses.map((subclass, index) => (
            <div key={`${id}-subclass-${index}`} className="subclass-section">
              <h4>{subclass.name}</h4>
              <span className="spellcasting-trait">
                <strong>Spellcasting Trait:</strong> {subclass.spellcastingTrait}
              </span>
              <p>{subclass.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
