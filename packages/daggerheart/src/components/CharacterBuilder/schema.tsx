import { PanelType } from './Panel';

export interface IBuilderStep {
  id: string;
  title: string;
  attributes: string[];
  subtitle?: string[];
  prerequesites?: string[];
}

export type TField = 'text' | 'number' | 'selection';

export interface IBuilderAttribute {
  id: string;
  label: string;
  field: TField;
  panel: PanelType;
  className?: string;
  prerequesites?: string[];
}

export interface IBuilderSchema {
  steps: IBuilderStep[];
  attributes: IBuilderAttribute[];
}

const schema: IBuilderSchema = {
  steps: [
    {
      id: 'basic-details',
      title: 'Basic details',
      subtitle: ['name'],
      attributes: ['name', 'pronouns', 'level'],
    },
    {
      id: 'heritage',
      title: 'Heritage',
      subtitle: ['community', 'ancestry'],
      attributes: ['ancestry', 'community'],
      prerequesites: ['name'],
    },
    {
      id: 'characterClass',
      title: 'Class',
      subtitle: ['characterClass', 'subclass'],
      attributes: ['characterClass', 'subclass', 'traits', 'cards'],
      prerequesites: ['name'],
    },
    {
      id: 'gear',
      title: 'Gear',
      attributes: ['weapons', 'armor', 'inventory'],
      prerequesites: ['characterClass'],
    },
    {
      id: 'description',
      title: 'Description',
      attributes: ['description', 'backgroundQuestions', 'connectionQuestions', 'experiences'],
      prerequesites: ['characterClass'],
    },
    {
      id: 'level-up',
      title: 'Level up',
      attributes: [
        'level',
        'level-2',
        'level-3',
        'level-4',
        'level-5',
        'level-6',
        'level-7',
        'level-8',
        'level-9',
        'level-10',
      ],
      prerequesites: ['characterClass', 'subclass'],
    },
  ],
  attributes: [
    {
      id: 'name',
      label: 'Character name',
      field: 'text',
      panel: PanelType.OVERVIEW,
    },
    {
      id: 'pronouns',
      label: 'Pronouns',
      field: 'text',
      className: 'pronouns-field',
      panel: PanelType.OVERVIEW,
    },
    {
      id: 'level',
      label: 'Level',
      field: 'number',
      className: 'level-field',
      panel: PanelType.OVERVIEW,
    },
    {
      id: 'ancestry',
      label: 'Select your ancestry',
      field: 'selection',
      panel: PanelType.ANCESTRY,
    },
    {
      id: 'community',
      label: 'Choose your community',
      field: 'selection',
      panel: PanelType.COMMUNITY,
    },
    {
      id: 'characterClass',
      label: 'Choose your class',
      field: 'selection',
      panel: PanelType.CLASS,
    },
    {
      id: 'subclass',
      label: 'Pick your subclass',
      field: 'selection',
      panel: PanelType.SUBCLASS,
      prerequesites: ['characterClass'],
    },
    {
      id: 'traits',
      label: 'Set your traits',
      field: 'selection',
      panel: PanelType.TRAITS,
      prerequesites: ['characterClass'],
    },
    {
      id: 'cards',
      label: 'Take domain deck cards',
      field: 'selection',
      panel: PanelType.CARDS,
      prerequesites: ['characterClass'],
    },
    {
      id: 'weapons',
      label: 'Choose starting weapons',
      field: 'selection',
      panel: PanelType.WEAPONS,
    },
    {
      id: 'armor',
      label: 'Choose starting armor',
      field: 'selection',
      panel: PanelType.ARMOR,
    },
    {
      id: 'inventory',
      label: 'Take starting inventory',
      field: 'selection',
      panel: PanelType.INVENTORY,
    },
    {
      id: 'description',
      label: 'Choose your description',
      field: 'selection',
      panel: PanelType.DESCRIPTION,
    },
    {
      id: 'backgroundQuestions',
      label: 'Answer background questions',
      field: 'selection',
      panel: PanelType.BACKGROUNDQUESTIONS,
    },
    {
      id: 'connectionQuestions',
      label: 'Create connections',
      field: 'selection',
      panel: PanelType.CONNECTIONQUESTIONS,
    },
    {
      id: 'experiences',
      label: 'Generate experiences',
      field: 'selection',
      panel: PanelType.EXPERIENCES,
    },
    {
      id: 'level-2',
      label: 'Level 2',
      field: 'selection',
      panel: PanelType.LEVEL2,
    },
    {
      id: 'level-3',
      label: 'Level 3',
      field: 'selection',
      panel: PanelType.LEVEL3,
    },
    {
      id: 'level-4',
      label: 'Level 4',
      field: 'selection',
      panel: PanelType.LEVEL4,
    },
    {
      id: 'level-5',
      label: 'Level 5',
      field: 'selection',
      panel: PanelType.LEVEL5,
    },
    {
      id: 'level-6',
      label: 'Level 6',
      field: 'selection',
      panel: PanelType.LEVEL6,
    },
    {
      id: 'level-7',
      label: 'Level 7',
      field: 'selection',
      panel: PanelType.LEVEL7,
    },
    {
      id: 'level-8',
      label: 'Level 8',
      field: 'selection',
      panel: PanelType.LEVEL8,
    },
    {
      id: 'level-9',
      label: 'Level 9',
      field: 'selection',
      panel: PanelType.LEVEL9,
    },
    {
      id: 'level-10',
      label: 'Level 10',
      field: 'selection',
      panel: PanelType.LEVEL10,
    },
  ],
};

export default schema;
