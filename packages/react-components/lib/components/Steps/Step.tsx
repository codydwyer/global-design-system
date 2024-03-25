import "./style.scss";

export interface IStep {
  id: string;
  index: number;
  name: string;
  description?: string;
}

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
