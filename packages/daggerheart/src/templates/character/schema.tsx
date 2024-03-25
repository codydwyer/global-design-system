import { ITabsContextProps } from '@global-design-system/react-components';
import ClassPanel from './panels/Class';
import HeritagePanel from './panels/Heritage';
import TraitsPanel from './panels/Traits';
import GearPanel from './panels/Gear';
import DescriptionsPanel from './panels/Description';
import ExperiencePanel from './panels/Experience';
import ConnectionsPanel from './panels/Connections';

const tabs = [
  {
    id: 'class',
    label: 'Class',
  },
  {
    id: 'heritage',
    label: 'Heritage',
  },
  {
    id: 'traits',
    label: 'Traits',
  },
  {
    id: 'gear',
    label: 'Gear',
  },
  {
    id: 'description',
    label: 'Description',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'connections',
    label: 'Connections',
  },
];

const panels = [
  {
    id: 'class',
    content: <ClassPanel />,
  },
  {
    id: 'heritage',
    content: <HeritagePanel />,
  },
  {
    id: 'traits',
    content: <TraitsPanel />,
  },
  {
    id: 'gear',
    content: <GearPanel />,
  },
  {
    id: 'description',
    content: <DescriptionsPanel />,
  },
  {
    id: 'experience',
    content: <ExperiencePanel />,
  },
  {
    id: 'connections',
    content: <ConnectionsPanel />,
  },
];

const schema: ITabsContextProps = {
  id: 'character-creation',
  defaultActive: 'class',
  tabs,
  panels,
};

export default schema;
