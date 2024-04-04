import { ICharacter } from '~/types';
import { IBuilderAttribute } from '../schema';

import {
  AncestryPanel,
  ArmorPanel,
  BackgroundQuestionsPanel,
  CardsPanel,
  ClassPanel,
  CommunityPanel,
  ConnectionQuestionsPanel,
  DescriptionPanel,
  InventoryPanel,
  Level2Panel,
  Level3Panel,
  Level4Panel,
  Level5Panel,
  Level6Panel,
  Level7Panel,
  Level8Panel,
  Level9Panel,
  Level10Panel,
  OverviewPanel,
  SubclassPanel,
  TraitsPanel,
  WeaponsPanel,
} from '.';

export { default as AncestryPanel, type IAncestryPanelProps } from './Ancestry';
export { default as ArmorPanel, type IArmorPanelProps } from './Armor';
export { default as BackgroundQuestionsPanel, type IBackgroundQuestionsPanelProps } from './BackgroundQuestions';
export { default as CardsPanel, type ICardsPanelProps } from './Cards';
export { default as ClassPanel, type IClassPanelProps } from './Class';
export { default as CommunityPanel, type ICommunityPanelProps } from './Community';
export { default as ConnectionQuestionsPanel, type IConnectionQuestionsPanelProps } from './ConnectionQuestions';
export { default as DescriptionPanel, type IDescriptionPanelProps } from './Description';
export { default as InventoryPanel, type IInventoryPanelProps } from './Inventory';
export { default as Level2Panel, type ILevel2PanelProps } from './Level2';
export { default as Level3Panel, type ILevel3PanelProps } from './Level3';
export { default as Level4Panel, type ILevel4PanelProps } from './Level4';
export { default as Level5Panel, type ILevel5PanelProps } from './Level5';
export { default as Level6Panel, type ILevel6PanelProps } from './Level6';
export { default as Level7Panel, type ILevel7PanelProps } from './Level7';
export { default as Level8Panel, type ILevel8PanelProps } from './Level8';
export { default as Level9Panel, type ILevel9PanelProps } from './Level9';
export { default as Level10Panel, type ILevel10PanelProps } from './Level10';
export { default as OverviewPanel, type IOverviewPanelProps } from './Overview';
export { default as SubclassPanel, type ISubclassPanelProps } from './Subclass';
export { default as TraitsPanel, type ITraitsPanelProps } from './Traits';
export { default as WeaponsPanel, type IWeaponsPanelProps } from './Weapons';

import './style.scss';

export enum PanelType {
  ANCESTRY = 'ancestry',
  ARMOR = 'armor',
  BACKGROUNDQUESTIONS = 'backgroundQuestions',
  CARDS = 'cards',
  CLASS = 'class',
  COMMUNITY = 'community',
  CONNECTIONQUESTIONS = 'connectionQuestions',
  DESCRIPTION = 'description',
  EXPERIENCES = 'experiences',
  INVENTORY = 'inventory',
  LEVEL2 = 'level-2',
  LEVEL3 = 'level-3',
  LEVEL4 = 'level-4',
  LEVEL5 = 'level-5',
  LEVEL6 = 'level-6',
  LEVEL7 = 'level-7',
  LEVEL8 = 'level-8',
  LEVEL9 = 'level-9',
  LEVEL10 = 'level-10',
  OVERVIEW = 'overview',
  SUBCLASS = 'subclass',
  TRAITS = 'traits',
  WEAPONS = 'weapons',
}

export interface IPanelProps {
  character: ICharacter;
  currentSelection: IBuilderAttribute;
  setSelection: React.Dispatch<React.SetStateAction<IBuilderAttribute>>;
}

const Panel = (props: IPanelProps) => {
  const type = props.currentSelection.panel;

  switch (type) {
    case PanelType.ANCESTRY:
      return <AncestryPanel {...props} />;
    case PanelType.ARMOR:
      return <ArmorPanel {...props} />;
    case PanelType.BACKGROUNDQUESTIONS:
      return <BackgroundQuestionsPanel {...props} />;
    case PanelType.CARDS:
      return <CardsPanel {...props} />;
    case PanelType.CLASS:
      return <ClassPanel {...props} />;
    case PanelType.COMMUNITY:
      return <CommunityPanel {...props} />;
    case PanelType.CONNECTIONQUESTIONS:
      return <ConnectionQuestionsPanel {...props} />;
    case PanelType.DESCRIPTION:
      return <DescriptionPanel {...props} />;
    case PanelType.INVENTORY:
      return <InventoryPanel {...props} />;
    case PanelType.LEVEL2:
      return <Level2Panel {...props} />;
    case PanelType.LEVEL3:
      return <Level3Panel {...props} />;
    case PanelType.LEVEL4:
      return <Level4Panel {...props} />;
    case PanelType.LEVEL5:
      return <Level5Panel {...props} />;
    case PanelType.LEVEL6:
      return <Level6Panel {...props} />;
    case PanelType.LEVEL7:
      return <Level7Panel {...props} />;
    case PanelType.LEVEL8:
      return <Level8Panel {...props} />;
    case PanelType.LEVEL9:
      return <Level9Panel {...props} />;
    case PanelType.LEVEL10:
      return <Level10Panel {...props} />;
    case PanelType.OVERVIEW:
      return <OverviewPanel {...props} />;
    case PanelType.SUBCLASS:
      return <SubclassPanel {...props} />;
    case PanelType.TRAITS:
      return <TraitsPanel {...props} />;
    case PanelType.WEAPONS:
      return <WeaponsPanel {...props} />;
    default:
      throw new Error('Invalid Panel Type');
  }
};

export default Panel;
