export interface IStep {
  id: string;
  index: number;
  name: string;
  description?: string;
}

export interface ISteps {
  steps: IStep[];
}
