import {
  FilmActionEnum,
  SetBadRequestAction,
  SetConcreteFilmAction,
  SetFilmsAction,
  SetGenresAction,
  SetLastRatedFilmAction,
  SetLoaderAction,
  SetRatedFilmsAction,
  SetTotalResultsAction,
} from "./types";
import { IFilm, IFilmFetched, IСoncreteFilm } from "./../../../models/film";
import { AppDispatch } from "./../../index";
import FilmService from "../../../services/film";

export const filmActionCreators = {
  setFilms: (payload: IFilm[]): SetFilmsAction => ({
    type: FilmActionEnum.SET_FILMS,
    payload,
  }),
  setTotalResults: (payload: number): SetTotalResultsAction => ({
    type: FilmActionEnum.SET_TOTAL_RESULTS,
    payload,
  }),
  setFilm: (payload: IСoncreteFilm): SetConcreteFilmAction => ({
    type: FilmActionEnum.SET_CONCRETE_FILM,
    payload,
  }),
  setRatedFilms: (payload: IСoncreteFilm[]): SetRatedFilmsAction => ({
    type: FilmActionEnum.SET_RATED_FILMS,
    payload,
  }),
  setLastRatedFilm: (payload: IСoncreteFilm): SetLastRatedFilmAction => ({
    type: FilmActionEnum.SET_LAST_RATED_FILM,
    payload,
  }),
  setGenres: (payload: string[]): SetGenresAction => ({
    type: FilmActionEnum.SET_GENRES,
    payload,
  }),
  setBadRequest: (payload: boolean): SetBadRequestAction => ({
    type: FilmActionEnum.SET_BAD_REQUEST,
    payload,
  }),
  setLoader: (payload: boolean): SetLoaderAction => ({
    type: FilmActionEnum.SET_LOADER,
    payload,
  }),
  fetchFilms:
    (title: string, year = "", page: number, ratedFilms: IСoncreteFilm[]) =>
    async (dispatch: AppDispatch) => {
      try {
        const [films, totalResults] = await FilmService.fetchFilms(
          title,
          year,
          page
        );

        dispatch(
          filmActionCreators.setFilms(
            FilmService.syncFilms(films as IFilmFetched[], ratedFilms)
          )
        );
        dispatch(filmActionCreators.setTotalResults(+totalResults as number));
        dispatch(filmActionCreators.setLoader(true));
      } catch (e) {
        dispatch(filmActionCreators.setFilms([]));
        dispatch(filmActionCreators.setTotalResults(0));
        dispatch(filmActionCreators.setBadRequest(true));
        dispatch(filmActionCreators.setLoader(true));
      }
    },
  fetchFilm:
    (imdbId: string, ratedFilms: IСoncreteFilm[]) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(filmActionCreators.setLoader(false));

        const film = await FilmService.fetchOneFilm(imdbId);

        const ratedFilm = FilmService.findFilm(ratedFilms, imdbId);

        if (ratedFilm) {
          film.rating = ratedFilm.rating;
        } else {
          film.rating = null;
        }

        dispatch(filmActionCreators.setFilm(film));
      } catch (e) {
        dispatch(filmActionCreators.setLoader(true));
      }
    },
  // this method sets films and ratedFilms arrays
  setFilmRating:
    (
      films: IFilm[],
      ratedFilms: IСoncreteFilm[],
      imdbId: string,
      rating: number | null
    ) =>
    async (dispatch: AppDispatch) => {
      let newRatedFilms: IFilm[] | IСoncreteFilm[];

      const foundRatedFilm = FilmService.findFilm(ratedFilms, imdbId);

      if (foundRatedFilm) {
        foundRatedFilm.rating = rating;
        if (!rating) {
          newRatedFilms = FilmService.deleteRatedFilm(ratedFilms, imdbId);
        } else {
          newRatedFilms = FilmService.updateRatedFilms(
            ratedFilms,
            imdbId,
            rating
          );
        }

        dispatch(
          filmActionCreators.setFilms(
            FilmService.syncFilms(films, newRatedFilms)
          )
        );

        // set lastFilm state to adopt filtering
        dispatch(
          filmActionCreators.setLastRatedFilm(foundRatedFilm as IСoncreteFilm)
        );
      } else {
        const foundFilm = FilmService.findFilm(films, imdbId);

        if (foundFilm) {
          foundFilm.rating = rating;

          newRatedFilms = FilmService.addOrUpdatedRatedFilm(
            ratedFilms,
            foundFilm,
            imdbId,
            rating
          );

          dispatch(
            filmActionCreators.setFilms(
              FilmService.syncFilms(films, newRatedFilms)
            )
          );
        }

        const fetchedFilm = await FilmService.fetchOneFilm(imdbId);
        fetchedFilm.rating = rating;

        newRatedFilms = FilmService.addOrUpdatedRatedFilm(
          ratedFilms,
          fetchedFilm,
          imdbId,
          rating
        );
      }

      dispatch(
        filmActionCreators.setRatedFilms(newRatedFilms as IСoncreteFilm[])
      );
    },
  setCurrentGenres:
    (ratedFilms: IСoncreteFilm[]) => (dispatch: AppDispatch) => {
      const genres = Array.from(
        new Set(ratedFilms.map((film) => film.Genre.split(", ")).flat())
      ).sort();

      dispatch(filmActionCreators.setGenres(genres));
    },
};
