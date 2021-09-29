import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useTypedSelector } from "../hooks/useTyped";
import { useActions } from "../hooks/useAction";
import { IFilm, IСoncreteFilm } from "../models/film";
import { styles } from "../styles/filmCardSx";

interface FilmCardProps {
  film: IFilm | IСoncreteFilm;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { films, ratedFilms } = useTypedSelector((state) => state.film);

  const { setFilmRating, fetchFilm } = useActions();

  const isMedium = useMediaQuery("(min-width: 375px)");
  const isLarge = useMediaQuery("(min-width: 1200px)");

  const defineRatingSize = () => {
    if (isMedium && !isLarge) {
      return "medium";
    } else if (isLarge) {
      return "large";
    } else {
      return "small";
    }
  };

  const history = useHistory();

  const handleClick = async () => {
    await fetchFilm(film.imdbID, ratedFilms);

    history.push(`/film/${film.imdbID}`);
  };

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={film.Poster}
        alt={film.Title}
        onClick={handleClick}
        sx={styles.filmImage}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <CardContent
          sx={
            film.hasOwnProperty("Genre")
              ? styles.contentWithGenre
              : styles.content
          }
        >
          <Typography variant="h3" sx={styles.filmName} onClick={handleClick}>
            {film.Title}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={styles.filmYear}>
            {film.Year}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={styles.filmGenre}>
            {film.hasOwnProperty("Genre") ? (film as IСoncreteFilm).Genre : ""}
          </Typography>
        </CardContent>
        <Box sx={styles.ratingBox}>
          <Rating
            size={defineRatingSize()}
            onChange={(_, value) =>
              setFilmRating(films, ratedFilms, film.imdbID, value)
            }
            value={film.rating}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default FilmCard;
