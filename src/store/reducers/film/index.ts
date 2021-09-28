import { FilmAction, FilmActionEnum, FilmState } from "./types";
import { IСoncreteFilm } from "./../../../models/film";

const initialState: FilmState = {
  films: [],
  totalResults: 0,
  film: {} as IСoncreteFilm,
  ratedFilms: [],
  genres: [],
  badRequest: false,
  loader: true,
};

export default function FilmReducer(
  state = initialState,
  action: FilmAction
): FilmState {
  switch (action.type) {
    case FilmActionEnum.SET_FILMS:
      return { ...state, films: action.payload };

    case FilmActionEnum.SET_TOTAL_RESULTS:
      return { ...state, totalResults: action.payload };

    case FilmActionEnum.SET_CONCRETE_FILM:
      return { ...state, film: action.payload };

    case FilmActionEnum.SET_RATED_FILMS:
      return { ...state, ratedFilms: action.payload };

    case FilmActionEnum.SET_GENRES:
      return { ...state, genres: action.payload };

    case FilmActionEnum.SET_BAD_REQUEST:
      return { ...state, badRequest: action.payload };

    case FilmActionEnum.SET_LOADER:
      return { ...state, loader: action.payload };

    default:
      return state;
  }
}
