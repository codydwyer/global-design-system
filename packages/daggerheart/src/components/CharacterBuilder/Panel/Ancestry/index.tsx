import clsx from 'clsx';
import { Card } from '@global-design-system/react-components';
import ancestries from '~/data/ancestries';
import { useAppDispatch } from '~/hooks';
import { updateCharacter } from '~/ducks/characters';
import { IAncestry } from '~/types';
import { IPanelProps } from '../';
import './style.scss';

export interface IAncestryPanelProps extends IPanelProps {}

const AncestryPanel = ({ character }: IAncestryPanelProps) => {
  const dispatch = useAppDispatch();

  const updateHandler = (ancestry: IAncestry) => {
    const newCharacter = { ...character, ancestry };
    dispatch(updateCharacter(newCharacter));
  };

  const { ancestry } = character;

  return (
    <div className="ancestry-panel">
      <h3>Pick your ancestry</h3>
      <div className="card-container">
        {ancestries.map((match) => {
          const classes = clsx('heritage-card', match === ancestry && 'active');

          return (
            <Card className={classes} key={`community-${match.name}`}>
              <div className="title-bar">
                <h4>{match.name}</h4>
                <button className={'select-ancestry'} onClick={() => updateHandler(match)}>
                  Select {match.name}
                </button>
              </div>
              <p>{match.description}</p>
              {match.features.map((feature, index) => {
                return (
                  <div key={`${match.name}-feature-${index}`}>
                    <h4>{feature.name}</h4>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AncestryPanel;
