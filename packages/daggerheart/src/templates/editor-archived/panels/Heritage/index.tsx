import ancestries from '~/data/ancestries';
import communities from '~/data/communities';
import { Accordion, Content } from '@global-design-system/react-components';
import './style.scss';

const HeritagePanel = () => {
  return (
    <div className="panel heritage-panel">
      <Content>
        <h1>Pick your heritage</h1>
        <div className="heritage-container">
          <div className="accordion-container">
            {' '}
            <h2>Pick your ancestry</h2>
            {ancestries.map((match) => (
              <Accordion title={match.name} className="heritage-accordion" key={`community-accordion-${match.name}`}>
                <p>{match.description}</p>
                {match.features.map((feature, index) => {
                  return (
                    <div key={`${match.name}-feature-${index}`}>
                      <h4>{feature.name}</h4>
                      <p>{feature.description}</p>
                    </div>
                  );
                })}
              </Accordion>
            ))}
          </div>
          <div className="accordion-container">
            <h2>Pick your community</h2>
            {communities.map((match) => (
              <Accordion title={match.name} className="heritage-accordion" key={`community-accordion-${match.name}`}>
                <p>{match.description}</p>
                <p>{match.characteristics}</p>

                <h4>{match.features[0].name}</h4>
                <p>{match.features[0].description}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </Content>
    </div>
  );
};

export default HeritagePanel;
