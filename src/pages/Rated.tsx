import React, { FC, useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTyped";
import { useActions } from "../hooks/useAction";
import FilmService from "../services/film";
import { IСoncreteFilm } from "../models/film";
import MySelect from "../components/MySelect";
import FilmList from "../components/FilmList";

const Rated: FC = () => {
  const { ratedFilms, genres, lastRatedFilm, films } = useTypedSelector(
    (state) => state.film
  );

  const { setCurrentGenres, setRatedFilms, setLastRatedFilm, setFilms } =
    useActions();

  const memorizedFilms = useRef(ratedFilms);

  const updatedMemorizedFilms = useRef<IСoncreteFilm[]>([]);

  useEffect(() => {
    if (lastRatedFilm) {
      if (!lastRatedFilm.rating) {
        updatedMemorizedFilms.current = memorizedFilms.current.filter(
          (f) => f.imdbID !== lastRatedFilm.imdbID
        );

        return;
      }

      updatedMemorizedFilms.current = memorizedFilms.current.map((f) => {
        if (f.imdbID === lastRatedFilm.imdbID) {
          return lastRatedFilm;
        } else {
          return f;
        }
      });

      return;
    }

    updatedMemorizedFilms.current = memorizedFilms.current;
  }, [lastRatedFilm]);

  useEffect(() => {
    setLastRatedFilm({} as IСoncreteFilm);
    setCurrentGenres(ratedFilms);

    return () => {
      setRatedFilms(updatedMemorizedFilms.current);
      setFilms(FilmService.syncFilms(films, updatedMemorizedFilms.current));
      setLastRatedFilm({} as IСoncreteFilm);
    };
    /* eslint-disable */
  }, []);

  const handleSelectChange = (genre: string) => {
    if (genre) {
      const newFilmsArr = updatedMemorizedFilms.current.filter((film) => {
        if (film.Genre.split(", ").includes(genre)) {
          return film;
        }
      });

      return setRatedFilms(newFilmsArr);
    }

    return setRatedFilms(updatedMemorizedFilms.current);
  };

  return (
    <>
      <MySelect genres={genres} handleSelectChange={handleSelectChange} />
      <FilmList films={ratedFilms} />
    </>
  );
};

export default Rated;
