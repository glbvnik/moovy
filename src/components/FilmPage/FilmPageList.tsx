import React, { FC } from "react";
import { IСoncreteFilm } from "../../models/film";
import { List, ListItem, ListItemText } from "@mui/material";
import { styles } from "../../styles/filmSx";

interface FilmPageListProps {
  film: IСoncreteFilm;
}

const FilmPageList: FC<FilmPageListProps> = ({ film }) => {
  return (
    <List sx={styles.list}>
      <ListItem disableGutters secondaryAction={film.Year}>
        <ListItemText>Year</ListItemText>
      </ListItem>
      <ListItem disableGutters secondaryAction={film.Country}>
        <ListItemText>Country</ListItemText>
      </ListItem>
      <ListItem className="genre" disableGutters secondaryAction={film.Genre}>
        <ListItemText>Genre</ListItemText>
      </ListItem>
      <ListItem disableGutters secondaryAction={film.Runtime}>
        <ListItemText>Runtime</ListItemText>
      </ListItem>
      <ListItem disableGutters secondaryAction={film.Director}>
        <ListItemText>Director</ListItemText>
      </ListItem>
      <ListItem className="actors" disableGutters secondaryAction={film.Actors}>
        <ListItemText>Actors</ListItemText>
      </ListItem>
      <ListItem disableGutters secondaryAction={film.imdbRating}>
        <ListItemText>IMDb Rating</ListItemText>
      </ListItem>
    </List>
  );
};

export default FilmPageList;
