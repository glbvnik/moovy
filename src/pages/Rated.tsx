import React, { FC, useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../hooks/useTyped";
import { useActions } from "../hooks/useAction";
import FilmService from "../services/film";
import { IСoncreteFilm } from "../models/film";
import MySelect from "../components/MySelect";
import FilmList from "../components/FilmList";
import { SelectChangeEvent } from "@mui/material";

const Rated: FC = () => {
  const { ratedFilms, genres, lastRatedFilm, films, film, loader } =
    useTypedSelector((state) => state.film);

  const { setCurrentGenres, setRatedFilms, setLastRatedFilm, setFilms } =
    useActions();

  const memorizedFilms = useRef(ratedFilms);

  const [genre1, setGenre] = useState("");

  useEffect(() => {
    if (lastRatedFilm) {
      let newFilms;

      // if rating is null, then delete rated film and set right current genres
      if (!lastRatedFilm.rating) {
        newFilms = memorizedFilms.current.filter(
          (f) => f.imdbID !== lastRatedFilm.imdbID
        );

        setCurrentGenres(newFilms);

        if (ratedFilms.length === 0) {
          setGenre("");
        }
      } else {
        newFilms = memorizedFilms.current.map((f) => {
          if (f.imdbID === lastRatedFilm.imdbID) {
            return lastRatedFilm;
          } else {
            return f;
          }
        });
      }

      memorizedFilms.current = newFilms;
    }
    /* eslint-disable */
  }, [lastRatedFilm]);

  useEffect(() => {
    setLastRatedFilm({} as IСoncreteFilm);
    setCurrentGenres(memorizedFilms.current);

    return () => {
      setRatedFilms(memorizedFilms.current);
      setFilms(FilmService.syncFilms(films, memorizedFilms.current));
      setLastRatedFilm({} as IСoncreteFilm);
    };
  }, []);

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const currentGenre = e.target.value;

    setGenre(currentGenre);

    if (currentGenre) {
      const newFilmsArr = memorizedFilms.current.filter((film) => {
        if (film.Genre.split(", ").includes(currentGenre)) {
          return film;
        }
      });

      return setRatedFilms(newFilmsArr);
    }

    return setRatedFilms(memorizedFilms.current);
  };

  return (
    <>
      <MySelect
        genre={genre1}
        genres={genres}
        handleSelectChange={handleSelectChange}
      />
      <FilmList
        films={ratedFilms}
        film={film}
        loader={loader}
        sx={{ paddingBottom: "30px !important" }}
      />
    </>
  );
};

export default Rated;
