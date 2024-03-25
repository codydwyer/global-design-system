import Step, { IStep } from "./Step";
import "./style.scss";

export interface ISteps {
  steps: IStep[];
}

const Steps = ({ steps }: ISteps) => {
  return steps.map((step) => <Step key={"step-" + step.id} {...step} />);
};

export default Steps;
