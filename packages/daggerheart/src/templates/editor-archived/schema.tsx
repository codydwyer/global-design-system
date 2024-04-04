import { ITabsContextProps } from '@global-design-system/react-components';
import DetailPanel from '~/components/DetailPanel';
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
    content: (
      <DetailPanel>
        <ClassPanel />
      </DetailPanel>
    ),
  },
  {
    id: 'heritage',
    content: (
      <DetailPanel>
        <HeritagePanel />
      </DetailPanel>
    ),
  },
  {
    id: 'traits',
    content: (
      <DetailPanel>
        <TraitsPanel />
      </DetailPanel>
    ),
  },
  {
    id: 'gear',
    content: (
      <DetailPanel>
        <GearPanel />
      </DetailPanel>
    ),
  },
  {
    id: 'description',
    content: (
      <DetailPanel>
        <DescriptionsPanel />
      </DetailPanel>
    ),
  },
  {
    id: 'experience',
    content: (
      <DetailPanel>
        <ExperiencePanel />
      </DetailPanel>
    ),
  },
  {
    id: 'connections',
    content: (
      <DetailPanel>
        <ConnectionsPanel />
      </DetailPanel>
    ),
  },
];

const schema: ITabsContextProps = {
  id: 'character-creation',
  defaultActive: 'class',
  tabs,
  panels,
};

export default schema;
