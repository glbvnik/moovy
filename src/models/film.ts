export interface IFilm {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  rating: number | null;
}

export type IFilmFetched = Omit<IFilm, "rating">;

export interface IСoncreteFilm extends IFilm {
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  imdbRating: string;
}
