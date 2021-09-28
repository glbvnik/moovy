import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTyped";
import { useActions } from "../hooks/useAction";
import Search from "../components/Search";
import FilmList from "../components/FilmList";
import ListPagination from "../components/ListPagination";
import ListStates from "../components/ListStates";
import Loader from "../components/Loader";

const Home: FC = () => {
  const { films, totalResults, ratedFilms, badRequest, loader } =
    useTypedSelector((state) => state.film);
  const { title, year, page } = useTypedSelector((state) => state.search);

  const { fetchFilms, setSearchState, setPage, setLoader } = useActions();

  const handleSearch = (title: string, year: Date | null) => {
    setLoader(false);

    setSearchState(title, year?.getFullYear().toString());

    fetchFilms(title, year?.getFullYear().toString(), page, ratedFilms);
  };

  const handlePaginationClick = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (page !== value) {
      fetchFilms(title, year, value, ratedFilms);

      setPage(value);
    }
  };

  const returnList = () => {
    if (loader && !badRequest && films.length === 0) {
      return <ListStates badRequest={false} />;
    } else if (badRequest && films.length === 0) {
      return <ListStates badRequest={true} />;
    } else if (!loader && !badRequest && films.length === 0) {
      return <Loader />;
    }

    return <FilmList films={films} />;
  };

  useEffect(() => {
    setLoader(true);
    /* eslint-disable */
  }, []);

  return (
    <>
      <Search handleSearch={handleSearch} />
      {returnList()}
      {totalResults > 10 && (
        <ListPagination
          page={page}
          totalResults={totalResults}
          handlePaginationClick={handlePaginationClick}
        />
      )}
    </>
  );
};

export default Home;
