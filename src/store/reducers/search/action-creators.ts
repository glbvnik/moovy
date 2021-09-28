import {
  SetTitleAction,
  SearchActionEnum,
  SetYearAction,
  SetPageAction,
} from "./types";
import { AppDispatch } from "./../../index";

export const searchActionCreators = {
  setTitle: (payload: string): SetTitleAction => ({
    type: SearchActionEnum.SET_TITLE,
    payload,
  }),
  setYear: (payload: string): SetYearAction => ({
    type: SearchActionEnum.SET_YEAR,
    payload,
  }),
  setPage: (payload: number): SetPageAction => ({
    type: SearchActionEnum.SET_PAGE,
    payload,
  }),
  setSearchState:
    (title: string, year = "") =>
    (dispatch: AppDispatch) => {
      dispatch(searchActionCreators.setTitle(title));
      dispatch(searchActionCreators.setYear(year));
      dispatch(searchActionCreators.setPage(1));
    },
};
