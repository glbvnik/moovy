import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Grid, Paper } from "@mui/material";
import Image from "material-ui-image";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTyped";
import { useClasses } from "../styles/classes";
import { IСoncreteFilm } from "../models/film";
import FilmPageList from "../components/FilmPage/FilmPageList";
import FilmPageHeader from "../components/FilmPage/FilmPageHeader";
import Loader from "../components/Loader";
import { styles } from "../styles/filmSx";

const Film: FC = () => {
  const { film, films, ratedFilms, loader } = useTypedSelector(
    (state) => state.film
  );

  const { fetchFilm, setFilm, setFilmRating, setLoader } = useActions();

  const { imdbId } = useParams<{ imdbId: string }>();

  useEffect(() => {
    if (!film.imdbID) {
      fetchFilm(imdbId, ratedFilms);
    }

    return () => {
      setFilm({} as IСoncreteFilm);
      setLoader(true);
    };
    /* eslint-disable */
  }, []);

  const handleRatingChange = (_: any, value: number | null) => {
    setFilm({ ...film, rating: value });

    setFilmRating(films, ratedFilms, film.imdbID, value);
  };

  const isMedium = useMediaQuery("(min-width: 414px)");
  const isLarge = useMediaQuery("(min-width: 600px)");

  const classes = useClasses();

  if (loader) {
    return <Loader />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        direction="row"
        className={classes.maxWidth}
        sx={isMedium ? styles.normalContainer : undefined}
      >
        <Grid
          item
          xs={isMedium ? 6 : 12}
          sm={5}
          md={4}
          lg={3}
          sx={{ flexDirection: "column" }}
        >
          <Image
            src={film.Poster}
            alt={film.Title}
            style={{ paddingTop: 0 }}
            imageStyle={isMedium ? styles.image : styles.mobileImage}
          />
          {(!isMedium || isLarge) && (
            <Box sx={styles.content}>
              {(!isMedium || !isLarge) && (
                <FilmPageHeader
                  film={film}
                  handleRatingChange={handleRatingChange}
                />
              )}
              <FilmPageList film={film} />
            </Box>
          )}
        </Grid>
        {isMedium && !isLarge && (
          <Grid item xs={6}>
            <FilmPageList film={film} />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={7}
          md={8}
          lg={9}
          sx={{
            flexDirection: "column",
            "@media (min-width: 600px)": {
              padding: "0 10px",
            },
            "@media (min-width: 900px)": {
              padding: "0 36px",
            },
            "@media (min-width: 1200px)": {
              padding: "0 40px",
            },
          }}
        >
          <Box sx={styles.content}>
            {isMedium && (
              <FilmPageHeader
                film={film}
                handleRatingChange={handleRatingChange}
              />
            )}
            <Paper elevation={0} sx={styles.plot}>
              {film.Plot}
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Film;
