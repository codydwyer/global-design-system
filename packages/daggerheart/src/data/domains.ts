import { IDomain } from '../types';
import { ensure } from './utils';

export const domains: IDomain[] = [
  {
    id: 'arcana',
    name: 'Arcana',
    description: `This is the domain of the innate or instinctual use of magic. Those who walk this path tap into the raw, enigmatic forces of the realms to manipulate both the elements and their own energy. Arcana offers wielders a volatile power, but it is incredibly potent when correctly channeled.`,
  },
  {
    id: 'blade',
    name: 'Blade',
    description: `This is the domain of those who dedicate their lives to the mastery of weapons. Whether by blade, bow, or perhaps a more specialized arm, those who follow this path have the skill to cut short the lives of others. Blade requires study and dedication from its followers, in exchange for inexorable power over death.`,
  },
  {
    id: 'bone',
    name: 'Bone',
    description: `This is the domain of mastery of swiftness and tactical mastery. Practitioners of this domain have an uncanny control over their own physical abilities, and an eye for predicting the behaviors of others in combat. Bone grants its adherents unparalleled understanding of bodies and their movements in exchange for diligent training.`,
  },
  {
    id: 'codex',
    name: 'Codex',
    description: `This is the domain of intensive magical study. Those who seek magical knowledge turn to the recipes of power recorded in books, on scrolls, etched into walls, or tattooed on bodies. Codex offers a commanding and versatile understanding of magic to those devotees who are willing to seek beyond the common knowledge.`,
  },
  {
    id: 'grace',
    name: 'Grace',
    description: `This is the domain of charisma. Through rapturous storytelling, clever charm, or a shroud of lies, those who channel this power define the realities of their adversaries, bending perception to their will. Grace offers its wielders raw magnetism and mastery over language.`,
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: `This is the domain of shadows and secrecy. Whether by clever tricks, or cloak of night those who channel these forces are practiced in that art of obscurity and there is nothing hidden they cannot reach. Midnight offers practitioners the incredible power to control and create enigmas.`,
  },
  {
    id: 'sage',
    name: 'Sage',
    description: `This is the domain of the natural world. Those who walk this path tap into the unfettered power of the earth and its creatures to unleash raw magic. Sage grants its adherents the vitality of a blooming flower and ferocity of a hungry predator.`,
  },
  {
    id: 'splendor',
    name: 'Splendor',
    description: `This is the domain of life. Through this magic, followers gain the ability to heal, though such power also grants the wielder some control over death. Splendor offers its disciples the magnificent ability to both give and end life.`,
  },
  {
    id: 'valor',
    name: 'Valor',
    description: `This is the domain of protection. Whether through attack or defense, those who choose this discipline channel formidable strength to protect their allies in battle. Valor offers great power to those who raise their shield in defense of others.`,
  },
];

export const getDomains = (domainIds: string[]) => {
  return domainIds.map((domainId) => {
    return ensure(domains.find((domain) => domain.id === domainId));
  });
};

export default domains;
