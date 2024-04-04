import clsx from 'clsx';
import { Card } from '@global-design-system/react-components';
import communities from '~/data/communities';
import { useAppDispatch } from '~/hooks';
import { updateCharacter } from '~/ducks/characters';
import { ICommunity } from '~/types';
import { IPanelProps } from '../';
import './style.scss';

export interface ICommunityPanelProps extends IPanelProps {}

const CommunityPanel = ({ character }: ICommunityPanelProps) => {
  const dispatch = useAppDispatch();

  const updateHandler = (community: ICommunity) => {
    const newCharacter = { ...character, community };
    dispatch(updateCharacter(newCharacter));
  };

  const { community } = character;

  return (
    <div className="community-panel">
      <h3>Choose your community</h3>
      <div className="card-container">
        {communities.map((match) => {
          const classes = clsx('heritage-card', match === community && 'active');

          return (
            <Card className={classes} key={`community-${match.name}`}>
              <div className="title-bar">
                <h4>{match.name}</h4>
                <button className={'select-community'} onClick={() => updateHandler(match)}>
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

export default CommunityPanel;
