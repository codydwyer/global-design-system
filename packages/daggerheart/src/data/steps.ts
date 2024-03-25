import { IStep } from "../types";

const steps: IStep[] = [
  {
    id: 1,
    index: 1,
    name: 'Choose a Class',
    description: `Your class represents what kind of
    character you’ll be playing and will give
    you access to certain abilities and spells
    during the game. Take the character
    sheet specific for this class.`
  },
  {
    id: 2,
    index: 2,
    name: 'Choose a Subclass',
    description: `Each class has a number of subclasses
    to choose from that help better define
    what kind of focus you’d like your
    character to have. Take the Foundation
    card for your chosen subclass.`
  },
  {
    id: 3,
    index: 3,
    name: 'Choose a Heritage',
    description: `Heritage is made up of both an Ancestry
    and a Community card. These two cards
    that establish your physical appearance
    and the kind of environment you grew
    up in.`
  },
  {
    id: 4,
    index: 4,
    name: 'Set your Traits & Evasion',
    description: `Distribute the values -1, 0, 0, +1, +1, +2 across
    your Character Traits. When rolling, you’ll add
    the value of that Character Trait to the roll.
    Then record your starting Evasion score.`
  },
  {
    id: 5,
    index: 5,
    name: 'Set your Thresholds & Hope',
    description: `Each class will start with its own Damage
    Thresholds detailed on the character sheet
    under the Hit Points section. Record these
    in their appropriate spaces. Then take
    2 Hope to start the game.`
  },{
    id: 6,
    index: 6,
    name: 'Choose starting weapons',
    description: `Decide what kind of weapons you want
    to start the game with, and record their
    details in the appropriate spaces.`
  },
  {
    id: 7,
    index: 7,
    name: 'Choose starting Armor',
    description: `Take one of the available starting armors,
    and record its details in the appropriate
    spaces.`
  },
  {
    id: 8,
    index: 8,
    name: 'Take your starting inventory',
    description: `The starting inventory for your class
    is listed on your character guide.
    Record those items in the Inventory
    section of your character sheet.`
  },
  {
    id: 9,
    index: 9,
    name: 'Choose a description',
    description: `Make choices from the available options
    on your character guide or create your
    own. This will help you start to build out
    your character’s look and attitude.`
  },
  {
    id: 10,
    index: 10,
    name: 'Take domain deck cards',
    description: `Each class is made up of two different
    domains, listed below the class name on
    the character sheet. Choose two cards
    total from the Level 1 cards in those
    domains from the domain decks. You may
    share these decks with other classes. If
    you do, make sure to talk with them about
    what cards they’re interested in as well.`
  },
  {
    id: 11,
    index: 11,
    name: 'Answer background questions',
    description: `Use the background questions on your
    character guide as a jumping off point
    to build out your character’s history.`
  },
  {
    id: 12,
    index: 12,
    name: 'Generate Experience',
    description: `Use all of the choices and backstory
    you’ve made about your character
    so far to generate their Experience,
    a set of narrative words or phrases
    that represent the kinds of things
    they’ve learned or become on their
    journey so far. Assign one +2 and the
    other +1 as their starting values.`
  },
  {
    id: 13,
    index: 13,
    name: 'Record your name & pronouns',
    description: `Create a name for your character and
    choose what pronouns they use. Then
    share your character with the rest of
    the table when they’re ready.`
  },
  {
    id: 14,
    index: 14,
    name: 'Create connections',
    description: `Ask any of the Connection questions
    on your character guide to the other
    characters at the table, or generate
    your own. Use this as an opportunity
    to also discuss how you all met, what
    brought you together, and why you’ve
    decided to travel as a party.`
  }
]

export default steps;