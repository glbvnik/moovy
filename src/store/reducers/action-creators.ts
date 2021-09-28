import { searchActionCreators } from "./search/action-creators";
import { filmActionCreators } from "./film/action-creators";

export const allActionCreators = {
  ...searchActionCreators,
  ...filmActionCreators,
};
