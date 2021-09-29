import React, { FC } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import FilmCard from "./FilmCard";
import { IFilm, IСoncreteFilm } from "../models/film";
import { useClasses } from "../styles/classes";
import { styles } from "../styles/filmListSx";

interface FilmListProps {
  films: IFilm[] | IСoncreteFilm[];
  film: IСoncreteFilm;
  loader: boolean;
}

const FilmList: FC<FilmListProps> = ({ films, film, loader }) => {
  const isMedium = useMediaQuery("(min-width:900px)");
  const isLarge = useMediaQuery("(min-width:1800px)");

  const classes = useClasses();

  return (
    <>
      {!loader && !film.imdbID && (
        <Box sx={styles.loader}>
          <LinearProgress color="success" />
        </Box>
      )}
      <Grid className={classes.wrapper} container justifyContent="center">
        <Grid
          className={isMedium ? classes.maxWidth : undefined}
          container
          direction={isMedium ? "row" : "column"}
          spacing={isLarge ? 3 : 2}
          sx={styles.grid}
        >
          {films.map((film) => (
            <Grid item key={Math.random()} md={6}>
              <FilmCard film={film} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default FilmList;
