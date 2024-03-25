import { getClasses } from '~/data/classes';
import { Card } from '@global-design-system/react-components';
import './style.scss';
const ClassPanel = () => {
  const classes = getClasses();

  return (
    <div className="panel class-panel">
      <h1>Pick your class</h1>
      <div className="card-container">
        {classes.map((match) => (
          <Card key={`class-card-${match.id}`} className="class-card">
            <h2>{match.name}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassPanel;
