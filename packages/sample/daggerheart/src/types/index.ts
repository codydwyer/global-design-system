interface Item {
  id: number,
  name: string,
  description?: string,
}

export interface IStep extends Item {
  index: number,
}

export interface ISteps {
  steps: IStep[]
}

export interface ISubclass extends Item {
}

export interface IDomain extends Item {
}

export interface IClass extends Item {
  id: number,
  name: string,
  subclasses: number[],
  domains: number[]
}