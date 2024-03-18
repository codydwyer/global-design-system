import { ITabContextProps } from '/';
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

const schema: ITabContextProps = {
  id: 'character-creation',
};

export default schema;
