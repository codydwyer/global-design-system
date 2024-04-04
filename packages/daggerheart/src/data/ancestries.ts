import { IAncestry } from '../types';
import { ensure } from './utils';

const ancestries: IAncestry[] = [
  {
    id: 'clank',
    name: 'Clank',
    description:
      'Clanks are sentient mechanical beings built from such materials as metal, wood, stone, and clay, to resemble humanoids, animals, or even inanimate objects. Like organic beings, their bodies come in a wide array of sizes and may change and adapt based on time and need. Because of their custom construction, many clanks have highly specialized physical features. Examples include clawed hands for grasping, wheels for movement, or built-in weaponry. Many clanks are known to embrace an individual’s desires for body modifications—including those based in style or function—and members of other ancestries might turn to clank artisans to construct highly customized mobility aids and physical adornments.',
    features: [
      {
        name: 'Purposeful Design',
        description: `Decide who you were created by and for what purpose. When you generate your Experiences at character creation, choose one that reflects this purpose and add +1 to it.`,
      },
    ],
  },
  {
    id: 'daemon',
    name: 'Daemon',
    description:
      'Those of daemon ancestry are the humanoid descendants of the Fallen Gods, who possess sharp canines, pointed ears, and horns that come in a variety of styles. While some daemon horns resemble that of a goat or ram, others bear the shape of a piercing spike. There’s no standard number of horns for daemons—though two or four are quite common—and some will have crowns of many horns, or only one. They may also grow asymmetrically, forming unique shapes that daemons are known to enhance with carving and ornamentation. Their skin, hair, and horns come in an assortment of stark and vibrant colors such as rosy scarlet, deep purple, and pitch black. On average, daemons range in height from 5ft to 7ft and are known to have long fingers and pointed nails.',
    features: [
      {
        name: 'Fearless',
        description: `When you roll with Fear, you may choose to mark a stress instead of the GM gaining Fear.`,
      },
      {
        name: 'Dread Visage',
        description: `You have advantage on rolls to intimidate other non-daemon creatures.`,
      },
    ],
  },
  {
    id: 'drakona',
    name: 'Drakona',
    description:
      'Drakona resemble wingless dragons in humanoid form and possess a powerful elemental breath. All drakona have thick scales that provide excellent natural armor against both the forces of nature and attacks. They are large in size (ranging from 5ft to 7ft on average) with equally large and naturally sharp teeth. Drakona teeth are perpetually regrown, and members of this ancestry are never in danger of permanently losing an incisor. Unlike their dragon ancestors, drakona do not possess wings and cannot fly without magical aid. Members of this ancestry each possess elemental breath, the type of which is passed down through the generations of each drakona family.',
    features: [
      {
        name: 'Elemental Breath',
        description: `At character creation choose one of the following elements to describe your elemental breath: Fire, Ice, Lightning, Poison, Acid. Spend a Hope to make an Instinct Roll using your breath against an enemy or group of enemies within close range. Deal d8 magic damage to all enemies you succeed against.`,
      },
    ],
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description:
      'Dwarves are most easily recognized as short humanoids with square features, dense musculature, and thick hair. Their average height ranges from 4ft to 5 ½ft and they are often quite broad in proportion to their stature. Due to a higher amount of keratin in their skin and nails, both are very resilient, and dwarves are known to decorate their bodies with a number of tattoos, unique piercings, and embedded gemstones. Equally, their hair grows thickly, primarily on their head, but across other portions of their body as well, and dwarves of all genders are known to wear facial hair, which may be styled in many intricate patterns.',
    features: [
      {
        name: 'Increased Fortitude',
        description: `When you should take physical damage, you may spend three Hope to only take half the damage instead.`,
      },
    ],
  },
  {
    id: 'elf',
    name: 'Elf',
    description:
      'Elves are typically tall humanoids with pointed ears and acutely attuned senses. Their ears vary in size and pointed shape, and as elves age the tips will begin to droop at the tip. While elves come in a wide range of body types, they are all fairly tall, with the shortest among them standing about 5ft 8in and the tallest coming closer to 6½ft. Some elves possess what is known as a “Mystic Form,” which occurs when an individual has dedicated themselves to a portion of the natural world so deeply that their physical form has changed. These characteristics can include celestial freckles, the presence of leaves, vines, or flowers in their skin or hair, and more. Sometimes these traits are inherited from an elf’s parents, but if the individual chooses to move their focus away from that sphere of influence, portions of their appearance will adjust over time.',
    features: [
      {
        name: 'Celestial Trance',
        description: `During a long rest, as one of your actions, you may choose to drop into a Celestial Trance. When you do, roll a number of d8 equal to the Stress you have marked, and clear all Stress. If any of these dice have a matching value, also clear all Hit Points.`,
      },
    ],
  },
  {
    id: 'faerie',
    name: 'Faerie',
    description:
      'Those of faerie ancestry are winged humanoid creatures with insect-like features. Faeries have close ties with the natural world and frequently possess characteristics that allow them to blend in with various plants. Based on their individual heritage, faerie’s features might more closely resemble either humanoids or bugs—they may possess additional arms, compound eyes, lantern organs, chitinous exoskeletons, or stingers. The average height of a faerie ranges from about 2ft to 5ft but some faeries grow up to 7ft tall. All faeries possess membranous wings and go through a unique process of metamorphosis throughout their relatively short lifespan, of usually no more than 40 years.',
    features: [
      {
        name: 'Wings',
        description: `Mark Stress to take flight until you next roll with Fear. While flying, your Evasion score increases by +2.`,
      },
      {
        name: 'Luckbender',
        description: `Once per session, after you or an ally in close range makes an Action Roll, you can mark a Stress to allow a reroll of the Duality Dice. If you do, take the new result.`,
      },
    ],
  },
  {
    id: 'faun',
    name: 'Faun',
    description:
      'Those of faun ancestry resemble goats in humanoid form, with curving horns, square pupils, and cloven hooves. Like any ancestry, their appearances vary widely, but most fauns have a goat-like lower body with dense fur and cloven hooves, while their torso and hands are usually humanoid. Faun faces range from humanoid to goat-like, depending on their heritage, and they can have varying ear shapes, horn shapes, and fur thickness. Faun horns range from short with minimal curvature, to much larger and curling. The average faun height ranges from 4ft to 6½ft, which can change dramatically based on the way they stand. The majority of fauns have proportionately long limbs no matter their individual size or shape.',
    features: [
      {
        name: 'Headbutt',
        description: `Give the GM one Fear to headbutt an enemy you move into melee with. The target immediately takes d8 direct physical damage and can’t be targeted again by this attack during the fight.`,
      },
    ],
  },
  {
    id: 'firbolg',
    name: 'Firbolg',
    description:
      'Firbolgs resemble cows in humanoid form, typically recognized by their broad nose and long ears. Members of this ancestry have more humanoid bodies, which may be more or less covered in hair. Some have facial features that are a blend of humanoid and cow, but others, often referred to as minotaurs, have heads that resemble specific cattle. No matter their other characteristics, firbolgs may possess horns, though many do not. Members of this ancestry come in a range of colors from earth tones to pastel hues like pink and blue. They’re tall and muscular creatures, with heights ranging from around 5ft to 7ft, and possess remarkable strength for their size.',
    features: [
      {
        name: 'Natural Calm',
        description: `Whenever you should mark a Stress, roll 1d6. On a 6, you take no Stress.`,
      },
    ],
  },
  {
    id: 'fungril',
    name: 'Fungril',
    description:
      'Fungrils resemble a mushroom in humanoid form, bearing the features of the fungus from which they descend. Because of this, their appearance can vary wildly: they may be anywhere from about 2ft to 7ft tall, either more humanoid or more fungus in appearance. They come in an assortment of colors, from earth tones to bright reds, yellows, purples, and blues. Their physical forms are non-standardized, resulting in an incredible variety of bodies, faces, and limbs. Though all fungrils can speak verbally, the vast difference in the appearance of fungrils means those of this ancestry do not have a standard of visual, non-verbal means of communication and may choose to utilize a mycelial array for communication.',
    features: [
      {
        name: 'Always Connected',
        description: `To speak with other Fungril across distance to access their hivemind of information, make an Instinct roll. At character creation, describe what ritual you must perform to tap into this connection.`,
      },
    ],
  },
  {
    id: 'galapa',
    name: 'Galapa',
    description: `Those of galapa ancestry resemble anthropomorphic turtles, with a large, domed shell into which the head and limbs can retract for defense. On average, they range from 4ft to 6ft in height and an individual's overall shape is dictated by the type of turtle of their heritage. Galapa come in a variety of earth tones, most often shades of green and brown, and they may possess several colorful and unique patterns, especially on their shells. No matter their other physicality, all galapa can draw in their head, arms, and legs to protect them within their shell, using it`,
    features: [
      {
        name: 'Shell of Protection',
        description: `The shell on your back always protects you. Add your Proficiency to your armor score.`,
      },
    ],
  },
  {
    id: 'giant',
    name: 'Giant',
    description:
      'Giants are very tall humanoids with long arms, broad stature, and one to three eyes. The smallest adults among this ancestry are about 6½ft, with the largest coming in around 8½ft. In combination with their size, giants are most easily recognized by their long arms that grant them added reach. They tend toward dense musculature, no matter their gender or body type. While the majority among this ancestry have two eyes, it’s not uncommon for giants to have one or three eyes. This trait is passed from one or both parents and those with a single eye are often referred to as cyclops.',
    features: [
      {
        name: 'Endurance:',
        description: `Gain an additional Hit Point Slot at character creation.`,
      },
      {
        name: 'Reach',
        description: `Any melee weapon you wield has its range increased to very close.`,
      },
    ],
  },
  {
    id: 'goblin',
    name: 'Goblin',
    description:
      'Those of goblin ancestry are small humanoids typically recognized by their large eyes and massive, membranous ears. Because of these physical features, they tend to have keen hearing and eyesight that allows them to perceive details at a greater distance, in darkness, or in less optimal environments. Their skin and eye colors are incredibly varied with no one hue, either vibrant or subdued, more dominant than another. Their height ranges from 3ft to 4ft and each of their ears is about the size of the individual’s head. Goblins are known to use ear positions to very specific effect within their non-verbal communication.',
    features: [
      {
        name: 'Danger Sense',
        description: `Once per short rest, you may mark a stress to make the GM reroll an attack roll. If it still hits you, reduce the incoming value by your Proficiency.`,
      },
    ],
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description:
      'Halflings are typically smaller humanoids, with large hairy feet and prominent, rounded ears. On average halflings are 3ft to 4ft in height, with ears, noses, and feet that are larger in proportion to the rest of their features. Halflings are naturally attuned to the magnetic fields of the Mortal Realm, granting them a strong internal compass. They also possess strong senses of hearing and smell and may be more able to detect those who are familiar to them by the sound of their movements.',
    features: [
      {
        name: 'Little Lucky',
        description: `At the beginning of each session, give everyone in your party a Hope. You may always reroll a 1 on your Hope Die. If you do, take the new result instead.`,
      },
    ],
  },
  {
    id: 'human',
    name: 'Human',
    description:
      'Those of human ancestry are most easily recognized by their dexterous hands, rounded ears, and bodies built for endurance. Their average height ranges from just under 5ft to about 6 ½ ft. They have a wide variety in their build, with some being quite muscular, others lithe, and everything in between. Humans are incredibly physically adaptable and can adjust to harsh climates with relative ease.',
    features: [
      {
        name: 'Perseverance',
        description: `When you fail a roll that utilized one of your Experiences, you may spend a Hope to reroll. You must take the new result.`,
      },
    ],
  },
  {
    id: 'katari',
    name: 'Katari',
    description:
      'Those of katari ancestry are feline humanoids with soft fur and high, triangular ears. They also have vertically-slit pupils, small pointed canine teeth, and long whiskers that perception and navigation. Their ears can swivel nearly 180° to detect sound, adding to their heightened senses. Depending on their lineage, Katari may more closely resemble their cat ancestors, or humans, with an amount of hair and facial structure to match. Equally, they may or may not have tails and their skin and fur possess a wide range of hues, with solid colors, calico tones, tabby patterns, and an array of spots or stripes. Their height ranges widely from about 3ft to 6½ft.',
    features: [
      {
        name: 'Feline Instincts',
        description: `On any Agility Rolls, you may mark a Stress to reroll your Hope Die. If you do, take the new result instead.`,
      },
    ],
  },
  {
    id: 'orc',
    name: 'Orc',
    description:
      'Orcs are most easily recognized as humanoids with square features and boar-like tusks. These tusks protrude from their lower jaw, and the size can vary between individuals. While they extend from their mouths, tusks are not used for consuming food, and thus many orcs choose to decorate them with significant ornamentation. Orcs have mid-sized, pointed ears and their skin is typically colored in green, blue, pink, and grey tones. Orcs tend towards a muscular stature, no matter their individual size or build, and their average height ranges from 5ft to 6½ ft.',
    features: [
      {
        name: 'Sturdy',
        description: `When you should mark an armor slot, roll a d6. On a 5+, you don’t mark the armor slot but still reduce the incoming damage by your armor score.`,
      },
    ],
  },
  {
    id: 'ribbet',
    name: 'Ribbet',
    description:
      'Those of ribbet ancestry resemble anthropomorphic frogs with protruding eyes and webbed hands and feet. They have smooth (though sometimes warty) and moist skin, eyes positioned on either side of the top of their head and, while some ribbets have hind legs more than twice the length of their torso, others have fairly small limbs. No matter their size (which ranges from about 3ft to 4½ft), ribbets primarily move by hopping. All ribbets have hands and feet that are webbed, allowing them to swim with ease. Some ribbets possess a natural green and brown camouflage, while others are quite vibrantly colored in an array of bold patterns. No matter their appearance, all ribbets are born from eggs laid in the water, hatch into tadpoles, and after about 6 to 7 years mature into amphibians that can move around on land.',
    features: [
      {
        name: 'Amphibious',
        description: `You can breathe and move underwater just as easily as on land.`,
      },
      {
        name: 'Long Tongue',
        description: `You can use your long, powerful tongue to grab onto things close to you. You may also mark Stress to unleash it as a Finesse Close weapon that does d12 physical damage.`,
      },
    ],
  },
  {
    id: 'simian',
    name: 'Simian',
    description:
      'Simiah resemble anthropomorphic monkeys and apes, with long limbs and prehensile feet. This grants them an appearance that ranges from the largest gorilla to the smallest marmoset, and everything in between. Their size does not align directly with their animal counterparts, as they tend to range from 2ft to 6ft tall. Though the degree varies, all members of this ancestry have prehensile feet and utilize this dexterity in nonverbal communication, movement, work, and combat. This trait also grants them unique agility that can aid them in a variety of physical tasks.',
    features: [
      {
        name: 'Nimble',
        description: `Take advantage on Agility Rolls that involve balancing and climbing ,and add +1 to your Evasion at character creation.`,
      },
    ],
  },
];

export const getAncestry = (ancestryId: string) => {
  return ensure(ancestries.find((ancestry) => ancestry.id === ancestryId));
};

export default ancestries;
