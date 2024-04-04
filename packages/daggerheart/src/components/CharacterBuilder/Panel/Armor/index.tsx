import ReactHtmlParser from 'react-html-parser';
import { IArmor } from '~/types';
import { armor } from '~/data/items';
import { IPanelProps } from '../';
import './style.scss';

export interface IArmorProps {
  item: IArmor;
}

export const Armor = ({ item }: IArmorProps) => {
  const { tier, type, name, score, feature } = item;

  return (
    <div className="item">
      <h4 className="name">{name}</h4>
      <div className="summary">
        <span className="tier">Tier {tier}, </span>
        <span className="type">{type}, </span>
      </div>
      <div className="damage">Score: {score}</div>
      {feature && <div className="feature">{ReactHtmlParser(feature)}</div>}
    </div>
  );
};

export interface IArmorPanelProps extends IPanelProps {}

const ArmorPanel = ({ character }: IArmorPanelProps) => {
  const { inventory } = character;

  const startingArmor = armor.filter((item) => item.tier === 0);

  return (
    <div className="armor-panel">
      <h3>Choose your starting armor</h3>
      <div className="armor-container">
        {startingArmor.map((item, index) => {
          return <Armor key={`item-${index}`} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ArmorPanel;
