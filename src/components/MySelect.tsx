import React, { FC, useState } from "react";
import { useClasses } from "../styles/classes";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styles } from "../styles/mySelectSx";

interface MySelectProps {
  genres: string[];
  handleSelectChange: (page: string) => void;
}

const MySelect: FC<MySelectProps> = ({ genres, handleSelectChange }) => {
  const [genre, setGenre] = useState("");

  const classes = useClasses();

  const handleChange = (e: SelectChangeEvent<string>) => {
    setGenre(e.target.value);

    handleSelectChange(e.target.value);
  };

  return (
    <Grid className={classes.wrapper} container justifyContent="center">
      <Grid className={classes.maxWidth} container>
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            label="Genre"
            onChange={handleChange}
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
