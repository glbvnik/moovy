import React, { FC } from "react";
import { Box, Rating, Typography } from "@mui/material";
import { IСoncreteFilm } from "../../models/film";
import { styles } from "../../styles/filmSx";

interface FilmPageHeaderProps {
  film: IСoncreteFilm;
  handleRatingChange: (_: any, value: number | null) => void;
}

const FilmPageHeader: FC<FilmPageHeaderProps> = ({
  film,
  handleRatingChange,
}) => {
  return (
    <Box>
      {film.hasOwnProperty("rating") && (
        <Box sx={styles.ratingBox}>
          <Rating onChange={handleRatingChange} value={film.rating} />
        </Box>
      )}
      <Typography variant="h2">{film.Title}</Typography>
    </Box>
  );
};

export default FilmPageHeader;
