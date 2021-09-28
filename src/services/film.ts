import $api from "../http";
import { IFilm, IFilmFetched, IСoncreteFilm } from "./../models/film";

export default class FilmService {
  static async fetchFilms(title: string, year: string, page: number) {
    const response = await $api.get<{
      Search: IFilmFetched[];
      totalResults: string;
    }>("", {
      params: { s: title, y: year, page },
    });

    return [response.data.Search, response.data.totalResults];
  }
  static async fetchOneFilm(imdbId: string) {
    const response = await $api.get<IСoncreteFilm>("", {
      params: { i: imdbId, plot: "full" },
    });

    return response.data;
  }
  // compares ratedFilms array and fetched films to set film ratings
  static syncFilms(
    films: IFilmFetched[],
    ratedFilms: IFilm[] | IСoncreteFilm[]
  ): IFilm[] {
    if (ratedFilms.length === 0) {
      return films.map((film) => ({ ...film, rating: null }));
    }

    return films.map((film) => {
      const ratedFilm = ratedFilms.find(
        (rFilm) => rFilm.imdbID === film.imdbID
      );

      if (ratedFilm) {
        return { ...film, rating: ratedFilm!.rating };
      }

      return { ...film, rating: null };
    });
  }
  static findFilm(filmsArr: IFilm[] | IСoncreteFilm[], imdbId: string) {
    return filmsArr.find((film) => film.imdbID === imdbId);
  }
  static updateRatedFilms(
    filmsArr: IСoncreteFilm[],
    imdbId: string,
    rating: number | null
  ) {
    return filmsArr.map((film) => {
      if (film.imdbID === imdbId) {
        return { ...film, rating };
      }

      return film;
    });
  }
  static addOrUpdatedRatedFilm(
    filmsArr: IСoncreteFilm[],
    film: IFilm,
    imdbId: string,
    rating: number | null
  ) {
    let newRatedFilms;

    if (!filmsArr.some((f) => f.imdbID === film.imdbID)) {
      newRatedFilms = [...filmsArr, film];
    } else {
      newRatedFilms = FilmService.updateRatedFilms(filmsArr, imdbId, rating);
    }

    return newRatedFilms;
  }
  static deleteRatedFilm(filmsArr: IСoncreteFilm[], imdbId: string) {
    return filmsArr.filter((film) => film.imdbID !== imdbId);
  }
}
