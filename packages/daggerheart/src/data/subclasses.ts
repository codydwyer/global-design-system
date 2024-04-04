import { ISubclass } from '../types';

const subclasses: ISubclass[] = [
  {
    id: 'wordsmith',
    name: 'Wordsmith',
    classId: 'bard',
    description: `Play the Wordsmith if you want to be persuasive and powerful using clever wordplay.`,
    spellcastingTrait: 'Presence',
    features: {
      foundation: [
        {
          name: `Heart of a Poet`,
          description: `<p>Once per short rest, when speaking to a person you're trying to impress, persuade, or offend, if you use at least three rhyming words, you may add 1d6 to the Action Roll against them.</p>`,
        },
        {
          name: `Rousing Speech`,
          description: `<p>Once per long rest, you can give a heartfelt, inspiring speech. All allies that can hear you clear a Stress.</p>`,
        },
      ],
      specialization: [
        `<p>You know your moving words can boost the morale of the group. When you use your skills as linguist to raise a member of your group up, once per session you can do one of the following:</p>
        <ul>
          <li>Allow them to find a mundane object or tool they need.</li>
          <li>Help an Ally by spending a Hope as usual, but roll a d8 instead of a d6 for your advantage die.</li>
          <li>Give them an additional Downtime activity during a rest.</li>
        </ul>`,
      ],
      mastery: [
        `<p>The Rally die you distribute increases to a d10.</p><p>In addition, whenever you Help an Ally, when you narrate the moment as if you were writing the tale of their heroism in a memoir, your advantage die to help them is a d10.</p>`,
      ],
    },
  },
  {
    id: 'troubadour',
    name: 'Troubadour',
    classId: 'bard',
    description: `Play the Troubadour if you want to play music to bolster your allies.`,
    spellcastingTrait: 'Presence',
    features: {
      foundation: [
        `<p>When you select this Foundation, describe the instrument you use to produce music. You may perform each song once per long rest:</p>
      <ul>
        <li>When you perform a relaxing song during a moment of calm, you and any close allies heal 1 Hit Point.</li>
        <li>When you perform an epic song during battle, make a target temporarily Vulnerable.</li>
        <li>When you perform a heartbreaking song at any time, you and any close allies take a Hope.</li>
      </ul>`,
      ],
      specialization: [
        `<p>Your rallying songs also help steel the courage of those who listen. Anybody who receives a Rally die from you via your Rally ability can also choose to either gain a Hope or clear a Stress.</p>`,
      ],
      mastery: [
        `<p>Your craft rivals the greats, your skill and creativity unbounded. You may perform each of your Foundation songs an additional time per long rest.</p>`,
      ],
    },
  },
  {
    id: 'warden-of-the-elements',
    name: 'Warden of the Elements',
    classId: 'druid',
    description: `Play the Warden of the Elements if you want to embody the natural elements of nature.`,
    spellcastingTrait: 'Instinct',
    features: {
      foundation: [
        {
          name: `Elemental Incarnation`,
          description: `<p>Mark a Stress to embody an elemental spirit from the list below, lasting for up to 1 hour or until you use this ability again. This ability can be used during (and overlap with) Beastform.</p>
          <ul>
            <li>Fire: When an enemy in melee range deals damage to you, they take 1d10 magic damage.</li>
            <li>Earth: You gain +2 to your Armor Score.</li>
            <li>Water: When you deal damage to an enemy in melee range, all other very close enemies mark a Stress.</li>
            <li>Air: You can hover two feet up, gaining advantage on Agility rolls.</li>
          </ul>`,
        },
      ],
      specialization: [
        `<p>Once per short rest, while in Elemental Incarnation, you can give the area within close range of you an effect from the list below in accordance with that element. This effect follows you until you take Severe damage or the GM spends Fear to end it.</p>
      <ul>
        <li>Fire: Whenever an enemy marks one or more Hit Points, they also take a Stress.</li>
        <li>Earth: You and your allies gain +1 Armor Score.</li>
        <li>Water: After an enemy acts, you can spend a Hope to move them anywhere within close range to them.</li>
        <li>Air: If you or an ally get damaged by a ranged attack, reduce it by 1d8.</li>
      </ul>`,
      ],
      mastery: [
        `<p>When you use your Elemental Incarnation, you further embody the spirit and gain the additional benefits below based on the element chosen.</p>
        <ul>
          <li>When you deal damage with an attack or spell, you are at +1 Proficiency.</li>
          <li>When you mark an Armor Slot, roll 1d6. On a 5-6, you may clear an Armor Slot.</li>
          <li>When you are hit by an attack, you can take a Stress to make the attacker Vulnerable.</li>
          <li>You gain +1 Evasion and can fly.</li>
        </ul>`,
      ],
    },
  },
  {
    id: 'warden-of-renewal',
    name: 'Warden of Renewal',
    classId: 'druid',
    description: `Play the Warden of Renewal if you want to use powerful magic to heal your party members.`,
    spellcastingTrait: 'Instinct',
    features: {
      foundation: [
        {
          name: `Clarity of Nature`,
          description: `<p>Once per long rest, you may create a space of natural serenity around you. After spending a few minutes resting within the space, you can clear Stress equal to your Instinct trait, distributed as you choose between you and your allies.</p>`,
        },
        {
          name: `Regeneration:`,
          description: `<p>Touch a creature and spend 3 Hope to heal 1d4 of their Hit Points.</p>`,
        },
      ],
      specialization: [
        `<p>You may use any of your Foundation features while in Beastform.</p>
        <p>Once per long rest, you may target yourself or an ally in close range to clear a number of Armor Slots equal to your Instinct.</p>`,
      ],
      mastery: [
        `<p>Your animal transformation embodies a healing guardian spirit. While you are in Beastform, when an ally within close range marks 2 or more Hit Points, you can mark a Stress to reduce the amount of Hit Points they mark by 1.</p>`,
      ],
    },
  },
  {
    id: 'stalwart',
    name: 'Stalwart',
    classId: 'guardian',
    description: `Play the Stalwart if you want to take heavy blows and keep moving.`,
    features: {
      foundation: [
        `<p>When you take this foundation, raise all of your Damage Thresholds by +2.</p><p>When you take physical damage, you may spend a Hope instead of marking an Armor Slot to reduce the damage by your Armor Score.</p>`,
      ],
      specialization: [
        `<p>When you take this specialization, raise all of your Damage Thresholds by +1.</p><p>When an ally within very close range takes damage, you can mark an Armor Slot to reduce the damage by your Armor Score.</p>`,
      ],
      mastery: [
        `<p>When you take this mastery, raise all of your Damage Thresholds by +2.</p><p>When an ally within close distance has 2 or less Hit Points and takes damage, you can immediately mark a Stress to sprint to their side and take the damage instead.</p>`,
      ],
    },
  },
  {
    id: 'vengeance',
    name: 'Vengeance',
    classId: 'guardian',
    description: `Play the Vengeance if you want to strike down enemies that hurt you or your allies.`,
    features: {
      foundation: [
        `<p>Gain an additional Armor Slot immediately.</p><p>When you are hit by an enemy in melee range and use at least one Armor Slot to reduce the damage, immediately do damage to them equal to your Armor Value.</p>`,
      ],
      specialization: [
        `<p>When an enemy damages an ally within melee range, the next successful attack you make against that enemy has +1 Proficiency.</p>`,
      ],
      mastery: [
        `<p>Spend a Hope to mark an enemy until your next rest. When you make an Attack Roll against an enemy you have marked in this way, you can adjust your Hope or Fear die by +1.</p>`,
      ],
    },
  },
  {
    id: 'wayfinder',
    name: 'Wayfinder',
    classId: 'ranger',
    description: `Play the Wayfinder if you want to hunt your prey using deadly force.`,
    spellcastingTrait: 'Agility',
    features: {
      foundation: [
        {
          name: `Apex Predator`,
          description: `<p>Mark a Stress to increase your Proficiency by +1 when rolling damage. When you deal damage to an enemy, you can never hit below their minor threshold.</p>`,
        },
        {
          name: `Path Forward`,
          description: `<p>When you're headed for a place you've previously visited, or you carry an object with you that has been there before, you can identify the shortest, most direct path to your destination.</p>`,
        },
      ],
      specialization: [
        `<p>When a creature that is marked by your Ranger's Focus attacks you, your Evasion is increased against the attack by a number equal to your Agility trait.</p>`,
      ],
      mastery: [
        `<p>When you make an Attack Roll against an enemy marked by your Ranger’s Focus, you may spend a Hope before the roll. On a success, you remove one Fear from the GM's Fear Pool.</p>`,
      ],
    },
  },
  {
    id: 'companion',
    name: 'Companion',
    classId: 'ranger',
    description: `Play the Companion if you want to form a deep bond with an animal ally.`,
    spellcastingTrait: 'Agility',
    features: {
      foundation: [
        `<p>You have an animal companion of your choice (at GM's discretion).</p>
      <p>Take the Ranger Companion sheet. Whenever you level up your character, also choose a level up option for your companion from this sheet.</p>`,
      ],
      specialization: [
        `<p>When you take this Specialization, gain an additional level up option for your companion immediately.</p>
        <p>When an enemy attacks you while in melee with your Ranger Companion, you gain +2 Evasion against the attack.</p>`,
      ],
      mastery: [
        `<p>When you take this Specialization, gain 2 level up options for your companion immediately.</p>
      <p>Once per long rest, if you and your companion are within close range of each other when the damage from an attack would take you or your companion out of the fight, the other may immediately rush to their side and take that damage instead.</p>`,
      ],
    },
  },
  {
    id: 'nightwalker',
    name: 'Nightwalker',
    classId: 'rogue',
    description: `Play the Nightwalker if you want to use the cover of shadow to navigate your environment.`,
    spellcastingTrait: 'Agility',
    features: {
      foundation: [
        {
          name: `Shadow Stepper`,
          description: `<p>You can move from shadow to shadow. When you step into the shadow cast by another person or object, or an area of darkness, mark stress to disappear from where you are and reappear inside of any other shadow within far range.</p>`,
        },
      ],
      specialization: [
        {
          name: `Dark Cloud`,
          description: `<p>Make a Spellcast Roll (15). On a success, create a temporary dark cloud that covers any area within close distance of you. Anyone in this cloud can’t see outside of it, and anyone outside of it can’t see in. You are considered Cloaked from any enemy it blocks line of sight from.</p>`,
        },
        {
          name: `Slippery:`,
          description: `<p>You may spend Hope to immediately slip out of anything that is physically keeping you from moving.</p>`,
        },
      ],
      mastery: [
        `<p>Gain +1 to your Evasion permanently, and your ability to shadow step now works at very far range.</p>`,
        {
          name: `Cloaked`,
          description: `<p>At any time, you can mark stress to make yourself cloaked. While cloaked, you take all the benefits of the hidden condition and automatically lose the vulnerable and restrained condition if you have them. Cloaked only drops when you make a roll with Fear, or at your next rest.</p>`,
        },
      ],
    },
  },
  {
    id: 'syndicate',
    name: 'Syndicate',
    classId: 'rogue',
    description: `Play the Syndicate if you want to know somebody helpful everywhere you go.`,
    spellcastingTrait: 'Agility',
    features: {
      foundation: [
        `<p>When you arrive in a heavily populated town or city, you know somebody that calls this place home. Give them a name, note how you think they could be useful, and choose one from the list below:</p>
        <ul>
          <li>They owe me a favor, but they will be hard to find.</li>
          <li>They’re going to ask for something in exchange.</li>
          <li>They’re always in a great deal of trouble.</li>
          <li>We used to be together. It’s a long story.</li>
          <li>We didn’t part on great terms.</li>
        </ul>`,
      ],
      specialization: [
        `<p>Once per session, you can briefly call forth a shady contact. Immediately choose one of the benefits below and describe the flashback that brought them here to help you in this moment:</p>
          <ul>
            <li>They provide 1 handful of gold, a unique tool, or a mundane object that the situation requires.</li>
            <li>When making an Action Roll, their help lets you shift your Hope or Fear die by +3.</li>
            <li>When dealing damage, they snipe from the shadows, adding 2d8 damage to your damage roll.</li>
          </ul>`,
      ],
      mastery: [
        `<p>You can now use your Specialization Feature three times per session. You can also choose from the following options when you use it:</p>
        <ul>
          <li>When you mark 1 or more Hit Points, a contact rushes out to shield you, reducing the Hit Points marked by 1.</li>
          <li>When you make a Presence Roll in conversation, they back you up. Your Hope die becomes a d20 for the roll.</li>
        </ul>`,
      ],
    },
  },
  {
    id: 'winged-sentinel',
    name: 'Winged Sentinel',
    classId: 'seraph',
    description: `Play the Winged Sentinel if you want to take flight and strike hard from the sky.`,
    spellcastingTrait: 'Strength',
    features: {
      foundation: [
        `<p>You may spend a Hope to take flight until your next roll with Fear. While flying, do an additional 1d8 damage to any weapon attack you make. You may spend an additional Hope to pick up and carry another creature that is approximately your size or smaller.</p>`,
      ],
      specialization: [
        `<p>Your supernatural visage strikes awe and fear. You have advantage on Presence Rolls while in flight, and if you succeed on this Presence roll with Hope, you may remove a Fear from the GM's Fear Pool instead of taking Hope.</p>`,
      ],
      mastery: [
        `<p>When you take this mastery, raise your Severe Damage Threshold by +4 immediately.</p>
        <p>While in flight, the additional damage you deal with a weapon attack through your Winged Sentinel Foundation increases to 1d12.</p>`,
      ],
    },
  },
  {
    id: 'divine-wielder',
    name: 'Divine Wielder',
    classId: 'seraph',
    description: `Play the Divine Wielder if you want to dominate the battlefield with a legendary weapon.`,
    spellcastingTrait: 'Strength',
    features: {
      foundation: [
        {
          name: `Spirit Weapon`,
          description: `<p>When you have a melee weapon equipped, it can fly from your hand to strike an enemy and return to you. Treat it as though it is a weapon with close range. Mark a Stress to also apply this attack to another target in range on the same Attack Roll.</p>`,
        },
        {
          name: `Sparing Touch`,
          description: `<p>Once per long rest, you can touch a creature and heal 2 Hit Points or 2 Stress.</p>`,
        },
      ],
      specialization: [
        `<p>When you take this Specialization, gain an additional Armor Slot immediately.</p>
      <p>Your Sparing Touch can now be used one additional time per long rest.</p>`,
      ],
      mastery: [
        `<p>When you roll damage for your Spirit Weapon, if any of your damage dice values match, roll an additional damage die per match (8 and 8 rolls +1 die. 5, 5, and 5 rolls +2 dice, etc). Do not count any of these additional dice towards matching.</p>`,
      ],
    },
  },
  {
    id: 'primal-origin',
    name: 'Primal Origin',
    classId: 'sorcerer',
    description: `Play the Primal Origin if you want to modify your spells in powerful ways.`,
    spellcastingTrait: 'Instinct',
    features: {
      foundation: [
        {
          name: ``,
          description: `<p>Your primal origin allows you to modify the essence of magic itself. When you cast a spell or use a weapon that deals magic damage, you may mark a Stress to do any of the following:</p>
            <ul>
              <li>Extend its reach by one range.</li>
              <li>Add +2 to the action roll result.</li>
              <li>Reroll any number of Damage Dice.</li>
              <li>Hit an additional target within range with the spell.</li>
            </ul>`,
        },
      ],
      specialization: [
        `<p>You can enhance the magical practices of others with your essence. When you Help an Ally on a Spellcast Roll, the advantage die you roll is 1d8. After you help them make their Spellcast Roll, once per long rest, you can swap the values of their Duality dice.</p>`,
      ],
      mastery: [
        `<p>You can gather magical energy to enhance your capability. You may become "charged" after taking magic damage, or after spending 2 Hope to do so. When you successfully cast a spell while "charged", you may become no longer "charged" to either gain +2 Proficiency or +2 Evasion Roll Difficulty for that spell.</p>
        <p>You are no longer "charged" after a long rest.</p>`,
      ],
    },
  },
  {
    id: 'elemental-origin',
    name: 'Elemental Origin',
    classId: 'sorcerer',
    description: `Play the Elemental Origin if you want to use raw elemental magic in creative ways.`,
    spellcastingTrait: 'Instinct',
    features: {
      foundation: [
        `<p>Your elemental origin lets you manipulate and shape a certain kind of element.</p>
      <p>Choose one: Water, Fire, Air, Lightning, Earth</p>
      <p>You can channel this element into unique, harmless effects. You may also spend a Hope to describe how your control over this element helps a current action you’re attempting, and either add +2 to the action roll before making it or +3 to the damage.</p>`,
      ],
      specialization: [
        `<p>You can call forth your chosen element to protect you from harm. When you are attacked, you may spend a Stress to describe how your element is channeled to defend you and add 1d8 to your Evasion against the attack.</p>`,
      ],
      mastery: [
        `<p>Once per long rest, you can transform into an elemental form of your chosen element. When you do, describe your transformation and choose two of the following features to gain until your next short rest:</p>
            <ul>
              <li>+4 to your Severe Threshold.</li>
              <li>+1 to a Character Trait of your choice</li>
              <li>+1 Proficiency</li>
              <li>+2 to your Armor Score</li>
              <li>+2 Evasion</li>
            </ul>`,
      ],
    },
  },
  {
    id: 'call-of-the-slayer',
    name: 'Call of the Slayer',
    classId: 'warrior',
    description: `Play the Call of the Slayer if you want to ensure you strike down enemies with great power.`,
    features: {
      foundation: [
        `<p>On a roll with Hope, you may choose to place a single d6 on this card instead of taking a Hope. You can store a number of d6 equal to your proficiency, and can pick up any number of these dice and roll them when making an Attack or Damage Roll to add their value to your total. Discard any you use this way. At the end of a session, clear any remaining dice on this card and gain that many Hope.</p>`,
      ],
      specialization: [
        `<p>You can wield multiple weapons with dangerous ease. When you make a successful Attack Roll, you may spend a Hope to add one weapon damage die from your secondary weapon to the damage.
      In addition, once per long rest, when you roll your Slayer dice, you can reroll any 1s once, taking the new result.</p>`,
      ],
      mastery: [
        `<p>You have become an inspirational warrior to all who travel with you. You gain a new Downtime option called Martial Preparation.</p>`,
        {
          name: `Martial Preparation`,
          description: `<p>Describe how you instruct and train with your party and gain 1d6 Slayer dice to distribute between you and your allies. Allies can use these Slayer dice to enhance their own weapon Attack or Damage rolls.</p>`,
        },
      ],
    },
  },
  {
    id: 'call-of-the-brave',
    name: 'Call of the Brave',
    classId: 'warrior',
    description: `Play the Call of the Brave if you want to be adept at taking on both harrowing tasks and dangerous enemies.`,
    features: {
      foundation: [
        `<p>When you fail a roll with Fear, you gain a Hope.</p><p>Once per long rest, before you attempt something incredibly dangerous or face off against a foe who clearly outmatches you, describe what ritual you perform or preparation you make to clear 2 Stress and gain 2 Hope.</p>`,
      ],
      specialization: [
        `<p>You are vigilant in the face of mounting danger.</p><p>While you have 2 Hit Points available or less, your Hope die becomes a 1d20.</p>`,
      ],
      mastery: [
        `<p>Your unbending courage is a rallying point for your allies. You can initiate a Tag Team Roll twice per session.</p><p>When an ally wishes to initiate a Tag Team Roll with you, they only need to spend 2 Hope to do so.</p>`,
      ],
    },
  },
  {
    id: 'school-of-knowledge',
    name: 'School of Knowledge',
    classId: 'wizard',
    spellcastingTrait: 'Knowledge',
    description: `Play the School of Knowledge if you want to have incredible knowledge of the magical world around you.`,
    features: {
      foundation: [
        `<p>You’ve gained priceless knowledge through great study. When you face off against something of great magical power, you may spend a Hope and ask the GM what you know about it that could help you here. They will tell you something useful or interesting about it.</p>`,
        {
          name: `Adept`,
          description: `<p>You may mark a Stress instead of spending a Hope to use an Experience on a roll. If you do, double the Experience modifier when you add it.</p>`,
        },
      ],
      specialization: [
        `<p>When you take this Specialization, you may change an existing Experience you have, then add +1 to one of your Experiences.</p><p>Once per short rest, you may reduce the Recall Cost of a Domain card in your Vault by 1 when recalling it.</p>`,
      ],
      mastery: [
        `<p>When you take this Mastery, choose two Experiences and add +1 to each of them.</p><p>Whenever you wish to use an Experience, roll a 1d6. On a result of 5-6, you do not need to spend a Hope to use it.</p>`,
      ],
    },
  },
  {
    id: 'school-of-war',
    name: 'School of War',
    classId: 'wizard',
    description: `Play the School of War if you want to be trained to use magic as a means of violence.`,
    spellcastingTrait: 'Knowledge',
    features: {
      foundation: [
        `<p>You've focused your studies on the shaping of magic in both dangerous and powerful ways. Take an extra armor slot immediately. When you make a successful Attack Roll with Fear, you deal an extra 1d6 magic damage.</p>`,
      ],
      specialization: [
        `<p>You can concentrate to maintain a protective barrier of magic to protect you. While you have at least 2 Hope, you can add your Spellcast trait to your Evasion.</p>`,
      ],
      mastery: [
        `<p>Your extra magic damage from your School of War feature increases to 1d10.</p><p>When you make a successful attack roll with Hope, you may choose to make it with Fear instead.</p>`,
      ],
    },
  },
];

export const getSubclasses = (classId: string) => {
  return subclasses.filter((subclass) => subclass.classId === classId);
};

export default subclasses;
