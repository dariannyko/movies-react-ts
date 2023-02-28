export interface ApplyAllAction {
  type: string;
  payload: string;
}
export interface ApplyGenresAction {
  type: string;
  payload: number[];
}

export type FilterAction = ApplyAllAction | ApplyGenresAction;
