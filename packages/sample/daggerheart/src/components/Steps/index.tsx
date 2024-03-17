import { ISteps } from '../../types';
import Step from './Step';
import './style.scss';

const Steps = ({ steps }: ISteps) => {
  return steps.map((step) => <Step key={'step-' + step.id} {...step} />);
};

export default Steps;
