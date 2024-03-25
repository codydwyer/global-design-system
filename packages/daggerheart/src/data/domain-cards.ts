import { IDomainCard } from '../types';

const domainCards: IDomainCard[] = [
  {
    name: 'Unleash Chaos',
    domainId: 'arcana',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>At the beginning of a session, place a number of tokens equal to your Spellcast Trait on this card.</p>
    <p>You can make a Spellcast Roll against a target within far range and spend any number of tokens to channel raw energy from within yourself and unleash against them. On a success, roll a number of d10 equal to the tokens you spent, and do that much magic damage to the target. Mark a Stress to replenish this card with tokens, up to your Spellcast Trait. Clear all tokens at the end of the session.</p>`,
  },
  {
    name: 'Rune Ward',
    domainId: 'arcana',
    level: 1,
    recallCost: 0,
    type: 'spell',
    effect: `<p>You have a deeply personal token or trinket that can be infused with protective magic and held as a ward by you or an ally. Describe what it is and why it’s important to you. When the holder of the ward takes damage, they can spend Hope to reduce it by 1d8.</p>
    <p>If the ward die rolls an 8, its power will temporarily end after it reduces damage this turn. It can be recharged for free on your next rest.</p>`,
  },
  {
    name: 'Wall Walk',
    domainId: 'arcana',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Spend a Hope to allow a creature you can touch to climb on walls and ceilings as easily as walking on the ground below. This spell will end after ten minutes or when you cast it on another creature.</p>`,
  },
  {
    name: 'Cinder Grasp',
    domainId: 'arcana',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a target in melee range. On a success, the target instantly bursts into flames, dealing 1d20 magic damage and temporarily catching them on fire.</p>
    <p>Any time a creature tries to act while on fire, it must take an additional 2d6 magic damage if it is still on fire at the end of its action.</p>
    `,
  },
  {
    name: 'Floating Eye',
    domainId: 'arcana',
    level: 2,
    recallCost: 0,
    type: 'spell',
    effect: `<p>You can spend a Hope to create a single, small floating orb that you can control anywhere within very far range from you. While controlling it, you can choose to see through its vision as though it’s your own. If the orb takes damage or moves out of range, the spell will immediately end.</p>
    `,
  },
  {
    name: 'Counterspell',
    domainId: 'arcana',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a spell or magical effect about to happen within far range. On a success, the GM will tell you how many Stress you can mark to end it.</p>
    `,
  },
  {
    name: 'Flight',
    domainId: 'arcana',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Mark a Stress to take flight for a number of minutes equal to your level. While flying, you may spend a Hope to pick up and carry another creature approximately your size or smaller. You cannot carry more than one other creature at a time.</p>
    `,
  },
  {
    name: 'Blink Out',
    domainId: 'arcana',
    level: 4,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (12). On a success, spend a Hope and vanish, teleporting to another place you can see within very far range. If any creatures are very close to you when you succeed, you can spend an additional Hope each to bring them with you.</p>
    `,
  },
  {
    name: 'Preservation Blast',
    domainId: 'arcana',
    level: 4,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against all enemies within melee range of you. Any you succeed against are hurdled into far range. Roll an amount of d8s equal to your Spellcast Trait and also do that much magic damage to each of them.</p>`,
  },
  {
    name: 'Chain Lightning',
    domainId: 'arcana',
    level: 5,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Once per short rest, make a Spellcast Roll against every adversary in front of you within close range. On a success, the GM must make a Reaction Roll (16) for the targets. On a failure, they take 3d8 plus a number of d8s equal to your Spellcast Trait in magic damage. On a success, they take half damage (rounded up).</p>`,
  },
  {
    name: 'Premonition',
    domainId: 'arcana',
    level: 5,
    recallCost: 2,
    type: 'spell',
    effect: `<p>You can channel the arcane energy to have visions of the future. Once per long rest, immediately after the GM conveys the consequences of you rolling with Fear, you may make that event your Premonition. You instead rescind the action and consequences like they never happened and choose another action instead.</p>`,
  },
  {
    name: 'Telekinesis',
    domainId: 'arcana',
    level: 6,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against an object or target within far range. On a success, you can move it anywhere within far range of its current position using only your mind. If the target is unwilling, you must spend 1 or more Stress to do so, and can deal 1d20 magic damage per Stress spent. If you are hitting a creature with the target, divide the damage equally between the two.</p>`,
  },
  {
    name: 'Teleport',
    domainId: 'arcana',
    level: 6,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Once per long rest, you have the ability to instantly teleport yourself and a number of others within close range up to your Level somewhere you’re aware of. Choose one option below to gain additional modifiers, then make a Spellcast Roll (16):</p>
    <ul>
      <li>If you know the place very well, take +5.</li>
      <li>If you’ve visited the place frequently, take +3.</li>
      <li>If you’ve visited the place infrequently, take +1.</li>
      <li>If you’ve only been there once, no modifiers.</li>
      <li>If you’ve never been there, take -4.</li>
    </ul>
    <p>On a success, you appear where you were intending to go. On a failure, you appear off course, with the range of failure signifying how far off course.</p>`,
  },
  {
    name: 'Arcana Touched',
    domainId: 'arcana',
    level: 7,
    recallCost: 2,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Arcana domain:</p>
    <ul>
      <li>Gain +1 to your Spellcast rolls.</li>
      <li>Once per short rest, switch the values on your Hope and Fear die.</li>
    </ul>`,
  },
  {
    name: 'Cloaking Blast',
    domainId: 'arcana',
    level: 7,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make an Attack Roll using your primary weapon against a target. On a success, along with dealing damage, you can also spend a Hope to immediately become hidden.</p>
    <p>Hidden only drops the next time you make an action roll or the GM uses all of the tokens on the action tracker.</p>`,
  },
  {
    name: 'Arcane Reflection',
    domainId: 'arcana',
    level: 8,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Whenever you would take magic damage, if you choose not to reduce it using Armor, you may spend a Hope to roll an amount of d6 equal to your Spellcast Trait. If any of the dice roll a result of 6, the attack is reflected back onto the caster, dealing the damage to them instead.</p>`,
  },
  {
    name: 'Confusing Aura',
    domainId: 'arcana',
    level: 8,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (14). Once per long rest, on a success you create a layer of illusion over your body that makes it hard to tell exactly where you are. You may mark any number of stress to make that many additional layers. When an adversary makes an attack against you, roll a number of d6 equal to the number of layers currently active. If any land on a 4+, one layer of the aura is destroyed and you avoid the attack. If all are 3-, you take the damage and the effect ends.</p>`,
  },
  {
    name: 'Earthquake',
    domainId: 'arcana',
    level: 9,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (16). Once per short rest, on a success all creatures within very far range of your choice must make a Reaction Roll (18). On a failure, they take 3d10 physical damage and are Vulnerable. On a success, they take half damage (rounded up).</p>
    <p>When you successfully cast this spell, all terrain within very far range of you becomes difficult to move through, and structures within this range may sustain damage or crumble.</p>`,
  },
  {
    name: 'Sensory Projection',
    domainId: 'arcana',
    level: 9,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (15). On a success, drop into a vision that lets you clearly see and hear any place you have been before as though you are standing there. You can move freely in this vision and are not constrained by the physics or impediments of a physical body. This spell cannot be detected by mundane or magical means and you will drop out of this vision immediately upon taking damage or casting another spell.</p>`,
  },
  {
    name: 'Adjust Reality',
    domainId: 'arcana',
    level: 10,
    recallCost: 1,
    type: 'spell',
    effect: `<p>After a dice roll, you may spend 5 Hope to change the results of that roll to a result of your choice instead. The result must be plausible within the range of the dice.</p>`,
  },
  {
    name: 'Falling Sky',
    domainId: 'arcana',
    level: 10,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against all enemies within far range. Mark any number of Stress to make shards of arcana rain down from above, dealing 1d20 damage per each Stress you marked to any targets you succeed against.</p>`,
  },
  {
    name: 'Not Good Enough',
    domainId: 'blade',
    level: 1,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you roll your damage dice, you may reroll any 1s or 2s. If you do, you must take the new result, even on a 1 or 2.</p>`,
  },
  {
    name: 'Retaliation',
    domainId: 'blade',
    level: 1,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you take damage from a creature in melee range, you may mark a Stress to immediately deal weapon damage to the creature at half Proficiency (rounded up).</p>`,
  },
  {
    name: 'Whirlwind',
    domainId: 'blade',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you make a successful attack using a weapon with melee or very close range, you may also spend a Hope to use that roll against every other enemy in that weapon’s range. Any additional enemies you succeed against with this ability take half damage (rounded up).</p>`,
  },
  {
    name: `A Soldier’s Bond`,
    domainId: 'blade',
    level: 2,
    recallCost: 0,
    type: 'ability',
    effect: `<p>Once per long rest, if you compliment someone or ask them about something they are good at, you may both take 3 Hope.</p>`,
  },
  {
    name: `Reckless`,
    domainId: 'blade',
    level: 2,
    recallCost: 1,
    type: 'ability',
    effect: `<p>You may always mark a Stress to take advantage on an Attack Roll against a target.</p>`,
  },
  {
    name: `Scramble`,
    domainId: 'blade',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Once per short rest, when an enemy in melee range would deal damage to you, you can avoid the damage entirely and safely move out of melee range of the enemy.</p>`,
  },
  {
    name: `Versatile Fighter`,
    domainId: 'blade',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>You can choose to use the Character Trait of your choice on an equipped weapon, rather than the trait the weapon calls for.</p>
    <p>When dealing damage, you may mark a Stress to take the maximum value of one of your Damage Die instead of rolling it.</p>`,
  },
  {
    name: `Deadly Focus`,
    domainId: 'blade',
    level: 4,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Once per short rest, you can apply all your focus towards a single target. Choose that target. Until you attack another target, you defeat the creature, or the battle ends, add +1 to your Proficiency.</p>`,
  },
  {
    name: `Fortified Armor`,
    domainId: 'blade',
    level: 4,
    recallCost: 0,
    type: 'ability',
    effect: `<p>Increase your Armor total by +2 while this card is active in your loadout. Once per short rest, you may use an Armor Slot without marking it.</p>`,
  },
  {
    name: `Deathtoll`,
    domainId: 'blade',
    level: 5,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you take this card, permanently add one additional Stress Slot and one additional Hit Point Slot, then place it into your Vault permanently.</p>`,
  },
  {
    name: `Hero’s Strike`,
    domainId: 'blade',
    level: 5,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you land a critical hit on an Attack Roll, choose two of the following:
    </p>
    <ul>
      <li>Clear a Hit Point.</li>
      <li>Clear a marked Armor Slot.</li>
      <li>Mark +1 Hit Point on the target of the attack.</li>
    </ul>`,
  },
  {
    name: `Battle Hardened`,
    domainId: 'blade',
    level: 6,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Once per long rest, when you mark your final Hit Point, instead of making a death move, you can choose to automatically take a Scar (permanently cross out one Hope Slot), and roll 1d6. Clear that many Hit Points and stay on your feet.</p>`,
  },
  {
    name: `Rage Up`,
    domainId: 'blade',
    level: 6,
    recallCost: 0,
    type: 'ability',
    effect: `<p>Before making an Attack Roll, you may spend a Hope to temporarily increase your Proficiency by +1 until the end of the attack.</p>
    <p>You may Rage Up twice per Attack Roll.</p>`,
  },
  {
    name: `Blade Touched`,
    domainId: 'blade',
    level: 7,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Blade domain:</p>
    <ul>
      <li>Attack Rolls always take +2 to their result.</li>
      <li>Increase your Severe Damage Threshold by +4.</li>
    </ul>`,
  },
  {
    name: `Glancing Blow`,
    domainId: 'blade',
    level: 7,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Whenever you make an attack that misses its target, you may mark a Stress to still hit the target for weapon damage at half Proficiency (rounded up).</p>`,
  },
  {
    name: `Battle Cry`,
    domainId: 'blade',
    level: 8,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Once per short rest, while you are charging into danger, you can muster a rousing shout or phrase that inspires your allies. You and all your allies that can hear you each clear a Stress, gain a Hope, and until you or an ally fails a roll with Fear, gain +1 Proficiency.</p>`,
  },
  {
    name: `Frenzy`,
    domainId: 'blade',
    level: 8,
    recallCost: 3,
    type: 'ability',
    effect: `<p>Once per long rest, you can go into a frenzied state until there are no more threats within sight.</p>
    <p>While frenzied, you cannot use Armor Slots, you have +2 to your Proficiency, and your Severe Damage Threshold is increased by +8.</p>`,
  },
  {
    name: `Gore and Glory`,
    domainId: 'blade',
    level: 9,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Whenever you deal enough Weapon damage to defeat an enemy, you can gain a Hope or clear a Stress. When you roll a Critical Success on a weapon attack, you gain an additional Hope or clear an additional Stress.</p>`,
  },
  {
    name: `Reaper Strike`,
    domainId: 'blade',
    level: 9,
    recallCost: 3,
    type: 'ability',
    effect: `<p>You may declare you are using Reaper Strike. Spend a Hope and make an Attack Roll. The GM will tell you any enemy it would succeed against in range of your weapon. Once per long rest, choose one of these enemies, and immediately deal 5 Hit Points of damage to them.</p>`,
  },
  {
    name: `Battle Monster`,
    domainId: 'blade',
    level: 10,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you make a successful attack against an enemy, instead of rolling for damage you may spend 5 Hope to deal the target a number of Hit Points equal to the amount of Hit Points you currently have marked.</p>`,
  },
  {
    name: `Onslaught`,
    domainId: 'blade',
    level: 10,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you successfully hit, your weapon attacks never deal damage beneath a target’s Major Damage Threshold (you will always deal a minimum of 2 Hit Points of damage).</p>
    <p>In addition, whenever an enemy within weapon range deals damage to an ally with an attack that doesn’t include you, you can mark a Stress to immediately deal weapon damage to the enemy at half Proficiency (rounded up).</p>`,
  },
  {
    name: `Deft Maneuvers`,
    domainId: 'bone',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>You can spend a Hope to move anywhere within far range without making an Agility Roll to get there.</p>`,
  },
  {
    name: `I See It Coming`,
    domainId: 'bone',
    level: 1,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you are targeted by a ranged attack, mark a Stress to roll your Hope Die and increase your Evasion against this attack by its value.</p>`,
  },
  {
    name: `Nimble`,
    domainId: 'bone',
    level: 1,
    recallCost: 1,
    type: 'ability',
    effect: `<p>While this card is in your loadout, add your Agility score to your Evasion.</p>`,
  },
  {
    name: `Ferocity`,
    domainId: 'bone',
    level: 2,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you cause an enemy to mark any Hit Points, spend a Hope to temporarily increase your Evasion by the number of Hit Points you dealt. This bonus lasts until after the next attack that targets you.</p>`,
  },
  {
    name: `Strategic Approach`,
    domainId: 'bone',
    level: 2,
    recallCost: 2,
    type: 'ability',
    effect: `<p>After a long rest, place a number of tokens equal to your Knowledge Trait on this card, with a minimum of 1. When you move into melee range of an enemy and make an Attack Roll against them, you may spend one token to choose an option below.</p>
    <ul>
      <li>Make the attack at advantage.</li>
      <li>Don’t add a character token to the action tracker for this attack.</li>
      <li>Add 1d8 to your damage.</li>
    </ul>
    <p>When you take a long rest, clear all unused tokens.</p>`,
  },
  {
    name: `Brace`,
    domainId: 'bone',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you use an Armor Slot to reduce incoming damage, you may also spend any number of Hope. For every Hope you spend, reduce the incoming damage by the value of your Proficiency.</p>`,
  },
  {
    name: `Tactician`,
    domainId: 'bone',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you Help an Ally, the advantage die you add is a 1d8. When making a Tag Team roll, you can roll a d20 for your Hope die.</p>`,
  },
  {
    name: `Boost`,
    domainId: 'bone',
    level: 4,
    recallCost: 1,
    type: 'ability',
    effect: `<p>If you have an ally in close range of you, mark a Stress to boost off of them and into the air to perform an aerial attack at an enemy within far range. You have advantage on the attack, add 1d10 to the damage, and end your action in melee range of the target.</p>`,
  },
  {
    name: `Redirect`,
    domainId: 'bone',
    level: 4,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you successfully evade a ranged attack, you may roll a number of d6s equal to your proficiency. If any roll a 6, mark a stress to redirect the attack to instead damage an enemy within very close range of you.</p>`,
  },
  {
    name: `Know Thy Enemy`,
    domainId: 'bone',
    level: 5,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When observing a creature, you can make a Instinct Roll against the target. On a success, spend a Hope and ask the GM for two of the mechanical specifics about the target from below:</p>
    <ul>
      <li>Current Hit Points and unmarked stress.</li>
      <li>Difficulty and Damage Thresholds.</li>
      <li>Their Tactics and standard attack Damage Dice.</li>
      <li>Their Moves and Experiences.</li>
    </ul>
    <p>On a success, you may also mark a stress to remove one Fear from the GM’s Fear Pool.</p>`,
  },
  {
    name: `Signature Move`,
    domainId: 'bone',
    level: 5,
    recallCost: 1,
    type: 'ability',
    effect: `<p></p>
    <p>You take on a signature move in battle that you can perform once per short rest. Name it and describe it. When you include its description in an action you’re taking, use a d20 instead of a d12 as your Hope die. If the attack succeeds, you may clear a Stress.</p>`,
  },
  {
    name: `Endurance`,
    domainId: 'bone',
    level: 6,
    recallCost: 0,
    type: 'ability',
    effect: `<p>During a short rest, you can always choose to do one of the long rest options instead. You may spend a Hope to let one additional party member do the same.</p>`,
  },
  {
    name: `Rapid Riposte`,
    domainId: 'bone',
    level: 6,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you successfully evade an attack from melee range, you can mark a Stress to automatically deal damage from an active weapon to the attacker.</p>`,
  },
  {
    name: `Bone Touched`,
    domainId: 'bone',
    level: 7,
    recallCost: 2,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Bone domain:</p>
    <ul>
      <li>Increase your Agility by +1.</li>
      <li>When you are attacked, you can mark an Armor Slot to increase your evasion against it by a value equal to your Proficiency.</li>
    </ul>`,
  },
  {
    name: `Cruel Precision`,
    domainId: 'bone',
    level: 7,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Whenever you make a successful attack with a weapon, add either your Finesse or Agility trait to the damage.</p>`,
  },
  {
    name: `Breaking Blow`,
    domainId: 'bone',
    level: 8,
    recallCost: 3,
    type: 'ability',
    effect: `<p>When you make a successful attack, you may mark a Stress to make the next successful attack against that same target do an additional 2d12 damage.</p>`,
  },
  {
    name: `Wrangle`,
    domainId: 'bone',
    level: 8,
    recallCost: 3,
    type: 'ability',
    effect: `<p>Make an Agility Roll against all enemies close to you. You may spend a Hope to move any enemies you are successful against to any position within close range.</p>
    <p>Use of this ability does not contribute a character token to the action tracker.</p>`,
  },
  {
    name: `A Thousand Cuts`,
    domainId: 'bone',
    level: 9,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Make an Attack Roll against all enemies in your weapon’s range. On a success against any targets, once per long rest, you may roll a number of weapon damage dice equal to double your proficiency plus your Finesse Trait. You can distribute this damage however you wish between any enemies you are successful against.</p>`,
  },
  {
    name: `Last Leg`,
    domainId: 'bone',
    level: 9,
    recallCost: 3,
    type: 'ability',
    effect: `<p>When you have 2 or less Hit Points remaining, always add your proficiency to your Evasion.</p>`,
  },
  {
    name: `Deathrun`,
    domainId: 'bone',
    level: 10,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Spend 3 Hope to run an open path through the battlefield and make an Attack Roll against all enemies within weapon range along your path. Of your successful targets, choose the order in which you deal damage. For the first, roll your weapon damage at +1 Proficiency. Then, remove one die from your pool and deal the remaining damage to the next target in descending order until you’re out of damage dice or enemies.</p>
    <p>You cannot target the same creature more than once.</p>`,
  },
  {
    name: `Unflappable`,
    domainId: 'bone',
    level: 10,
    recallCost: 1,
    type: 'ability',
    effect: `<p>After you successfully evade an attack, you may clear a Stress. If you successfully evade an attack and have no Stress to clear, instead gain a Hope.</p>`,
  },
  {
    name: 'Book of Ava',
    domainId: 'codex',
    level: 1,
    recallCost: 0,
    type: 'grimoire',
    effect: [
      {
        name: `Power Push`,
        description: `<p>Make a Spellcast Roll against a target in melee range. On a success, they are blasted back to far range and take d10 magic damage.</p>`,
      },
      {
        name: `Tava’s Armor`,
        description: `<p>You may spend a Hope to give a target you can touch +1d6 to their Armor score the next time they spend an Armor Slot. You cannot stack Tava’s Armor multiple times onto a single creature.</p>`,
      },
      {
        name: `Ice Spikes`,
        description: `<p>Make a Spellcast Roll to summon large ice spikes within very far range. You may also treat them as a ranged weapon against a target or group. On a success, they deal d6 physical damage.</p>`,
      },
    ],
  },
  {
    name: 'Book of Illiat',
    domainId: 'codex',
    level: 1,
    recallCost: 1,
    type: 'grimoire',
    effect: [
      {
        name: `Slumber`,
        description: `<p>Make a Spellcast Roll against a very close target. On a success, they fall into a temporary sleep until they take damage or the GM spends a Fear to awaken them.</p>`,
      },
      {
        name: `Arcane Barrage`,
        description: `<p>Spend any number of Hope to shoot magical projectiles and automatically strike an enemy within close range. Roll an amount of d6 equal to the Hope you spent, and deal that much magic damage.</p>`,
      },
      {
        name: `Telepathy`,
        description: `<p>You may open a line of mental communication with one target you can see. This connection lasts until you use this spell to connect with another creature.</p>`,
      },
    ],
  },
  {
    name: 'Book of Tyfar',
    domainId: 'codex',
    level: 1,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Wild Flame`,
        description: `<p>Make a Spellcast Roll against up to three enemies very close to you. A flame erupts from your hand, dealing 2d6 magic damage to any you succeed against.</p>`,
      },
      {
        name: `Magic Hand`,
        description: `<p>You can reach out with a magical hand the same size and strength as your own to anywhere within far range of you.</p>`,
      },
      {
        name: `Mysterious Mist`,
        description: `<p>Spend a Hope to cast a temporary, thick fog that encircles a stationary area up to very close range your current location. Everyone within is hidden to anybody outside the fog.</p>`,
      },
    ],
  },
  {
    name: 'Book of Sitil',
    domainId: 'codex',
    level: 2,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Adjust Appearance`,
        description: `<p>You can magically shift your appearance and clothing to avoid recognition.</p>`,
      },
      {
        name: `Parallela`,
        description: `<p>Spend a Hope to cast this spell on yourself or one ally close to you. The next time that creature makes an attack, they can split the damage between any targets in range that the attack roll succeeds against.</p>`,
      },
      {
        name: `Illusion`,
        description: `<p>Make a Spellcast Roll (14). On a success, create a temporary visual illusion no larger than you within close range that will last for as long as you look at it. It holds up to scrutiny until an observer is within melee range.</p>`,
      },
    ],
  },
  {
    name: 'Book of Vagras',
    domainId: 'codex',
    level: 2,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Runic Lock`,
        description: `<p>You can infuse a rune upon an object that can close (a lock, chest, box, bag, etc). It will lock the object from being opened by anyone besides those you choose. The spell can be broken by somebody with magic and an hour of time to study it.</p>`,
      },
      {
        name: `Arcane Door`,
        description: `<p>When you have no enemies in melee range, make a Spellcast Roll (13). On a success, spend Hope to disappear from where you are and reappear somewhere within far range you can see.</p>`,
      },
      {
        name: `Reveal`,
        description: `<p>Make a Spellcast Roll. If there is anything hidden within close range the roll would succeed against, it is no longer hidden.</p>`,
      },
    ],
  },
  {
    name: 'Book of Korvax',
    domainId: 'codex',
    level: 3,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Levitation`,
        description: `<p>Make a Spellcast Roll to temporarily lift and move a target you can see up into the air within close range of where it currently is.</p>`,
      },
      {
        name: `Recant`,
        description: `<p>You may spend a Hope to make a target roll a Reaction Roll (15). On a failure, they forget the last minute of your conversation.</p>`,
      },
      {
        name: `Rune Circle`,
        description: `<p>Spend a Hope to create a temporary magical circle on the ground around you. Any creatures in melee range of this circle, or who enter melee range of this circle, take 2d12 magic damage and are pushed out at the end of their action.</p>`,
      },
    ],
  },
  {
    name: 'Book of Norai',
    domainId: 'codex',
    level: 3,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Mystic Tether`,
        description: `<p>Make a Spellcast Roll against a target within far range. On a success, they are temporarily prevented from moving. If you target a flying creature, they are instead brought to the ground and are temporarily unable to fly.</p>`,
      },
      {
        name: `Fireball`,
        description: `<p>Make a Spellcast Roll against a target within very far range. On a success, you throw a sphere of fire towards them that explodes upon impact. The target and all creatures very close to them must make a Reaction Roll (12). On a failure, they take d8 magic damage. On a success, they take half damage (rounded up).</p>`,
      },
    ],
  },
  {
    name: 'Book of Exota',
    domainId: 'codex',
    level: 4,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Counterspell`,
        description: `<p>Make a Spellcast Roll against a magical effect or spell about to happen within close range. On a success, the GM will tell you how many Stress you can spend to end it.</p>`,
      },
      {
        name: `Create Construct`,
        description: `<p>Spend a Hope to choose a group of objects around you and create an animated construct from them that obeys basic commands. When it acts, roll an amount of d6 equal to your Knowledge Trait and pick the highest result. On a 6, it succeeds. On a 3-5, it succeeds, but with complications. On a 2-1, or when it takes damage, it returns to raw material.</p>
        <p>Its attacks deal 2d10 physical damage. You can only hold one construct at a time.</p>`,
      },
    ],
  },
  {
    name: 'Book of Grynn',
    domainId: 'codex',
    level: 4,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Arcane Deflection`,
        description: `<p>Once per long rest, spend a Hope to completely negate any incoming damage from a single attack on you or an ally very close to you.</p>`,
      },
      {
        name: `Time Lock`,
        description: `<p>Target a non-living object within far range. That object stops in time and space exactly where it is for a number of minutes equal to your Level. If a creature tries to move it, make a Spellcast Roll against them to maintain this spell.</p>`,
      },
      {
        name: `Wall of Flame`,
        description: `<p>Mark a Stress to create a temporary wall of magical flame between two points within far range. Anything that passes through it takes 4d10 magic damage.</p>`,
      },
    ],
  },
  {
    name: `Manifest Wall`,
    domainId: 'codex',
    level: 5,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Spellcast Roll (15). On a success, once per short rest, spend a Hope to create a temporary magical wall at any angle up to 50 feet high from one point, within far range of you, to another. Any creatures or objects in its path are shunted to one side. It will dissipate at the end of your next long rest, or when you use this spell again.</p>`,
  },
  {
    name: `Teleport`,
    domainId: 'codex',
    level: 5,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Once per long rest, you have the ability to instantly teleport yourself and a number of others within close range up to your Level somewhere you’re aware of. Choose one option below to gain additional modifiers, then make a Spellcast Roll (16):</p>
    <ul>
      <li>If you know the place very well, take +5.</li>
      <li>If you’ve visited the place frequently, take +3.</li>
      <li>If you’ve visited the place infrequently, take +1.</li>
      <li>If you’ve only been there once, no modifiers.</li>
      <li>If you’ve never been there, take -4.</li>
    </ul>
    <p>On a success, you appear where you were intending to go. On a failure, you appear off course, with the range of failure signifying how far off course.</p>`,
  },
  {
    name: `Banish`,
    domainId: 'codex',
    level: 6,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Choose a target creature within close range. You can temporarily banish them from this realm. Roll an amount of d20s equal to your Spellcast Trait and tell the GM the highest result. The GM must make a Reaction Roll with a target number of this result.</p>
    <p>If the target succeeds, they mark a Stress. If they fail, once per short rest, they are banished. Every time any player rolls with Fear, the GM reduces the target number by one and makes another Reaction Roll. If it succeeds, the creature returns from banishment.</p>`,
  },
  {
    name: `Sigil of Retribution`,
    domainId: 'codex',
    level: 6,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Mark a Stress to mark a close enemy with a Sigil of Retribution. Every time that enemy does damage to you or your allies, put a d8 on this card up to a maximum of your level. Any time you attack this enemy, you may choose to roll these dice and add their value to your total damage. This spell ends when you cast this spell on another creature.</p>`,
  },
  {
    name: 'Book of Homet',
    domainId: 'codex',
    level: 7,
    recallCost: 0,
    type: 'grimoire',
    effect: [
      {
        name: `Pass Through`,
        description: `<p>Make a Spellcast Roll (13). On a success, once per short rest, you and anyone who is touching you can pass through a solid object like a wall or door. The solid object must not be thicker than a distance within close range of where the spell was cast.</p>`,
      },
      {
        name: `Plane Gate`,
        description: `<p>Make a Spellcast Roll (14). On a success, once per long rest, you open a gateway to a location in another dimension or plane of existence that you are aware of. This gateway lasts for 1 minute, or until you wish it to close.</p>`,
      },
    ],
  },
  {
    name: `Codex Touched`,
    domainId: 'codex',
    level: 7,
    recallCost: 2,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Codex domain:</p>
      <p></p>
      <ul>
        <li>You can always mark a Stress to add your proficiency to a spellcast roll.</li>
        <li>Once per short rest, you may replace this card with any card from your Vault instead without paying a Recall cost.</li>
      </ul>`,
  },
  {
    name: 'Book of Vyola',
    domainId: 'codex',
    level: 8,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Memory Delve`,
        description: `<p>Make a Spellcast Roll against a target within far range. On a success, you get into the mind of the creature and ask a question. The GM will describe any memories they have that pertain to the answer.</p>`,
      },
      {
        name: `Shared Clarity`,
        description: `<p>Once per long rest, spend Hope to choose two willing creatures. Whenever one of them should mark stress, they can choose between the two of them who marks it. This spell will automatically end at their next rest.</p>`,
      },
    ],
  },
  {
    name: `Haven`,
    domainId: 'codex',
    level: 8,
    recallCost: 3,
    type: 'spell',
    effect: `<p>Spend 2 Hope to summon your Haven, a large interdimensional home for you and your allies to take shelter in. When you do, a magical door appears somewhere within close distance of you and is only enterable by those you choose. Once inside, you can make the entrance invisible. You and anyone else inside can always exit. Once you leave, the doorway must be summoned again.</p>
    <p>When you take a rest within your own Haven, you can take an additional Downtime Action.</p>`,
  },
  {
    name: 'Book of Ronin',
    domainId: 'codex',
    level: 9,
    recallCost: 4,
    type: 'grimoire',
    effect: [
      {
        name: `Transform`,
        description: `<p>Make a Spellcast Roll (15). On a success, immediately transform into the shape of an inanimate object you can picture in your mind no larger than twice your normal size. You can remain in this shape until you take Hit Point damage. You can move in this form, but it might draw attention.</p>`,
      },
      {
        name: `Stable Portal`,
        description: `<p>Once per long rest, mark a Stress and choose two points within very far distance of you. A temporary portal will open up at both of those points, and any creature may use this portal to move between these two points freely. The spell will end at your next short rest.</p>`,
      },
    ],
  },
  {
    name: 'Disintegration Wave',
    domainId: 'codex',
    level: 9,
    recallCost: 4,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (14). On a success, once per long rest, the GM will tell you what enemies within far range have a difficulty of 14 or lower. You may mark a Stress for each one you wish to hit with this spell. They are immediately killed and cannot come back to life by any means.</p>`,
  },
  {
    name: `Book of Yarrow`,
    domainId: 'codex',
    level: 10,
    recallCost: 2,
    type: 'grimoire',
    effect: [
      {
        name: `Timejammer`,
        description: `<p>Make a Spellcast Roll (18). On a success, time temporarily slows to a halt for everyone within far range except for you. It automatically resumes the next time you make an action roll that targets another creature or after a number of minutes equal to your Knowledge Trait.</p>`,
      },
      {
        name: `Magic Immunity`,
        description: `<p>Spend 5 Hope to become immune to magic damage until your next short rest.</p>`,
      },
    ],
  },
  {
    name: `Transcendent Union`,
    domainId: 'codex',
    level: 10,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Once per long rest, spend 5 Hope to cast this spell on two or more willing creatures that wish to be bonded. Until your next short rest, any creatures that have this union with each other can always share Hit Points Slots and Stress Slots between them.</p>`,
  },
  {
    name: `Deft Deceiver`,
    domainId: 'grace',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>Spend a Hope to take advantage on a roll you make to deceive or trick someone into believing a lie you tell them.</p>`,
  },
  {
    name: `Enrapture`,
    domainId: 'grace',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a close target.</p>
    <p>On a success, you can temporarily keep their attention on you, narrowing their field of view and drowning out any sound but your voice. You may also mark a Stress on a success to deal 2 Stress to the target.</p>`,
  },
  {
    name: `Inspirational Words`,
    domainId: 'grace',
    level: 1,
    recallCost: 0,
    type: 'spell',
    effect: `<p>You can imbue your speech with enhancing power. You can mark a Stress when you recite your words and choose an option from the list below to grant to an ally who hears it:</p>
    <ul>
      <li>Clear a Stress.</li>
      <li>Heal a Hit Point.</li>
      <li>Gain a Hope.</li>
    </ul>`,
  },
  {
    name: `Tell No Lies`,
    domainId: 'grace',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a target within very close range. On a success, they can’t lie to you while they remain within close range, but they are not compelled to speak. If you ask them a question and they refuse to answer, they mark a stress and the spell ends.</p>`,
  },
  {
    name: `Thought Delver`,
    domainId: 'grace',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>You can peek into the minds of others. Spend a Hope to read the vague surface thoughts of a target within far range. Make a Spellcast Roll against the target to delve for deeper, more hidden thoughts.</p>`,
  },
  {
    name: `Hypnotic Shimmer`,
    domainId: 'grace',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against any enemies in front of you within close range. On a success, once per short rest, you create an illusion of flashing colors and lights that can temporarily stun any enemies you succeed against, leaving them unable to move or act. While in combat, the GM can’t spend tokens from the action tracker to activate stunned creatures.</p>`,
  },
  {
    name: `Invisibility`,
    domainId: 'grace',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (10) while touching a creature. On a success, mark a Stress and the target becomes hidden for 1 hour, until you cast this spell again, or until the target makes an Attack or Spellcast Roll.</p>`,
  },
  {
    name: `Soothing Speech`,
    domainId: 'grace',
    level: 4,
    recallCost: 1,
    type: 'ability',
    effect: `<p>During a short rest, when you use the Tend to Wounds downtime action on another character, you may speak supportive words to heal an extra Hit Point on them. When you do, also heal two of your own.</p>`,
  },
  {
    name: `Through Your Eyes`,
    domainId: 'grace',
    level: 4,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Point to a target within very far range. You can now see through their eyes and hear through their ears. You may return to this vision at any time until you cast another spell or mark a Hit Point.</p>`,
  },
  {
    name: `Secret Plan`,
    domainId: 'grace',
    level: 5,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Once per long rest, you may explain how you’ve secretly had preparation in place for the kind of situation you’re in, and describe what it is. The GM will tell you how much Stress you need to mark for it.</p>
    <ul>
      <li>1 Stress for something reasonable.</li>
      <li>2 Stress for something reasonable but complex.</li>
      <li>4 Stress for something difficult and complex.</li>
    </ul>`,
  },
  {
    name: `Words of Discord`,
    domainId: 'grace',
    level: 5,
    recallCost: 1,
    type: 'spell',
    effect: `<p>When you whisper words of discord to an adversary in melee range, make a Spellcast Roll (13). On a success, the GM immediately makes an attack against another enemy instead of against you or your allies. If in combat, the GM spends a token from the action tracker to do so.</p>
    <p>Once this attack is over, the target will realize what has happened. On the next use of Words of Discord against them, add +5 to the Spellcast Roll difficulty.</p>`,
  },
  {
    name: `Never Upstaged`,
    domainId: 'grace',
    level: 6,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you mark one or more Hit Points from an attack, you may mark a Stress to place a number of tokens on this card equal to the number of Hit Points you marked. On your next attack, you may increase your Proficiency by +1 for each token on this card, then clear all tokens.</p>
    <p>If you have any tokens remaining on this card when you take a long rest, clear that much Stress.</p>`,
  },
  {
    name: `Share the Burden`,
    domainId: 'grace',
    level: 6,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Once per short rest, you can absorb Stress from a willing creature you can touch. The target describes what intimate knowledge or emotions leak from their mind telepathically in this moment between you. Then, transfer any number of their marked Stress to you and you also gain a Hope for each Stress transferred.</p>`,
  },
  {
    name: `Endless Charisma`,
    domainId: 'grace',
    level: 7,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Whenever you make an Action Roll to persuade, lie, or garner favor, you can spend a Hope to reroll the Hope or Fear die and take the new result instead.</p>`,
  },
  {
    name: `Grace Touched`,
    domainId: 'grace',
    level: 7,
    recallCost: 2,
    type: 'spell',
    effect: `<p>When a majority of the domain cards in your loadout are from the Grace domain:</p>
    <ul>
      <li>You may mark an Armor Slot instead of marking Stress.</li>
      <li>When you get a critical success on an Action Roll, an enemy within close range takes 2 Stress, or an ally within close range gains 2 Hope</li>
    </ul>`,
  },
  {
    name: `Astral Projection`,
    domainId: 'grace',
    level: 8,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Once per long rest, mark a Stress to create a projected copy of yourself that can appear anywhere you’ve been before.</p>
    <p>You can see and hear through it as though it were you, and can affect the world as though you were there. Anyone investigating this projection can tell it’s of magical origin. This spell ends at your next short rest or when your projection takes any damage.</p>`,
  },
  {
    name: `Mass Enrapture`,
    domainId: 'grace',
    level: 8,
    recallCost: 3,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against all enemies within far range. Any you succeed against temporarily keep their attention on you, narrowing their field of view and drowning out any sound but your own. You may also mark a Stress to deal Stress to all targets who are enraptured.</p>`,
  },
  {
    name: `Copycat`,
    domainId: 'grace',
    level: 9,
    recallCost: 0,
    type: 'ability',
    effect: `<p>Once per long rest, this card can mimic the features of any other active Domain card in another player’s loadout of Level 8 or lower. You must spend Hope equal to half the card’s level (rounded up), and this lasts until your next short rest.</p>`,
  },
  {
    name: `Master of the Craft`,
    domainId: 'grace',
    level: 9,
    recallCost: 3,
    type: 'ability',
    effect: `<p>Add +3 to any two of your Experiences, or +5 to any one of your Experiences. Then permanently put this card into your Vault.</p>`,
  },
  {
    name: `Encore`,
    domainId: 'grace',
    level: 10,
    recallCost: 1,
    type: 'spell',
    effect: `<p>When an ally within close distance of you deals damage to an enemy, you may make a Spellcast Roll against that same enemy. On a success, you immediately do the same amount of damage to them as your ally dealt. If your Spellcast Roll succeeds with Fear, place this card into your Vault afterward.</p>`,
  },
  {
    name: `Notorious`,
    domainId: 'grace',
    level: 10,
    recallCost: 1,
    type: 'spell',
    effect: `<p>People know who you are and what you’ve done, and will treat you differently because of it. Whenever you leverage your notoriety to get what you want, mark a Stress before you roll to take +10 to the result. All food and drinks for you are always free wherever you go, and everything else you buy is reduced in price by one chest of gold (to a minimum of one handful).</p>
    <p>This card must remain in your loadout, but doesn’t count towards your domain card maximum.</p>`,
  },
  {
    name: `Pick and Pull`,
    domainId: 'midnight',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>You have advantage on any attempt to pick a non-magical lock, disarm a trap, or steal an item from a target (either through stealth or by force).</p>`,
  },
  {
    name: `Rain of Blades`,
    domainId: 'midnight',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Spend 2 Hope to conjure throwing blades that strike any enemies close to you. Make a Spellcast Roll and all targets that you succeed against take d10 magic damage.</p>
    <p>If any targets you hit are currently Vulnerable, they take an additional 2d10 magic damage.</p>`,
  },
  {
    name: `Uncanny Disguise`,
    domainId: 'midnight',
    level: 1,
    recallCost: 0,
    type: 'spell',
    effect: `<p>When you have a few minutes to prepare, you can mark a Stress to don the facade of any humanoid you can picture clearly in your mind. While disguised, all Presence rolls to avoid scrutiny have advantage. The spell will begin to fade after one hour.</p>`,
  },
  {
    name: `Midnight Spirit`,
    domainId: 'midnight',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Spend a Hope to summon an arcane spirit the same size as yourself that can move or carry things you can see until your next short rest.</p>
    <p>You may also send it to make an attack on an enemy. When you do, make a Spellcast Roll against a target within very far range of you. On a success, roll an amount of d6 equal to your Spellcast Trait and deal that much magic damage to the target. The spirit then dissipates.</p>
    <p>You can only have one spirit at a time.</p>`,
  },
  {
    name: `Shadowbind`,
    domainId: 'midnight',
    level: 2,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against all enemies within Very Close range. All it succeeds against have their shadows temporarily pinned where they are, making them restrained.</p>`,
  },
  {
    name: `Chokehold`,
    domainId: 'midnight',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>While hidden, when you successfully position yourself behind a creature that’s about your size, you can mark a Stress to pull them into a chokehold or equally compromising position and make them temporarily Vulnerable.</p>
    <p>Every Attack Roll against them while they are Vulnerable from your chokehold adds 2d6 to the damage roll.</p>`,
  },
  {
    name: `Veil of Shadows`,
    domainId: 'midnight',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (13). On a success, you can create a temporary curtain of darkness from one point far from you to another as tall as twice your height. Only you can see through this darkness. Gain advantage on any attacks you make through the wall and you are considered hidden to any enemies on the other side. It will hold until you cast another spell.</p>`,
  },
  {
    name: `Stealth Expertise`,
    domainId: 'midnight',
    level: 4,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you attempt to move through a dangerous area without being noticed, if you roll with Fear, you can always mark a Stress to change it to a roll with Hope instead.</p>
    <p>If an ally within close range is also attempting to move without being noticed and rolls with Fear, you can mark a Stress to change their roll to a roll with Hope as well.</p>`,
  },
  {
    name: `Twilight Mark`,
    domainId: 'midnight',
    level: 4,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a target within very close range. On a success, spend a Hope to conjure a dark glyph upon their body that exposes their weak points, temporarily reducing the target’s Difficulty number by 1 + your Knowledge trait.</p>`,
  },
  {
    name: `Hush`,
    domainId: 'midnight',
    level: 5,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a target within close range. On a success, spend a Hope to temporarily conjure suppressive magic around the target that encompasses everything within very close range of them and follows them as they move.</p>
    <p>The target and anything within the area cannot make noise and cannot cast spells until the GM spends 2 Fear to end it, you cast this spell again, or you take Major damage.</p>`,
  },
  {
    name: `Phantom Retreat`,
    domainId: 'midnight',
    level: 5,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Spend a Hope to activate Phantom Retreat where you’re currently standing. You may spend another Hope at any time before your next short rest to disappear from where you are and reappear where you were standing when you activated Phantom Retreat. This will end the spell.</p>`,
  },
  {
    name: `Dark Whispers`,
    domainId: 'midnight',
    level: 6,
    recallCost: 0,
    type: 'spell',
    effect: `<p>You can speak into the mind of any person you’ve ever seen or know the true name of.</p>`,
  },
  {
    name: `Mass Disguise`,
    domainId: 'midnight',
    level: 6,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you have a few minutes of silence to focus, you can mark a Stress to change the appearance of every willing target close to you, lasting for one hour. The new form must share a general body structure and size, and can be somebody or something you’ve seen before or entirely fabricated.</p>
    <p>A disguised creature’s Presence rolls to shrug off scrutiny have Advantage.</p>`,
  },
  {
    name: `Midnight Touched`,
    domainId: 'midnight',
    level: 7,
    recallCost: 2,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Midnight domain:</p>
    <ul>
      <li>Whenever you succeed with Fear, you gain a Hope.</li>
      <li>If your Fear die ever rolls a 1 or 2, you may reroll it once and take the new result instead.</li>
    </ul>`,
  },
  {
    name: `Phantom Dodge`,
    domainId: 'midnight',
    level: 7,
    recallCost: 1,
    type: 'spell',
    effect: `<p>When you successfully evade physical damage, you can choose to envelope yourself in shadow, becoming Hidden and teleporting to anywhere in close range of the target that attacked you. You remain Hidden until the next time you make an action roll.</p>`,
  },
  {
    name: `Rune Thief`,
    domainId: 'midnight',
    level: 8,
    recallCost: 1,
    type: 'spell',
    effect: `<p>When you should take magic damage, place tokens on this card equal to the number of hit points that damage would do. Then, reduce the incoming damage in half (rounded up).</p>
    <p>When you make a successful attack roll against a target, you can spend any number of the tokens from this card to deal an additional 1d6 magic damage per token. On your next rest, clear all tokens.</p>`,
  },
  {
    name: `Shadowhunter`,
    domainId: 'midnight',
    level: 8,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Under the cover of shadow, your prowess is enhanced. While you are shrouded in low light or darkness, you gain +1 Proficiency to your weapon attacks and you can add your Spellcast trait to your Evasion.</p>`,
  },
  {
    name: `Night Terror`,
    domainId: 'midnight',
    level: 9,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Once per short rest, choose any targets within close range. For them, your visage changes into something of nightmarish horror. They must make a successful Reaction Roll (16) or become temporarily Horrified. While Horrified, they are Vulnerable and group together as closely as possible. You steal an amount of Fear from the GM equal to the number targets that are Horrified (or as many as they have, if it’s not enough). For each Fear stolen, roll a d6 and deal that much damage to each Horrified target. Discard the stolen Fear.</p>`,
  },
  {
    name: `Twilight Toll`,
    domainId: 'midnight',
    level: 9,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Choose a target within far range to mark. Each time you succeed on any Action Roll against them that doesn’t result in making a damage roll, place a token on this card. When you roll damage against this target, you can spend any number of tokens to deal an additional 1d12 per token spent. You may only hold Twilight Toll on one creature at a time.</p>`,
  },
  {
    name: `Eclipse`,
    domainId: 'midnight',
    level: 10,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (16). On a success, once per long rest, spend 3 Hope to plunge the entire area within far range into magical shadow that moves with you. Whenever you or an ally within this shadow should be damaged by an attack or spell, roll 1d6. On a result of 5+, the attack or spell misses.</p>
    <p>In addition, when you or an ally rolls a successful Attack Roll with Hope against an enemy that is within this shadow, the enemy takes a Stress.</p>
    <p>This spell lasts for until the GM spends 3 Fear, or you take Severe damage.</p>`,
  },
  {
    name: `Specter of the Dark`,
    domainId: 'midnight',
    level: 10,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Mark a Stress to move like a ghost. While in this form, you are visible but can float and pass through solid objects for a number of minutes equal to your Spellcast Trait. During this time, you are immune to physical damage.</p>`,
  },
  {
    name: `Gifted Tracker`,
    domainId: 'sage',
    level: 1,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll to track or ask the GM one question you’d be able to learn about a specific creature or group of creatures based on signs of their passage. If you spend Hope before the roll, you can double your spellcast trait as the modifier.</p>
    <p>If you encounter any creatures you’ve tracked, your Evasion against them is +2.</p>`,
  },
  {
    name: `Nature’s Tongue`,
    domainId: 'sage',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>You can speak the language of the hidden, natural world. When you want to speak to the plants and animals around you, make an Instinct Roll (12). On a success, they’ll give you the information they know. With Fear, their knowledge might be limited or come at a cost.</p>
    <p>In addition, whenever you make a Spellcast Roll while within a natural environment, you may spend a Hope before the roll to add +1 to the result.</p>`,
  },
  {
    name: `Vicious Entangle`,
    domainId: 'sage',
    level: 1,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Make a Spellcast Roll against a target within far range. On a success, roots and vines reach out from the ground and temporarily Restrain them, dealing 1d8 physical damage.</p>
    <p>On a success, you may also spend a Hope to temporarily Restrain any enemies very close to your target.</p>`,
  },
  {
    name: `Conjure Swarm`,
    domainId: 'sage',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: [
      {
        name: `Tekaira Armored Beetles`,
        description: `Mark an Armor Slot to encircle yourself in beetles. When you take damage, you can reduce the damage by your Armor Score. Anytime you reduce damage in this way, the beetles will dissipate unless you spend a Hope to keep them active.`,
      },
      {
        name: `Fire Flies`,
        description: `Make a Spellcast Roll against any close enemies. On a success, spend Hope to have the fire flies swarm them, doing 2d8 magic damage to all targets you succeeded against.`,
      },
    ],
  },
  {
    name: `Natural Familiar`,
    domainId: 'sage',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Spend a Hope to summon a small nature spirit or forest critter to your side until your next short rest, you use this spell again, or until it takes damage. If you spend an additional Hope, they can be a familiar that flies. You can communicate with it, you may make a Spellcast Roll to command it to perform simple tasks, and you can mark a Stress to see through its eyes.</p>
    <p>While this creature is summoned, when you deal damage to an enemy the critter is in melee range with, you deal an additional 1d6 physical damage.</p>`,
  },
  {
    name: `Corrosive Projectile`,
    domainId: 'sage',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a creature within far range. On a success, mark a Stress, deal d6 magic damage to the target, and the target’s Difficulty value is temporarily reduced by 1.</p>`,
  },
  {
    name: `Towering Stalk`,
    domainId: 'sage',
    level: 3,
    recallCost: 1,
    type: 'spell',
    effect: `<p>You can conjure a thick, twisting stalk within close range that can be easily climbed. It’s height can grow up to far range.</p>
    <p>When you conjure it, you may also mark a Stress to use it as an attack. If you do, make a Spellcast Roll against any group of targets within close range. It erupts beneath any you’re successful against, lifting them into the air and dropping them for 3d8 physical damage.</p>`,
  },
  {
    name: `Death Grip`,
    domainId: 'sage',
    level: 4,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Choose an option below and make a Spellcast Roll against the target. On a success, vines reach out from your hands, causing the chosen effect and making them restrained.</p>
    <ul>
      <li>Pull the target into melee range of you or pull yourself into melee range with it.</li>
      <li>Constrict the target to deal 2 Stress.</li>
      <li>Any enemies between you and the target must make a Reaction Roll (13) or be hit by vines, dealing 3d6 physical damage.</li>
    </ul>`,
  },
  {
    name: `Healing Field`,
    domainId: 'sage',
    level: 4,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Once per long rest, you can conjure a field of small, healing plants around you. Everywhere within close range of you bursts to life with vibrant nature, causing you and your allies in the area to immediately heal one Hit Point.</p>
    <p>Spend a Hope to increase the healing power of this spell to two Hit Points.</p>`,
  },
  {
    name: `Grove Dome`,
    domainId: 'sage',
    level: 5,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (13) to grow a natural barricade in the shape of a dome for you and up to one ally to hide within. You immediately become hidden as long as you stay within, but may reveal yourself out the top of the dome to make ranged attacks. The dome has the damage thresholds below and lasts until it takes three Hit Points. Place tokens on this card to represent marking Hit Points.</p>
    <p>Minor (Mark 1) 1 | Major (Mark 2) 15 | Severe (Mark 3) 30</p>`,
  },
  {
    name: `Thorn Skin`,
    domainId: 'sage',
    level: 5,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Once per short rest, spend a Hope while touching a willing creature and place a number of tokens equal to your Spellcast Trait on this card. Whenever the target takes damage, you can remove any number of these tokens to roll that number of d6s. Then reduce the incoming damage by that amount and, if the attacker is in melee, deal that amount of damage back to them.</p>
    <p>When you take a rest, clear all tokens.</p>`,
  },
  {
    name: `Conjured Steeds`,
    domainId: 'sage',
    level: 6,
    recallCost: 0,
    type: 'spell',
    effect: `<p>Spend a Hope to conjure a number of magical steeds (horses, camels, elephants, etc.) up to your level that you and allies can ride upon until your next long rest or the steed takes any damage. These will double your land speed when traveling and let you move to somewhere within far range without having to roll when in danger. Any Attack Rolls made atop the steeds are at -2, but add +2 to their damage rolls.</p>`,
  },
  {
    name: `Forager`,
    domainId: 'sage',
    level: 6,
    recallCost: 1,
    type: 'ability',
    effect: `<p>As an additional downtime option, you may roll 1d6 to see what you forage. Work with the GM to describe it, and add it to your inventory as a Consumable. Your party may carry up to five foraged Consumables at a time.</p>
    <ol>
      <li>A unique food. (Clear 2 Stress)</li>
      <li>A beautiful relic. (Earn 2 Hope)</li>
      <li>An arcane rune. (+2 to a Spellcast Roll)</li>
      <li>A healing vial. (Clear 2 Hit Points)</li>
      <li>A luck charm. (Reroll all Duality or Damage Dice)</li>
      <li>You may choose one of the above options.</li>
    </ol>`,
  },
  {
    name: `Monster of Nature`,
    domainId: 'sage',
    level: 7,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Once per long rest, mark a Stress to channel the natural world around you and use it to transform into something monstrous. Describe how your appearance changes, then place a d6 on this card at a value of 6.</p>
    <p>While the Monster of Nature die is active, it adds its value to every Action Roll you make. After you add its value to a roll, reduce it by 1. When the die’s value reaches 0 or you take a rest, this form drops and you must mark an additional Stress.</p>`,
  },
  {
    name: `Sage Touched`,
    domainId: 'sage',
    level: 7,
    recallCost: 2,
    type: 'spell',
    effect: `<p>When a majority of the domain cards in your loadout are from the Sage domain:</p>
    <ul>
      <li>When you are in a natural environment, you always take +1 to your Spellcast Rolls.</li>
      <li>Once per short rest, before you roll, treat your Agility or Instinct Trait as though it were double its current value.</li>
    </ul>`,
  },
  {
    name: `Forest Sprites`,
    domainId: 'sage',
    level: 8,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (13). On a success, spend any number of Hope to create an equal number of small Forest Sprites that appear wherever you choose within far range, distracting enemies and aiding allies. Describe what form they take.</p>
    <p>Attack Rolls against an enemy within melee range of a Sprite gain +3. Any allies who mark an Armor Slot while in melee range of a Sprite add +3 to their Armor Score.</p>
    <p>A Sprite vanishes after granting a bonus or taking any damage.</p>`,
  },
  {
    name: `Rejuvenation Barrier`,
    domainId: 'sage',
    level: 8,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (15). On a success, once per short rest, you can create a temporary barrier of protective energy around you. You and all allies within very close range of you when it is first cast heal 1d4 Hit Points. While the barrier is up, you and all allies within have Resistance to physical damage.</p>
    <p>This barrier follows you as you move and lasts until the GM spends 2 Fear to end it.</p>`,
  },
  {
    name: `Fane of the Wilds`,
    domainId: 'sage',
    level: 9,
    recallCost: 2,
    type: 'ability',
    effect: `<p>After a long rest, place a number of tokens equal to how many Sage Domain cards you have in your Loadout and Vault on this card.</p>
    <p>Whenever you would make a Spellcast Roll, you may spend any number of these tokens before the roll to add +1 to the result per token.</p>
    <p>Whenever you roll a Critical Success on a Spellcast Roll for a Sage spell, gain a token.</p>
    <p>When you take a long rest, clear all tokens.</p>`,
  },
  {
    name: `Plant Dominion`,
    domainId: 'sage',
    level: 9,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (18). On a success, you reshape the natural world, changing the surrounding plant life within very far distance of you. You can grow trees instantly, clear a path through dense vines, create a wall of thick roots, etc.</p>
    <p>If you create a hostile environment, anyone who moves into or through it takes 5d10 physical damage.</p>`,
  },
  {
    name: `Force of Nature`,
    domainId: 'sage',
    level: 10,
    recallCost: 2,
    type: 'spell',
    effect: `<p>You can mark a Stress to transform into a hulking nature spirit, gaining the following benefits:</p>
    <p>You gain +2 Strength, +2 Agility, and +2 Finesse.</p>
    <ul>
      <li>Whenever you successfully hit with an Attack or Spell, you deal an additional 1d10 damage.</li>
      <li>When you defeat a creature within close range, you absorb them and clear an Armor Slot.</li>
      <li>You cannot be restrained.</li>
    </ul>
    <p>Before you make an Action Roll, you must spend a Hope. If you cannot, you revert to your normal form.</p>`,
  },
  {
    name: `Tempest`,
    domainId: 'sage',
    level: 10,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Choose one of the following tempests and make a Spellcast Roll against all targets in far range. Any you are successful against experience its effects until the GM spends 3 Fear to end this spell:</p>
    <p><em>Blizzard</em> - Immediately deal 2d20 magic damage and make them vulnerable.</p>
    <p><em>Hurricane</em> - Immediately deal 3d10 magic damage. Choose a direction the wind is blowing. Targets can’t move against the wind.</p>
    <p><em>Sandstorm</em>Immediately deal 5d6 magic damage and any ranged attacks are now at disadvantage.</p>`,
  },
  {
    name: `Bolt Beacon`,
    domainId: 'splendor',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against a target within far range. On a success, spend a Hope to send a bolt of shimmering light towards them. Treat it like a ranged weapon, dealing d8 magic damage that makes them glow brightly and become temporarily Vulnerable.</p>`,
  },
  {
    name: `Mending Touch`,
    domainId: 'splendor',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>You lay your hands upon a creature and channel healing magic to help close their wounds. When you can take a few minutes to focus on the person you’re helping, spend 2 Hope and heal a Hit Point or a Stress.</p>
    <p>Once per long rest, when you spend this healing time learning something new about them or revealing something about yourself, the 2 Hope you spend heals 2 Hit Points or 2 Stress instead.</p>`,
  },
  {
    name: `Reassurance`,
    domainId: 'splendor',
    level: 1,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Once per short rest, after an ally attempts an Action Roll, but before the consequences take place, you may offer assistance or words of support. When you do, they may reroll their dice. They must accept the result of this new roll.</p>`,
  },
  {
    name: `Final Words`,
    domainId: 'splendor',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (13). On a success, you can infuse a moment of life into a corpse in order to speak with it. If the result is with Hope, it will answer up to three questions. If the result is with Fear, only one. Once the spell ends or on a failure, the body will turn to dust.</p>`,
  },
  {
    name: `Healing Hands`,
    domainId: 'splendor',
    level: 2,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (13) and target a creature other than yourself in melee. On a success, mark a Stress to heal the target 2 Hit Points or 2 Stress. On a failure, mark a Stress to heal the target 1 Hit Point or 1 Stress.</p>`,
  },
  {
    name: `Conviction`,
    domainId: 'splendor',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>You speak with an unmatched power and grace. When you attempt to use this candor to de-escalate a violent situation or get someone to follow your lead, roll with advantage.</p>
    <p>Your conviction also emboldens you in moments of duress. When all of your Stress is marked, your attacks are made with +1 Proficiency.</p>`,
  },
  {
    name: `Second Wind`,
    domainId: 'splendor',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Once per short rest, when you make a successful strike against an enemy, you may clear 3 Stress or one Hit Point. On a success with Hope, you may also clear 3 Stress or one Hit Point of an ally who is within close range of you.</p>`,
  },
  {
    name: `Divination`,
    domainId: 'splendor',
    level: 4,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Once per long rest, you may spend 3 Hope to reach out to the forces beyond and ask one question about an event, person, place, or situation in the near future. Your vision of the world will momentarily twist and shape around you to show the answer, though it may be cryptic, obscured, or partial.</p>`,
  },
  {
    name: `Life Ward`,
    domainId: 'splendor',
    level: 4,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Spend 3 Hope to point at a close ally and mark them with a glowing sigil of protection. If this ally is ever required to make a death move for any reason, they ignore it and clear one hit point.</p>
    <p>This spell ends when it saves the target from a Death Move, it is cast on another target, or when you take a long rest.</p>`,
  },
  {
    name: `Shape Material`,
    domainId: 'splendor',
    level: 5,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Mark a Hope to adjust a section of natural material you are touching (like stone, ice, wood, etc) into a shape that suits your purpose. This material area can be no larger than you. Examples include forming a rudimentary tool or weapon, creating a door or passage, etc.</p>
    <p>You can only affect the material within close range of where you are touching it.</p>`,
  },
  {
    name: `Smite`,
    domainId: 'splendor',
    level: 5,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Spend 3 Hope to charge up a powerful smite. On the next successful attack, double your Proficiency on the damage roll, and this attack deals Magic damage, regardless of the weapon’s damage type.</p>`,
  },
  {
    name: `Restoration`,
    domainId: 'splendor',
    level: 6,
    recallCost: 2,
    type: 'spell',
    effect: `<p>After a long rest, place a number of tokens equal to your Spellcast Trait on this card. You can touch a creature and remove any number of tokens to heal them for 2 Hit Points per token. You can also remove a token when touching a creature to end the Vulnerable condition, a disease, or a magical ailment (though the GM might require additional tokens depending on the power of the ailment).</p>
    <p>When you take a long rest, clear all tokens.</p>`,
  },
  {
    name: `Zone of Protection`,
    domainId: 'splendor',
    level: 6,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (16). On a success, once per long rest, you can designate a point within far range of you and create a visible zone of protection there for all allies within very close range of that point. When you do, place a d8 on this card at its highest value. When taking damage, any allies in this zone automatically reduce it by that value, then reduce the die’s value by 1. This spell ends when the die reaches 0.</p>`,
  },
  {
    name: `Fountain of Life`,
    domainId: 'splendor',
    level: 7,
    recallCost: 1,
    type: 'spell',
    effect: `<p>Whenever you do damage to an enemy, you may spend a Hope to heal a single Hit Point on an ally within close range of you.</p>`,
  },
  {
    name: `Splendor Touched`,
    domainId: 'splendor',
    level: 7,
    recallCost: 2,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Splendor domain:</p>
    <ul>
      <li>Increase your Minor Damage Threshold by +3.</li>
      <li>Once per long rest, when incoming damage would require you to take a certain number of Hit Points, you may choose to take that much Stress or spend that much Hope instead.</li>
    </ul>`,
  },
  {
    name: `Shield Aura`,
    domainId: 'splendor',
    level: 8,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Mark a Stress to cast Shield Aura on a creature you can touch. Whenever they use an Armor Slot, they roll a d12 and add its value to their Armor Score. If the d12 result is equal to or above their current level, this spell ends. If the d12 result is below their current level, it stays active.</p>`,
  },
  {
    name: `Stunning Sunlight`,
    domainId: 'splendor',
    level: 8,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll against any enemies in front of you within far distance as you unleash powerful rays of burning sunlight. Spend a Hope for each enemy you succeed against that you want to affect, and they must make a Reaction Roll (14).</p>
    <p>On a success, they take 4d20 magic damage.</p>
    <p>On a failure, they take 4d20 magic damage and are temporarily stunned, keeping them from taking actions until the GM spends a Fear to remove this condition.</p>`,
  },
  {
    name: `Overwhelming Aura`,
    domainId: 'splendor',
    level: 9,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (15) to temporarily embody powerful presence. On a success, spend 2 Hope to make your Presence score equal to your Spellcast Trait until your next long rest.</p>
    <p>When you’re attacked while you have Overwhelming Aura active, the GM must always spend a Fear to target you.</p>`,
  },
  {
    name: `Salvation Beam`,
    domainId: 'splendor',
    level: 9,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (15). On a success, mark any amount of Stress to clear that many Hit Points on a line of allies within far range.</p>`,
  },
  {
    name: `Invigoration`,
    domainId: 'splendor',
    level: 10,
    recallCost: 4,
    type: 'spell',
    effect: `<p>When you or an ally close to you has used an ability or spell that has an exhaustion limit (once per short rest, once per long rest, etc.), you and any of these allies may spend any amount of Hope to roll that many d6. On a 6, you or your ally regain use of that ability or spell.</p>
    <p>This spell doesn’t work on any abilities or spells that have been permanently placed in your Vault.</p>`,
  },
  {
    name: `Resurrection`,
    domainId: 'splendor',
    level: 10,
    recallCost: 2,
    type: 'spell',
    effect: `<p>Make a Spellcast Roll (20). On a success, you may restore one creature who has been dead no longer than 100 years. Then roll a 1d6. On a 1-5, put this card into your Vault permanently.</p>
    <p>On a failure, this cannot be attempted again for at least a week, and the consequences of failing such powerful magic can have unexpected effects on the dead.</p>`,
  },
  {
    name: `Bare Bones`,
    domainId: 'valor',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>While this card is in your loadout, if you choose to not wear Armor, your Armor Score is equal to 3 + double your Strength Trait.</p>`,
  },
  {
    name: `Forceful Push`,
    domainId: 'valor',
    level: 1,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you make a successful melee attack, you can push the target out of melee range and spend Hope to make them temporarily Vulnerable.</p>
    <p>On a success with Hope, add an additional 1d6 to your damage dice on this attack.</p>`,
  },
  {
    name: `I Am Your Shield`,
    domainId: 'valor',
    level: 1,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When an ally very close to you is going to take damage, you may mark a stress to stand in its way and take the damage instead. Reduce the damage by a value equal to your Strength Trait. You may also reduce the damage by spending armor slots.</p>`,
  },
  {
    name: `Body Basher`,
    domainId: 'valor',
    level: 2,
    recallCost: 1,
    type: 'ability',
    effect: `<p>You use the full force of your body in the fight. On a successful melee attack, always add your Strength Trait to your damage total.</p>`,
  },
  {
    name: `Bold Presence`,
    domainId: 'valor',
    level: 2,
    recallCost: 0,
    type: 'ability',
    effect: `<p>Whenever you make a Presence roll against a hostile target, you can also add your Strength trait to the roll.</p>`,
  },
  {
    name: `Critical Inspiration`,
    domainId: 'valor',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you or an ally close to you rolls a critical success on an Attack Roll, whoever rolled the critical success may immediately clear a Hit Point or an additional Stress.</p>`,
  },
  {
    name: `Lean on Me`,
    domainId: 'valor',
    level: 3,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Once per long rest, when a character has failed at an action they were attempting, if you console or inspire them, you both clear 2 Stress.</p>`,
  },
  {
    name: `Goad Them On`,
    domainId: 'valor',
    level: 4,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Make a Presence roll against a target. On a success, the target takes a Stress and the next time they act, they target you with disadvantage.</p>`,
  },
  {
    name: `Support Tank`,
    domainId: 'valor',
    level: 4,
    recallCost: 2,
    type: 'ability',
    effect: `<p>When an ally close to you fails a roll, you may spend 2 Hope to allow them to reroll either their Hope or Fear die and take the new result instead.</p>`,
  },
  {
    name: `Armorer`,
    domainId: 'valor',
    level: 5,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Your Armor Score increases by +1 while this ability is in your loadout.</p>
    <p>During a short rest, if you choose to take the Repair Armor downtime action, everybody in your party also clears one additional Armor Slot.</p>`,
  },
  {
    name: `Rousing Strike`,
    domainId: 'valor',
    level: 5,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Once per short rest, when you roll a Critical Success on an Attack Roll, you and all allies that can see or hear you may clear a Hit Point or 1d4 Stress.</p>`,
  },
  {
    name: `Inevitable`,
    domainId: 'valor',
    level: 6,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Whenever you fail an Action Roll, your next Action Roll has Advantage.</p>`,
  },
  {
    name: `No Sweat`,
    domainId: 'valor',
    level: 6,
    recallCost: 0,
    type: 'ability',
    effect: `<p>When you help an ally, are part of a Group Action Roll, or initiate a Tag Team Roll, roll 1d6. On a 4+, you gain a Hope.</p>`,
  },
  {
    name: `Shrug It Off`,
    domainId: 'valor',
    level: 7,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When you would take damage, you may mark a Stress to reduce the severity of the damage by one Threshold. When you do, roll 1d6. If the result is a 2 or below, place this card into your Vault.</p>`,
  },
  {
    name: `Valor Touched`,
    domainId: 'valor',
    level: 7,
    recallCost: 1,
    type: 'ability',
    effect: `<p>When a majority of the domain cards in your loadout are from the Valor domain:</p>
    <ul>
      <li>Your Armor Score increases by +2 while this ability is in your loadout.</li>
      <li>When you mark one or more Hit Points from damage, roll 1d6. If you get a 5+, you can clear a Stress.</li>
    </ul>`,
  },
  {
    name: `Full Surge`,
    domainId: 'valor',
    level: 8,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Once per long rest, mark 3 Stress to push your body to its limits, increasing all of your Character Traits by +2. This lasts until your next rest.</p>`,
  },
  {
    name: `Ground Pound`,
    domainId: 'valor',
    level: 8,
    recallCost: 2,
    type: 'ability',
    effect: `<p>Spend 2 Hope to strike the ground where you stand and roll with Strength against any enemies within very close range of you. All you succeed against are thrown back to far range and must make a Reaction Roll (17). On a failure, they also take 4d10 damage. On a success, they take half damage instead (rounded up).</p>`,
  },
  {
    name: `Hold the Line`,
    domainId: 'valor',
    level: 9,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Spend a Hope to take a defensive stance that lasts until you move or fail a roll with Fear. While in this stance, note the area within close range of you. If any enemy ever occupies that area, they are immediately put into melee with you and are temporarily Restrained.</p>
    <p>The Restrained condition can only be ended if the GM spends 2 Fear to do it.</p>`,
  },
  {
    name: `Lead by Example`,
    domainId: 'valor',
    level: 9,
    recallCost: 3,
    type: 'ability',
    effect: `<p>Whenever you mark an Armor Slot, you can choose an ally who can see or hear you to gain a Hope or clear a Stress.</p>`,
  },
  {
    name: `Unbreakable`,
    domainId: 'valor',
    level: 10,
    recallCost: 4,
    type: 'ability',
    effect: `<p>When you mark your last Hit Point, instead of making a death move, you may roll a 1d6 and clear that many marked Hit Points. Then put this card into your Vault.</p>`,
  },
  {
    name: `Unyielding Armor`,
    domainId: 'valor',
    level: 10,
    recallCost: 1,
    type: 'ability',
    effect: `<p>Anytime you mark an Armor Slot, roll an amount of d6s equal to the Armor Slots you currently have marked. If any result in a 6, you don’t have to mark it.</p>`,
  },
];

export const getDomainCards = (domainId: string) => domainCards.filter((card) => card.domainId === domainId);

export const getCardsByLevel = (domainIds: string[], level: number) => {
  domainCards.filter((card) => card.level === level && domainIds.includes(card.domainId));
};

export default domainCards;
