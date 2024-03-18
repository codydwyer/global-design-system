import { IClass } from '../types';

const classes: IClass[] = [
  {
    id: 'bard',
    name: 'Bard',
    subclasses: [1, 2],
    domains: [4, 5],
  },
  {
    id: 'druid',
    name: 'Druid',
    subclasses: [3, 4],
    domains: [1, 7],
  },
  {
    id: 'guardian',
    name: 'Guardian',
    subclasses: [5, 6],
    domains: [2, 9],
  },
  {
    id: 'ranger',
    name: 'Ranger',
    subclasses: [7, 8],
    domains: [3, 7],
  },
  {
    id: 'rogue',
    name: 'Rogue',
    subclasses: [9, 10],
    domains: [5, 6],
  },
  {
    id: 'seraph',
    name: 'Seraph',
    subclasses: [11, 12],
    domains: [8, 9],
  },
  {
    id: 'sorceror',
    name: 'Sorceror',
    subclasses: [13, 14],
    domains: [1, 2],
  },
  {
    id: 'warrior',
    name: 'Warrior',
    subclasses: [15, 16],
    domains: [2, 3],
  },
  {
    id: 'wizard',
    name: 'Wizard',
    subclasses: [17, 18],
    domains: [4, 8],
  },
];

export default classes;
