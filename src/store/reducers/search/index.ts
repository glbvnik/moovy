import { SearchAction, SearchActionEnum, SearchState } from "./types";

const initialState: SearchState = {
  title: "",
  year: "",
  page: 1,
};

export default function SearchReducer(
  state = initialState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case SearchActionEnum.SET_TITLE:
      return { ...state, title: action.payload };

    case SearchActionEnum.SET_YEAR:
      return { ...state, year: action.payload };

    case SearchActionEnum.SET_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
}
