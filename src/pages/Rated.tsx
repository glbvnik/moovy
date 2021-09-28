import React, { FC, useEffect, useMemo } from "react";
import { useTypedSelector } from "../hooks/useTyped";
import FilmList from "../components/FilmList";
import { useActions } from "../hooks/useAction";
import MySelect from "../components/MySelect";

const Rated: FC = () => {
  const { ratedFilms, genres } = useTypedSelector((state) => state.film);

  const { setCurrentGenres, setRatedFilms } = useActions();

  /* eslint-disable */
  const memorizedFilms = useMemo(() => ratedFilms, []);

  useEffect(() => {
    setCurrentGenres(ratedFilms);

    return () => {
      setRatedFilms(memorizedFilms);
    };
  }, []);

  const handleSelectChange = (genre: string) => {
    if (genre) {
      const newFilmsArr = memorizedFilms.filter((film) => {
        if (film.Genre.split(", ").includes(genre)) {
          return film;
        }
      });

      return setRatedFilms(newFilmsArr);
    }

    return setRatedFilms(memorizedFilms);
  };

  return (
    <>
      <MySelect genres={genres} handleSelectChange={handleSelectChange} />
      <FilmList films={ratedFilms} />
    </>
  );
};

export default Rated;
