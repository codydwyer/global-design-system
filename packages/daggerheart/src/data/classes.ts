import { IClass, IDomain, ISubclass } from '../types';
import { ensure } from './utils';
import { getDomains } from './domains';
import { getSubclasses } from './subclasses';

export interface IBuiltClass extends IClass {
  domains: IDomain[];
  subclasses: ISubclass[];
}

const classes: IClass[] = [
  {
    id: 'bard',
    name: 'Bard',
    description: `Those who become bards are truly the most charismatic members of all the realms. Members of this class are masters of captivation and may specialize in any of a variety of performance types, including: singing, playing musical instruments, weaving tales, or telling jokes. Whether performing to an audience or speaking to an individual, bards will excel. There are many schools and guilds where members of this profession come together to bond and train, but there is a fair amount of ego within those of the bardic persuasion. While they may be the most likely to bring people together, a bard of ill temper can just as easily tear a party apart.`,
    domainIds: ['grace', 'codex'],
    evasion: 7,
    thresholds: {
      minor: 3,
      major: 8,
      severe: 13,
    },
    items: ['Romance Novel', 'Letter Never Opened'],
    features: [
      {
        name: 'Rally',
        description: `<p>At the beginning of a session, place a d6 on your character sheet with the lowest number (1) facing up. When anyone in your party rolls with Fear, turn the Rally die to increase its value by one. When you would increase the value above 6, remove the die, describe how you rally the party, and give every character who listens a 1d6 Rally die. They can spend this die to roll it and add the result to any action roll, reaction roll, or damage roll.</p>
          <p>If your Rally die hasn’t finished this countdown by the end of a session, distribute the current value shown on the die as Hope amongst your party, splitting it any way you choose, and remove the die.</p>
          <p>The Rally die you distribute increases to 1d8 at Level 5.</p>`,
      },
    ],
  },
  {
    id: 'druid',
    name: 'Druid',
    description: `Becoming a druid is more than an occupation, it’s a calling to those who wish to learn from and protect the magic of the wilderness. Those druids who practice the often quiet work of channeling flora are likely to be underestimated; while those who channel the brutal forces of animals may be a terrifying thing to behold. Druids are known to cultivate their abilities in small groups, often connected by a specific ethos or locale. Through years of study and dedication, druids can learn to transform into beasts and shape the earth and all its organisms.`,
    domainIds: ['sage', 'arcana'],
    evasion: 8,
    thresholds: {
      minor: 4,
      major: 9,
      severe: 14,
    },
    items: ['Small Bag of Rocks & Bones', 'Strange Pendant Found in the Dirt'],
    features: [
      {
        name: 'Wildtouch',
        description: `<p>You can perform harmless, subtle effects that involve nature at will. (Ex: causing a flower to rapidly grow, summon a slight gust of wind, start a campfire, etc)</p>`,
      },
      {
        name: 'Beastform',
        description: `<p>Also take the Beastform sheet (available on page here). Mark a Stress to transform into a magical creature equal to your level or lower from the available options. You lose the use of your abilities, weapons, armor, and domain cards but gain the features and trait bonus of the creature. You can drop out of this form at any time.</p>`,
      },
    ],
  },
  {
    id: 'guardian',
    name: 'Guardian',
    description: `Guardians represent an array of martial professions, and such a title speaks more to their moral compass and incredible fortitude than the means by which they fight. Those of this class may choose to join groups of militants, for either a country or cause, but guardians are more likely to follow those few they truly care for, majority be damned. Guardians are known for fighting with remarkable ferocity even against overwhelming odds, and are more likely to utilize defensive tactics that protect their cohort than charge forward with abandon. Woe be unto those who harm the ally of a guardian, as they will not soon forget such a grievance.`,
    domainIds: ['valor', 'blade'],
    evasion: 6,
    thresholds: {
      minor: 6,
      major: 11,
      severe: 16,
    },
    items: ['Stone Totem from Your Mentor', 'Secret Key'],
    features: [
      {
        name: 'Unstoppable',
        description: `<p>Once per Long Rest, you can become Unstoppable. Your Unstoppable die begins as a d4. Place it on your character sheet in the designated section of your Class Features, starting with the die’s highest value facing up. While Unstoppable, you:</p>
          <ul>
            <li>Gain resistance to physical damage.</li>
            <li>Add an additional d6 to any damage rolls you make.</li>
            <li>Can spend stress to reroll any single die you’ve rolled.</li>
          </ul>
          <p>Anytime you roll your damage dice, reduce the Unstoppable die value by one. When you would reduce the value below 1 or the scene ends, remove it and drop out of Unstoppable.</p>
          <p>At Level 3, upgrade your Unstoppable die to a d6.</p>
          <p>At Level 7, upgrade it to a d8.</p>`,
      },
    ],
  },
  {
    id: 'ranger',
    name: 'Ranger',
    description: `Rangers are highly skilled hunters who, despite their martial abilities, will rarely lend their skills to an army. Through mastery of the body and a deep understanding of the wilderness, rangers transform themselves into sly tacticians, accustomed to fighting without the aid of an organized military force. Many rangers do, however, fight alongside an animal companion, with whom they’ve forged a powerful, spiritual bond. By honing their skills in the wild, rangers become expert hunters and trackers, and are as likely to catch their foes in a trap as assail them head-on.`,
    domainIds: ['bone', 'sage'],
    evasion: 10,
    thresholds: {
      minor: 4,
      major: 9,
      severe: 14,
    },
    items: ['Trophy From Your First Kill', 'Seemingly Broken Compass'],
    features: [
      {
        name: `Ranger’s Focus`,
        description: `<p>Spend Hope and make an attack with your weapon. On a success, you temporarily have Focus on the target along with doing damage from the attack.</p>
          <p>While focused:</p>
          <ul>
            <li>You know precisely what direction they are in.</li>
            <li>All damage rolls you make against them add +1d6.</li>
            <li>On a missed attack you make against them, you may end Ranger’s Focus to reroll your Duality Dice and take the new result.</li>
          </ul>
          <p>You may only hold Ranger’s Focus on one creature at a time.</p>`,
      },
    ],
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description: `Rogues are scoundrels, often in both attitude and practice. Broadly known as liars and thieves, the best among this class move through the world entirely unknown. Utilizing their sharp wit and blade, rogues may trick their foes through social manipulation as easily as breaking locks or climbing through windows. Rogues frequently establish guilds to meet future accomplices, hire out jobs, and hone heavily-guarded skills, proving that the phrase “there’s no honor among thieves” is just another lie added to their arsenal.`,
    domainIds: ['midnight', 'grace'],
    evasion: 12,
    thresholds: {
      minor: 4,
      major: 9,
      severe: 14,
    },
    items: ['Forgery Tools', 'Grappling Hook'],
    features: [
      {
        name: 'Hide',
        description: `<p>When you move into a location where no enemies can see you, you are Hidden (you are unable to be directly targeted by attacks and any rolls against you at disadvantage). As a Rogue, when you are Hidden, targets also can’t see you, even if they move into line of sight. You are no longer Hidden after you move or attack. When you leave Hidden to make an attack, the roll has advantage.</p>`,
      },
      {
        name: 'Sneak Attack',
        description: `<p>If you have advantage on an attack roll, or an ally is in melee with your target, always add a d8 to your damage roll. When you use Sneak Attack, you may also spend any number of Hope before the attack roll, and if it is successful, also add a number of d8 equal to the Hope spent.</p>`,
      },
    ],
  },
  {
    id: 'seraph',
    name: 'Seraph',
    description: `Divine fighters and healers appointed by their god, seraphs are imbued with sacred purpose. A wide array of deities exist within the realms, and thus there are numerous different types of seraph. The ethos of each member of this class traditionally aligns with the domain of their god including such missions as: defending the weak, enacting vengeance, protecting a land or artifact, and upholding a faith. Some seraph ally themselves with an army or locale, much to the satisfaction of their rulers, but some of these crusaders fight in opposition to the follies of the Mortal Realm. It is better to be an ally to a seraph, as they are terrifying foes to those who defy their purpose.`,
    domainIds: ['splendor', 'valor'],
    evasion: 7,
    thresholds: {
      minor: 5,
      major: 10,
      severe: 15,
    },
    items: ['Bundle of Offerings', 'Sigil of Your God'],
    features: [
      {
        name: 'Prayer Dice',
        description: `<p>At the beginning of a session, roll a number of d4 dice equal to your Spellcast trait and store them to the right. You can exhaust them at any time to use their value in reducing incoming damage, adding to a roll result, or exchanging for that many Hope you may give to any player. Clear these dice at the end of a session.</p>`,
      },
    ],
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: `Not all innate magic users choose to hone their craft, but those who do can become powerful sorcerers. The gifts of these wielders is passed down through families, though not all families are aware of, much less choose to practice, their unique skills. A sorcerer’s abilities can range from the elemental, to the illusionary, and beyond, and many members of this class will band together into collectives based on their talents. The act of becoming a formidable sorcerer is not the practice of acquiring power, but learning to control and hone the power one already possesses. The magic within a misguided or uneducated sorcerer is a dangerous force indeed.`,
    domainIds: ['arcana', 'midnight'],
    evasion: 9,
    thresholds: {
      minor: 3,
      major: 8,
      severe: 13,
    },
    items: ['Whispering Orb', 'Family Heirloom'],
    features: [
      {
        name: 'Arcane Sense',
        description: `<p>You can sense the presence of magical people and objects when you’re close to them.</p>`,
      },
      {
        name: 'Minor Illusion',
        description: `<p>Make a Spellcast Roll (10). On a success, you create a minor visual illusion no larger than yourself within close range that is convincing to anyone in far range or further.</p>`,
      },
      {
        name: 'Channel Raw Power',
        description: `<p>Once per Long Rest, you can place a Domain card from your Loadout into your Vault and choose to either:</p>
        <ul><li>Gain Hope equal to the level of the card.</li>
        <li>Add magic damage equal to twice the level of the card to a spell you’ve successfully cast.</li></ul>`,
      },
    ],
  },
  {
    id: 'warrior',
    name: 'Warrior',
    description: `Becoming a warrior requires years, often a lifetime, of training and dedication to the mastery of violence and weapons. While many who seek to fight only hone their strength, warriors understand the importance of an agile body and mind, making them some of the most sought after fighters across the realms. Many warriors will find employment within an army, band of mercenaries, or even within a royal guard, but their potential is wasted in any position where they cannot continue to hone and expand their skills. Warriors are known to have a favored weapon, and to come between one of this class and their blade would be a grievous mistake.`,
    domainIds: ['blade', 'bone'],
    evasion: 10,
    thresholds: {
      minor: 5,
      major: 10,
      severe: 15,
    },
    items: ['Drawing of a Lover', 'Sharpening Stone'],
    features: [
      {
        name: 'Battle Strategist',
        description: `<p>Whenever you are making a roll to physically hinder a creature that isn’t a weapon attack (shove, trip, grapple, etc) you can spend a Hope to have advantage. On a success, you can choose to deal 1d8 physical damage to the target.</p>`,
      },
      {
        name: 'Combat Training',
        description: `<p>Ignore burden when equipping weapons, and you may place primary weapons in your secondary weapon slot. Always add additional physical damage equal to the value of your Level when you attack.</p>`,
      },
    ],
  },
  {
    id: 'wizard',
    name: 'Wizard',
    description: `Those who acquire their magical power through years of study are known as wizards. Whether through an institution or individual study, wizards use a variety of tools—including books, scrolls, or ancient tablets—to hone their craft. Often, wizards will dedicate their life to the mastery of a particular school of magic, while others will attempt to learn from a wide variety of disciplines. Many wizards go on to become wise and powerful figures in their communities, advising rulers, providing medicines, and even leading war councils. While all members of this class work toward the common goal of collecting magical knowledge, it is very often that wizards have the most conflict within their own ranks; as the acquisition, keeping, and sharing of powerful secrets is a topic of intense debate that has resulted in thousands upon thousands of deaths.`,
    domainIds: ['codex', 'splendor'],
    evasion: 8,
    thresholds: {
      minor: 2,
      major: 7,
      severe: 12,
    },
    items: ['Book You’re Trying to Translate', 'Tiny & Harmless Elemental Pet'],
    features: [
      {
        name: 'Prestidigitation',
        description: `<p>You can perform harmless, subtle magical effects at will. Examples might include changing an object’s color, creating a smell, lighting a candle, floating something small, illuminating a room, repairing a small object, etc.</p>`,
      },
      {
        name: 'Strange Patterns',
        description: `<p>Choose a number between 1-12. Anytime you roll that number on a Duality Die, gain a hope or clear a stress. You may change this number on any long rest.</p>`,
      },
    ],
  },
];

export const getClass = (classId: string): IBuiltClass => {
  const match = ensure(classes.find((item) => item.id === classId));
  const subclasses = getSubclasses(classId);
  const domains = getDomains(match!.domainIds);

  const retObj = {
    ...match,
    domains,
    subclasses,
  };

  return retObj;
};

export const getClasses = () => {
  return classes.map((match) => getClass(match.id));
};

export default classes;
