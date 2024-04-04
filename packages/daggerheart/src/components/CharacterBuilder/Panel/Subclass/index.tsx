import ReactHtmlParser from 'react-html-parser';
import { Accordion } from '@global-design-system/react-components/dist/main';
import { useAppDispatch } from '~/hooks';
import { ISubclass } from '~/types';
import { updateCharacter } from '~/ducks/characters';
import { IPanelProps } from '../';
import './style.scss';

export interface ISubclassPanelProps extends IPanelProps {}

const SubclassPanel = ({ character }: ISubclassPanelProps) => {
  const { characterClass } = character;

  const { id, name, subclasses } = characterClass!;
  const dispatch = useAppDispatch();

  const updateHandler = (subclass: ISubclass) => {
    const newCharacter = { ...character, subclass };
    dispatch(updateCharacter(newCharacter));
  };

  return (
    <div className="subclass-panel">
      <h3>Pick your subclass</h3>
      <p>As a {name.toLowerCase()}, choose between the following subclasses:</p>
      {subclasses.map((subclass, index) => (
        <div key={`${id}-subclass-${index}`}>
          <Accordion title={subclass.name}>
            <div className="title-bar">
              {subclass.spellcastingTrait && (
                <span className="spellcasting-trait">
                  <strong>Spellcasting Trait:</strong> {subclass.spellcastingTrait}
                </span>
              )}
              <button className={'select-subclass'} onClick={() => updateHandler(subclass)}>
                Select
              </button>
            </div>
            <p>{subclass.description}</p>
            <h4>Features</h4>
            <h4>Foundation</h4>
            {subclass.features.foundation.map((feature, index) => {
              return (
                <div key={`${subclass.id}-features-foundation-${index}`}>
                  {typeof feature === 'string' ? (
                    ReactHtmlParser(feature)
                  ) : (
                    <>
                      <h4>{feature.name}</h4>
                      {ReactHtmlParser(feature.description)}
                    </>
                  )}
                </div>
              );
            })}
            <h4>Specialization</h4>
            {subclass.features.specialization.map((feature, index) => {
              return (
                <div key={`${subclass.id}-features-specialization-${index}`}>
                  {typeof feature === 'string' ? (
                    ReactHtmlParser(feature)
                  ) : (
                    <>
                      <h4>{feature.name}</h4>
                      {ReactHtmlParser(feature.description)}
                    </>
                  )}
                </div>
              );
            })}
            <h4>Mastery</h4>
            {subclass.features.mastery.map((feature, index) => {
              return (
                <div key={`${subclass.id}-features-mastery-${index}`}>
                  {typeof feature === 'string' ? (
                    ReactHtmlParser(feature)
                  ) : (
                    <>
                      <h4>{feature.name}</h4>
                      {ReactHtmlParser(feature.description)}
                    </>
                  )}
                </div>
              );
            })}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default SubclassPanel;
