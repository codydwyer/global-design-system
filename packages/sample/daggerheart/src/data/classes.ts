import { IClass } from "../types";

const classes: IClass[] = [
  {
    id: 1,
    name: 'Bard',
    subclasses: [1, 2],
    domains: [4, 5],
  },{
    id: 2,
    name: 'Druid',
    subclasses: [3, 4],
    domains: [1, 7],
  },{
    id: 3,
    name: 'Guardian',
    subclasses: [5, 6],
    domains: [2, 9],
  },{
    id: 4,
    name: 'Ranger',
    subclasses: [7, 8],
    domains: [3, 7],
  },{
    id: 5,
    name: 'Rogue',
    subclasses: [9, 10],
    domains: [5, 6],
  },{
    id: 6,
    name: 'Seraph',
    subclasses: [11, 12],
    domains: [8, 9],
  },{
    id: 7,
    name: 'Sorceror',
    subclasses: [13, 14],
    domains: [1, 2],
  },{
    id: 8,
    name: 'Warrior',
    subclasses: [15, 16],
    domains: [2, 3],
  },{
    id: 9,
    name: 'Wizard',
    subclasses: [17, 18],
    domains: [4, 8],
  },
]

export default classes;