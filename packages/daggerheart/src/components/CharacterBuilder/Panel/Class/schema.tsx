import { ITabsContextProps } from '@global-design-system/react-components';
import ClassDetails from '~/components/ClassDetails';
import classes from '~/data/classes';

const tabs = classes.map((characterClass) => {
  const retObj = {
    id: characterClass.id,
    label: characterClass.name,
  };
  return retObj;
});

const panels = classes.map((characterClass) => {
  const { id } = characterClass;

  const panel = {
    id,
    content: <ClassDetails key={`class-panel-${id}`} classId={id} />,
  };

  return panel;
});

const schema: ITabsContextProps = {
  id: 'character-creation',
  defaultActive: 'bard',
  tabs,
  panels,
};

export default schema;
