import React, { FC } from "react";
import { useClasses } from "../styles/classes";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styles } from "../styles/mySelectSx";

interface MySelectProps {
  genre: string;
  genres: string[];
  handleSelectChange: (e: SelectChangeEvent<string>) => void;
}

const MySelect: FC<MySelectProps> = ({ genre, genres, handleSelectChange }) => {
  const classes = useClasses();

  return (
    <Grid className={classes.wrapper} container justifyContent="center">
      <Grid className={classes.maxWidth} container>
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            label="Genre"
            onChange={handleSelectChange}
            value={genre}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {genres.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select film genre</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default MySelect;
