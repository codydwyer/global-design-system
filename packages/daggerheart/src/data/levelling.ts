import { IThresholds } from '~types';

export interface ILevelingOption {
  id: string;
  description: string;
  boxes: number;
  damageThresholdsIncrease?: IThresholds;
}

export interface ITier {
  eachLevelInstructions: string[];
  damageThresholdsIncrease?: IThresholds;
  options: ILevelingOption[];
}

export interface ILevelingGuide {
  tier1: ITier;
  tier2: ITier;
  tier3: ITier;
}

export interface IClassGuide {
  tier2: ITier;
  tier3: ITier;
}

export interface IClassLevelingGuide {
  bard: IClassGuide;
  druid: IClassGuide;
  guardian: IClassGuide;
  ranger: IClassGuide;
  rogue: IClassGuide;
  seraph: IClassGuide;
  sorcerer: IClassGuide;
  warrior: IClassGuide;
  wizard: IClassGuide;
}

export const basicLeveling: ILevelingGuide = {
  tier1: {
    eachLevelInstructions: [
      `Increase your Severe Damage Threshold by +2`,
      `Choose a new Domain Deck card at your Level or lower.`,
    ],
    damageThresholdsIncrease: { severe: 2 },
    options: [
      {
        id: 'character-traits',
        description: `Increase two unmarked Character Traits by +1 and mark them.`,
        boxes: 3,
      },
      {
        id: 'hit-point',
        description: `Permanently add one Hit Point Slot.`,
        boxes: 1,
      },
      {
        id: 'stress-slot',
        description: `Permanently add one Stress Slot.`,
        boxes: 1,
      },
      {
        id: 'experiences',
        description: `Increase two Experiences by +1.`,
        boxes: 1,
      },
      {
        id: 'proficiency',
        description: `Increase your Proficiency by +1.`,
        boxes: 1,
      },
      {
        id: 'armor-evasion',
        description: `Permanently add one Armor Slot or take +1 to your Evasion.`,
        boxes: 1,
      },
      {
        id: 'major',
        description: `Increase your Major Damage Threshold by +2.`,
        boxes: 1,
        damageThresholdsIncrease: { major: 2 },
      },
      {
        id: 'minor',
        description: `Increase your Minor Damage Threshold by +1.`,
        boxes: 1,
        damageThresholdsIncrease: { minor: 1 },
      },
    ],
  },
  tier2: {
    eachLevelInstructions: [
      `Choose a new Domain Deck card at your Level or lower.`,
      `If your loadout is full, you may choose a card to swap.`,
    ],
    options: [
      {
        id: 'character-traits',
        description: `Increase two unmarked Character Traits by +1 and mark them.`,
        boxes: 3,
      },
      {
        id: 'hit-point',
        description: `Permanently add one Hit Point Slot.`,
        boxes: 2,
      },
      {
        id: 'stress-slot',
        description: `Permanently add one Stress Slot.`,
        boxes: 1,
      },
      {
        id: 'experiences',
        description: `Increase two Experiences by +1.`,
        boxes: 1,
      },
      {
        id: 'proficiency',
        description: `Increase your Proficiency by +1.`,
        boxes: 2,
      },
      {
        id: 'armor-evasion',
        description: `Permanently add one Armor Slot or take +1 to your Evasion.`,
        boxes: 2,
      },
      {
        id: 'minor-major',
        description: `Increase your Minor or Major Damage Threshold by +1.`,
        boxes: 1,
        damageThresholdsIncrease: { minor: 1, major: 1 },
      },
      {
        id: 'upgrade',
        description: `Take an upgraded subclass card. Then cross out the multiclass option for this tier.`,
        boxes: 1,
      },
      {
        id: 'multiclass',
        description: `Multiclass: Choose an additional class for your character, then cross out an unused “Take an upgraded subclass card” and the other multiclass option on this sheet.`,
        boxes: 2,
      },
    ],
  },
  tier3: {
    eachLevelInstructions: [
      `Choose a new Domain Deck card at your Level or lower.`,
      `If your loadout is full, you may choose a card to swap.`,
    ],
    options: [
      {
        id: 'character-traits',
        description: `Increase two unmarked Character Traits by +1 and mark them.`,
        boxes: 3,
      },
      {
        id: 'hit-point',
        description: `Permanently add one Hit Point Slot.`,
        boxes: 2,
      },
      {
        id: 'stress-slot',
        description: `Permanently add one Stress Slot.`,
        boxes: 2,
      },
      {
        id: 'experiences',
        description: `Increase two Experiences by +1.`,
        boxes: 1,
      },
      {
        id: 'proficiency',
        description: `Increase your Proficiency by +1.`,
        boxes: 2,
      },
      {
        id: 'armor-evasion',
        description: `Permanently add one Armor Slot or take +1 to your Evasion.`,
        boxes: 2,
      },
      {
        id: 'upgrade',
        description: `Take an upgraded subclass card. Then cross out the multiclass option for this tier.`,
        boxes: 1,
      },
      {
        id: 'multiclass',
        description: `Multiclass: Choose an additional class for your character, then cross out an unused “Take an upgraded subclass card” and the other multiclass option on this sheet.`,
        boxes: 2,
      },
    ],
  },
};

export const classLeveling: IClassLevelingGuide = {
  bard: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +1 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 1,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +1.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  druid: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +2 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 2,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +1.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  guardian: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +2 and Severe by +4.`],
      damageThresholdsIncrease: {
        major: 2,
        severe: 4,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +2 and Severe by +5.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 2,
        severe: 5,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +3.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 3,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +2.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 2,
          },
        },
      ],
    },
  },
  ranger: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +2 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 2,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +1.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  rogue: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +2 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 2,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +1.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  seraph: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +2 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 2,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +1.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  sorcerer: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +1 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 1,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +3.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 3,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  warrior: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 4,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Minor by +1,Major by +2 and Severe by +4.`],
      damageThresholdsIncrease: {
        minor: 1,
        major: 2,
        severe: 4,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +1.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
  wizard: {
    tier2: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major-severe',
          description: `Increase your Major Damage Threshold by +2 or your Severe Damage Threshold by +2.`,
          boxes: 1,
          damageThresholdsIncrease: {
            major: 2,
            severe: 2,
          },
        },
      ],
    },
    tier3: {
      eachLevelInstructions: [`Increase your Damage Thresholds: Major by +1 and Severe by +3.`],
      damageThresholdsIncrease: {
        major: 1,
        severe: 3,
      },
      options: [
        {
          id: 'major',
          description: `Increase your Major Damage Threshold by +2.`,
          boxes: 2,
          damageThresholdsIncrease: {
            major: 1,
          },
        },
        {
          id: 'severe',
          description: `Increase your Severe Damage Threshold by +4.`,
          boxes: 1,
          damageThresholdsIncrease: {
            severe: 4,
          },
        },
      ],
    },
  },
};
