export interface SearchState {
  title: string;
  year: string;
  page: number;
}

export enum SearchActionEnum {
  SET_TITLE = "SET_TITLE",
  SET_YEAR = "SET_YEAR",
  SET_PAGE = "SET_PAGE",
}

export interface SetTitleAction {
  type: SearchActionEnum.SET_TITLE;
  payload: string;
}

export interface SetYearAction {
  type: SearchActionEnum.SET_YEAR;
  payload: string;
}

export interface SetPageAction {
  type: SearchActionEnum.SET_PAGE;
  payload: number;
}

export type SearchAction = SetTitleAction | SetYearAction | SetPageAction;
