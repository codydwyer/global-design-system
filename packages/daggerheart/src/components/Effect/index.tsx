import ReactHtmlParser from 'react-html-parser';
import { TEffect } from '~/types/domain';

export interface IEffectProps {
  effect: TEffect;
}

const Effect = ({ effect }: IEffectProps) => {
  return (
    <div className="effect">
      {typeof effect === 'string' ? (
        ReactHtmlParser(effect)
      ) : (
        <>
          <h5 className="name">{effect.name}</h5>
          <div className="description">{ReactHtmlParser(effect.description)}</div>
        </>
      )}
    </div>
  );
};

export default Effect;
