import { useContext } from 'react';
import { Card, Content } from '@global-design-system/react-components';
import DetailContext from '~/context/detail';
import { getClasses } from '~/data/classes';
import ClassDetails from '~/components/ClassDetails';
import './style.scss';

const ClassPanel = () => {
  const classes = getClasses();
  const { showDetail } = useContext(DetailContext);

  const selectClass = (classId: string) => {
    const node = <ClassDetails classId={classId} />;
    showDetail && showDetail(node);
  };

  return (
    <div className="panel class-panel">
      <h1>Pick your class</h1>
      <Content className="card-container">
        {classes.map((match) => (
          <Card key={`class-card-${match.id}`} className="class-card" onClick={() => selectClass(match.id)}>
            <h3>{match.name}</h3>
          </Card>
        ))}
      </Content>
    </div>
  );
};

export default ClassPanel;
