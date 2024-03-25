import ancestries from '~/data/ancestries';
import backgrounds from '~/data/backgrounds';
import { Card } from '@global-design-system/react-components';
import './style.scss';

const HeritagePanel = () => {
  return (
    <div className="panel heritage-panel">
      <h1>Pick your heritage</h1>
      <h2>Pick your ancestry</h2>
      <div className="card-container">
        {ancestries.map((match) => (
          <Card key={`ancestry-card-${match.name}`} className="class-card">
            <h2>{match.name}</h2>
          </Card>
        ))}
      </div>
      <h2>Pick your background</h2>
      <div className="card-container">
        {backgrounds.map((match) => (
          <Card key={`background-card-${match.name}`} className="class-card">
            <h2>{match.name}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HeritagePanel;
