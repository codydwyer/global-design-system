import ReactHtmlParser from 'react-html-parser';
import { IWeapon } from '~/types';
import { weapons } from '~/data/items';
import { IPanelProps } from '../';
import './style.scss';

export interface IWeaponProps {
  weapon: IWeapon;
}

export const Weapon = ({ weapon }: IWeaponProps) => {
  const { tier, type, name, trait, range, damage, burden, feature } = weapon;

  return (
    <div className="weapon">
      <h4 className="name">{name}</h4>
      <div className="summary">
        <span className="tier">Tier {tier}, </span>
        <span className="burden">{burden}, </span>
        <span className="trait">{trait}-based, </span>
        <span className="type">{type}, </span>
        <span className="range">{range} </span>
      </div>
      <div className="damage">Damage: {damage}</div>
      {feature && <div className="feature">{ReactHtmlParser(feature)}</div>}
    </div>
  );
};

export interface IWeaponsPanelProps extends IPanelProps {}

const WeaponsPanel = ({ character }: IWeaponsPanelProps) => {
  const { inventory } = character;

  const startingWeapons = weapons.filter((weapon) => weapon.tier === 0);

  return (
    <div className="weapons-panel">
      <h3>Choose your starting weapons</h3>
      <div className="weapons-container">
        {startingWeapons.map((weapon, index) => {
          return <Weapon key={`weapon-${index}`} weapon={weapon} />;
        })}
      </div>
    </div>
  );
};

export default WeaponsPanel;
