import { IStep } from '../../types';
import './style.scss';

const Step = ({ index, name, description }: IStep) => {
  return (
    <div className="step">
      <h3>
        <span className="step-index">{index}</span> {name}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
