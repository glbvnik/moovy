import { IFilm, IСoncreteFilm } from "./../../../models/film";

export interface FilmState {
  films: IFilm[];
  totalResults: number;
  film: IСoncreteFilm;
  ratedFilms: IСoncreteFilm[];
  genres: string[];
  badRequest: boolean;
  loader: boolean;
}

export enum FilmActionEnum {
  SET_FILMS = "SET_FILMS",
  SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS",
  SET_CONCRETE_FILM = "SET_CONCRETE_FILM",
  SET_RATED_FILMS = "SET_RATED_FILMS",
  SET_GENRES = "SET_GENRES",
  SET_BAD_REQUEST = "SET_BAD_REQUEST",
  SET_LOADER = "SET_LOADER",
}

export interface SetFilmsAction {
  type: FilmActionEnum.SET_FILMS;
  payload: IFilm[];
}

export interface SetTotalResultsAction {
  type: FilmActionEnum.SET_TOTAL_RESULTS;
  payload: number;
}

export interface SetConcreteFilmAction {
  type: FilmActionEnum.SET_CONCRETE_FILM;
  payload: IСoncreteFilm;
}

export interface SetRatedFilmsAction {
  type: FilmActionEnum.SET_RATED_FILMS;
  payload: IСoncreteFilm[];
}

export interface SetGenresAction {
  type: FilmActionEnum.SET_GENRES;
  payload: string[];
}

export interface SetBadRequestAction {
  type: FilmActionEnum.SET_BAD_REQUEST;
  payload: boolean;
}

export interface SetLoaderAction {
  type: FilmActionEnum.SET_LOADER;
  payload: boolean;
}

export type FilmAction =
  | SetFilmsAction
  | SetTotalResultsAction
  | SetConcreteFilmAction
  | SetRatedFilmsAction
  | SetGenresAction
  | SetBadRequestAction
  | SetLoaderAction;
