import { TTrait } from '~/types';

export interface ITrait {
  name: TTrait;
  skills: string[];
}

const traits: ITrait[] = [
  {
    name: 'Agility',
    skills: ['sprint', 'leap', 'maneuver'],
  },
  {
    name: 'Strength',
    skills: ['lift', 'smash', 'grapple'],
  },
  {
    name: 'Finesse',
    skills: ['control', 'hide', 'tinker'],
  },
  {
    name: 'Instinct',
    skills: ['perceive', 'sense', 'navigate'],
  },
  {
    name: 'Presence',
    skills: ['charm', 'perform', 'deceive'],
  },
  {
    name: 'Knowledge',
    skills: ['recall', 'analyze', 'comprehend'],
  },
];

export default traits;
