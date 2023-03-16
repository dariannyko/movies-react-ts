import { ApplyAllAction } from '../apply-filters/types';
export interface SearchParams {
  filmMark: string;
  popularity: string;
  genreName: string;
}
export interface SearchParamsPayload {
  type: string;
  payload: SearchParams | string;
}

export type SearchPayload = ApplyAllAction | SearchParamsPayload;
